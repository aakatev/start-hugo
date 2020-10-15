const Archiver = require('archiver')

const formatResponse = function (body) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/zip',
      'Content-disposition': `attachment; filename=site${Date.now()}.zip`,
    },
    isBase64Encoded: true,
    body: body.toString('base64'),
  }
  return response
}

const baseOfFile = require('./templates/base.js')
const singleFile = require('./templates/single.js')
const listFile = require('./templates/list.js')
const stylesFile = require('./templates/styles.js')
const archetypeFile = require('./templates/archetype.js')
const scriptFile = require('./templates/script')
const createPostFile = require('./templates/content')
const createConfigFile = require('./templates/config.js')
const createBaseOfFile = require('./templates/base.js')

exports.handler = async (event) => {
  return (promise = new Promise((resolve, reject) => {
    let zip = Archiver('zip')
    let json = JSON.parse(event.body)
    console.log(json)
    let configArgs = {
      baseURL: json.configuration.url,
      title: json.configuration.name,
      publishDir: json.configuration.publishDirectory,
      paginate: json.configuration.pagination,
      googleAnalytics: json.configuration.googleAnalytics
    }
    let configFile = createConfigFile(configArgs)
    zip.append(configFile, { name: 'config.toml' })

    let baseOfArgs = {
      stylesFormat: json.options.stylesFormat,
      googleAnalytics: json.configuration.googleAnalytics,
    }

    let baseOfFile = createBaseOfFile(baseOfArgs)

    zip.append(baseOfFile, { name: 'layouts/_default/baseof.html' })
    zip.append(singleFile, { name: 'layouts/_default/single.html' })
    zip.append(listFile, { name: 'layouts/_default/list.html' })
    zip.append(stylesFile, { name: `assets/styles/main.${json.options.stylesFormat}` })
    zip.append(archetypeFile, { name: 'archetypes/default.md' })
    zip.append(createPostFile('My First Post', '## Welcome to my first post'), {
      name: 'content/posts/my-first-post.md',
    })
    zip.append(createPostFile('My Other Post', '## Welcome to my other post'), {
      name: 'content/posts/my-other-post.md',
    })
    zip.append('', { name: 'data/.gitkeep' })
    zip.append('', { name: 'themes/.gitkeep' })
    zip.append('', { name: 'static/.gitkeep' })
    zip.finalize()

    let buffer = []

    zip.on('data', (data) => buffer.push(data))

    zip.on('end', () => {
      let data = Buffer.concat(buffer)
      resolve(formatResponse(data))
    })
  }))
}
