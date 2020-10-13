const listFile = `{{ define "main" }}
  <div class="layout">
    {{ range .Paginator.Pages }}
      <div class="page">
        <h3>{{.Title}}</h3>
        <a href="{{.Permalink}}">learn more</a>
      </div>
    {{ end }}
    {{ template "_internal/pagination.html" . }}
  </div>
{{ end }}`

module.exports = listFile