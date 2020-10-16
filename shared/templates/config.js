const createConfigFile = ({
  baseURL,
  title,
  publishDir,
  paginate,
  googleAnalytics,
}) =>
  `baseURL = "${baseURL}"
languageCode = "en-us"
title = "${title}"
publishDir = "${publishDir}"
${paginate ? `paginate = ${paginate}` : ''}
${googleAnalytics ? `googleAnalytics = "${googleAnalytics}"` : ''}`

module.exports = createConfigFile
