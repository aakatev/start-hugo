const createListFile = ({ paginate }) => `{{ define "main" }}
  <div class="layout">
    {{ range .Paginator.Pages }}
      <div class="page">
        <h1>{{.Title}}</h1>
        <a href="{{.Permalink}}">continue reading</a>
      </div>
    {{ end }}
    ${paginate ? '{{ template "_internal/pagination.html" . }}' : ''}
  </div>
{{ end }}`

module.exports = createListFile
