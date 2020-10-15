const createPostFile = (title, body) => `---
title: '${title}'
draft: false
---
${body}`

module.exports = createPostFile