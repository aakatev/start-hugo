const createArchetypeFile = () => `---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---`

module.exports = createArchetypeFile