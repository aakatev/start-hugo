const archetypeFile = `---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---`

module.exports = archetypeFile