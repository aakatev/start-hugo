const cssStylesFile = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body {
	margin: 0;
	font-family: 'Roboto', sans-serif;
	font-size: 1.4rem;
}

ul {
  list-style-type: none;
  margin: 0;
	padding: 0;
	padding-top: 5px;
	padding-bottom: 5px;
  overflow: hidden;
  background-color: #0a1922;
  position: fixed;
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.layout {
	padding-top: 40px;
	margin: 50px;
	text-align: center;
}

.lead {
	font-weight: 800;
	font-size: 1.2em;
}

.content-index {
	max-width: 650px;
	margin: auto;
}

.content-post {
	max-width:500px;
	margin: auto;
}

.content-post pre {
	overflow: scroll;
}`

const sassStyelsFile = `
body
	margin: 0
	font-family: 'Roboto', sans-serif
	font-size: 1.4rem

ul	
	list-style-type: none
	margin: 0
	padding: 0
	padding-top: 5px
	padding-bottom: 5px
	overflow: hidden
	background-color: #0a1922
	position: fixed
	top: 0
	width: 100%


li 
  float: left


li 
	a 
		display: block
		color: #fff
		text-align: center
		padding: 14px 16px
		text-decoration: none

	a:hover:not(.active) 
	  background-color: #111


.layout 
	padding-top: 40px
	margin: 50px
	text-align: center


.lead 
	font-weight: 800
	font-size: 1.2em


.content-index 
	max-width: 650px
	margin: auto


.content-post 
	max-width:500px
	margin: auto


.content-post 
	pre 
		overflow: scroll
`

const CreateStylesFile = ({ stylesFormat }) =>
  stylesFormat === 'sass' ? sassStyelsFile : cssStylesFile

module.exports = CreateStylesFile
