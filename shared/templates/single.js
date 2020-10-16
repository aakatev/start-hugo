const createSingleFile = () => `{{ define "main" }}
<div class="layout">
  <div class="content-post">
    <h1>{{ .Title }}</h1>
    <p>{{ .Content }}</p>
  </div>
</div>
{{ end }}`

module.exports = createSingleFile