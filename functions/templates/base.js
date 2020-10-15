const createBaseOfFile = ({ stylesFormat, googleAnalytics }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${
      googleAnalytics
        ? '{{ template "_internal/google_analytics.html" . }}'
        : ''
    }
    <!-- CSS pipe -->
    {{ $style := resources.Get "styles/main.${stylesFormat}"${
  stylesFormat !== 'css' ? '| resources.ToCSS' : ''
} | resources.Minify | resources.Fingerprint }}
    <link rel="stylesheet" href="{{ $style.Permalink }}">
    <title>{{ .Site.Title }}</title>
  </head>
  <body>
    {{ block "main" . }}
    {{ end }}
  </body>
</html>`

module.exports = createBaseOfFile
