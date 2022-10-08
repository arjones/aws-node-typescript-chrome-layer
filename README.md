<!--
title: 'AWS Node Typescript Chrome Example'
description: 'This example uses Node + Typescript + Chromium (Layer) on AWS Lambda for Web Scrapting'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/arjones'
authorName: 'Gustavo Arjones'
authorAvatar: 'https://avatars.githubusercontent.com/u/194210?v=4'
-->

# AWS Node Typescript Chrome Example
This example uses Node + Typescript + Chromium (Layer) on AWS Lambda for Web Scrapting. It includes offline setup so you can run locally.

## Install

```sh
npm install

# Install first time, to create deployment
serverless 

serverless deploy --verbose

# Invoke Remote
serverless invoke -f hello
```

## Local Development

```sh
serverless invoke local -f hello
```