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

const configFile = require('./templates/config.js')
const baseOfFile = require('./templates/base.js')
const singleFile = require('./templates/single.js')
const listFile = require('./templates/list.js')
const stylesFile = require('./templates/styles.js')
const archetypeFile = require('./templates/archetype.js')
const scriptFile = require('./templates/script')

const createPostFile = (title, body) => `---
title: '${title}'
draft: false
---
${body}`


exports.handler = async (event) => {
  return (promise = new Promise((resolve, reject) => {
    let zip = Archiver('zip')
    zip
      .append(
        configFile,
        { name: 'config.toml' }
      )
      .append(
        baseOfFile,
        { name: 'layouts/_default/baseof.html' }
      )
      .append(
        singleFile, 
        { name: 'layouts/_default/single.html'}
      )
      .append(
        listFile, 
        { name: 'layouts/_default/list.html'}
      )
      .append(
        stylesFile, 
        { name: 'assets/styles/main.css'}
      )
      .append(
        scriptFile, 
        { name: 'assets/js/index.js'}
      )
      .append(
        archetypeFile, 
        { name: 'archetypes/default.md'}
      )
      .append(
        createPostFile('My First Post', '## Welcome to my first post'), 
        { name: 'content/posts/my-first-post.md'}
      )
      .append(
        createPostFile('My Other Post', '## Welcome to my other post'), 
        { name: 'content/posts/my-other-post.md'}
      )
      .append(
        '', 
        { name: 'data/.gitkeep'}
      )
      .append(
        '', 
        { name: 'themes/.gitkeep'}
      )
      .append(
        '', 
        { name: 'static/.gitkeep'}
      )
      .finalize()

    let buffer = []

    zip.on('data', (data) => buffer.push(data))

    zip.on('end', () => {
      let data = Buffer.concat(buffer)
      resolve(formatResponse(data))
    })
  }))
}
