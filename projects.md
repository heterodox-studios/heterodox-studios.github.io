---
title: "Projects"
permalink: /projects
layout: page
---

{% assign top_level = site.projects | where_exp: 'item', "item.path contains '/index.md'" %}
{% for project in top_level %}

## [{{ project.title }}]({{ project.url }}) 

{% endfor %}
