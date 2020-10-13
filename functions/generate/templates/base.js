const baseOfFile = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSS pipe -->
    {{ $style := resources.Get "styles/main.css" | resources.Minify | resources.Fingerprint }}
    <link rel="stylesheet" href="{{ $style.Permalink }}">
    <!-- JavaScript pipe -->
    {{ $built := resources.Get "js/index.js" | js.Build "bundle.js" }}
    <script type="text/javascript" src="{{ $built.RelPermalink }}" defer></script>
    <title>{{ .Site.Title }}</title>
  </head>
  <body>
    {{ block "main" . }}
    {{ end }}
  </body>
</html>`

module.exports = baseOfFile