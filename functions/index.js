const { formatResponse } = require('./response')
const { siteFactory } = require('./site')
const Archiver = require('archiver')

const createPostFile = require('./templates/content')

exports.handler = async (event) => {
  return (promise = new Promise((resolve, reject) => {
    let zip = Archiver('zip')
    let json = JSON.parse(event.body)
    console.log(json)
    
    let site = siteFactory(json)

    zip.append(site.configFile, { name: 'config.toml' })
    zip.append(site.baseOfFile, { name: 'layouts/_default/baseof.html' })
    zip.append(site.singleFile, { name: 'layouts/_default/single.html' })
    zip.append(site.listFile, { name: 'layouts/_default/list.html' })
    zip.append(site.stylesFile, { name: `assets/styles/main.${json.options.stylesFormat}` })
    zip.append(site.archetypeFile, { name: 'archetypes/default.md' })
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
