const createNavbarFile = () => `<ul class="navbar">
<li class="navbar-link"><a href="{{ .Site.BaseURL }}">{{ .Site.Title }}</a></li>
<li class="navbar-link"><a href="{{ .Site.BaseURL }}posts">Posts</a></li>
</ul>`


module.exports = createNavbarFile