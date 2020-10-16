const createConfigFile = require('../templates/config.js')
const createBaseOfFile = require('../templates/base.js')
const createStylesFile = require('../templates/styles.js')
const createIndexFile = require('../templates/index')
const createNavbarFile = require('../templates/navbar')
const createSingleFile = require('../templates/single.js')
const createListFile = require('../templates/list.js')
const createContentFile = require('../templates/content')
const createArchetypeFile = require('../templates/archetype.js')

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

  let stylesArgs = {
    stylesFormat: attributes.options.stylesFormat,
  }

  let listArgs = {
    paginate: attributes.configuration.pagination,
  }

  let configFile = createConfigFile(configArgs)
  let baseOfFile = createBaseOfFile(baseOfArgs)
  let stylesFile = createStylesFile(stylesArgs)
  let indexFile = createIndexFile()
  let navbarFile = createNavbarFile()
  let singleFile = createSingleFile()
  let listFile = createListFile(listArgs)
  let archetypeFile = createArchetypeFile()

  let contentFiles =
    attributes.options.pregenerateMD === 'yes'
      ? require('../data').loremMarkDown.map((element) =>
          createContentFile(element.title, element.body)
        )
      : []

  return {
    configFile,
    baseOfFile,
    singleFile,
    listFile,
    stylesFile,
    archetypeFile,
    indexFile,
    navbarFile,
    contentFiles,
  }
}

module.exports = {
  siteFactory,
}
