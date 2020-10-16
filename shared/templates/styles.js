const cssStylesFile = `@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

body {
	margin: 0;
	font-family: 'Roboto', sans-serif;
	font-size: 1.4rem;
}

ul.navbar {
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

li.navbar-link {
	float: left;
}

li.navbar-link a {
	display: block;
	color: #fff;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

li.navbar-link a:hover:not(.active) {
	background-color: #111;
}

ul.pagination {
	display: flex;
	justify-content: center;
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

li.page-item {
	float: left;
}

li.page-item a {
	display: block;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
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
	max-width: 750px;
	margin: auto;
}

.content-post pre {
	overflow: scroll;
}`

const sassStyelsFile = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap')

body
	margin: 0
	font-family: 'Roboto', sans-serif
	font-size: 1.4rem

ul.navbar	
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


li.navbar-link
  float: left


li.navbar-link
	a 
		display: block
		color: #fff
		text-align: center
		padding: 14px 16px
		text-decoration: none

	a:hover:not(.active) 
	  background-color: #111

ul.pagination
	display: flex
	justify-content: center
	list-style-type: none
	margin: 0
	padding: 0
	overflow: hidden


li.page-item
  float: left

li.page-item
	a 
		display: block
		text-align: center
		padding: 14px 16px
		text-decoration: none

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
	max-width: 750px
	margin: auto


.content-post 
	pre 
		overflow: scroll
`

const CreateStylesFile = ({ stylesFormat }) =>
  stylesFormat === 'sass' ? sassStyelsFile : cssStylesFile

module.exports = CreateStylesFile
