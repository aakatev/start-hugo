const Archiver = require('archiver')

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

const configFile = `baseURL = "/"
languageCode = "en-us"
title = "Hugo Starter Website"
publishDir = "docs"
paginate = 3`

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

const singleFile = `{{ define "main" }}
  <div class="layout">
    <div class="content">{{ .Content }}</div>
  </div>
{{ end }}`

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

const stylesFile = `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`

const scriptFile = `console.log("Hugo is awesome!!! 🚀")`

const createPostFile = (title, body) => `---
title: '${title}'
draft: false
---
${body}`

const archetypeFile = `---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---`

exports.handler = async (event) => {
  return (promise = new Promise((resolve, reject) => {
    let zip = Archiver('zip')
    zip
      .append(
        configFile,
        { name: 'config.toml' }
      )
      .append(
        baseOfFile,
        { name: 'layouts/_default/baseof.html' }
      )
      .append(
        singleFile, 
        { name: 'layouts/_default/single.html'}
      )
      .append(
        listFile, 
        { name: 'layouts/_default/list.html'}
      )
      .append(
        stylesFile, 
        { name: 'assets/styles/main.css'}
      )
      .append(
        scriptFile, 
        { name: 'assets/js/index.js'}
      )
      .append(
        archetypeFile, 
        { name: 'archetypes/default.md'}
      )
      .append(
        createPostFile('My First Post', '## Welcome to my first post'), 
        { name: 'content/posts/my-first-post.md'}
      )
      .append(
        createPostFile('My Other Post', '## Welcome to my other post'), 
        { name: 'content/posts/my-other-post.md'}
      )
      .append(
        '', 
        { name: 'data/.gitkeep'}
      )
      .append(
        '', 
        { name: 'themes/.gitkeep'}
      )
      .append(
        '', 
        { name: 'static/.gitkeep'}
      )
      .finalize()

    let buffer = []

    zip.on('data', (data) => buffer.push(data))

    zip.on('end', () => {
      let data = Buffer.concat(buffer)
      resolve(formatResponse(data))
    })
  }))
}
