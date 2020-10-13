const singleFile = `{{ define "main" }}
  <div class="layout">
    <div class="content">{{ .Content }}</div>
  </div>
{{ end }}`

module.exports = singleFile