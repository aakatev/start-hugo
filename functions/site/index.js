const baseOfFile = require('../templates/base.js')
const singleFile = require('../templates/single.js')
const listFile = require('../templates/list.js')
const stylesFile = require('../templates/styles.js')
const archetypeFile = require('../templates/archetype.js')
const createConfigFile = require('../templates/config.js')
const createBaseOfFile = require('../templates/base.js')

const siteFactory = (attributes) => {
  let configArgs = {
    baseURL: attributes.configuration.url,
    title: attributes.configuration.name,
    publishDir: attributes.configuration.publishDirectory,
    paginate: attributes.configuration.pagination,
    googleAnalytics: attributes.configuration.googleAnalytics,
  }

  let baseOfArgs = {
    stylesFormat: attributes.options.stylesFormat,
    googleAnalytics: attributes.configuration.googleAnalytics,
  }

  let configFile = createConfigFile(configArgs)
  let baseOfFile = createBaseOfFile(baseOfArgs)

  return {
    configFile,
    baseOfFile,
    singleFile,
    listFile,
    stylesFile,
    archetypeFile,
  }
}

module.exports = {
  siteFactory,
}
