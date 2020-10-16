const createContentFile = (title, body) => `---
title: '${title}'
draft: false
---
${body}`

module.exports = createContentFile