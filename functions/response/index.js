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

module.exports = {
  formatResponse
}