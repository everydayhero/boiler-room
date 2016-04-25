import fs from 'fs'
import path from 'path'

import es6Promise from 'es6-promise'
import 'isomorphic-fetch'

if (typeof Promise === 'undefined') {
  es6Promise.polyfill()
}

export const server = (resourcePath) => {
  const sourceDir = process.env.NODE_ENV === 'production'
    ? 'dist'
    : '.dev'

  const filePath = path.join(
    process.cwd(),
    sourceDir,
    resourcePath
  )

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) return reject(err)

      resolve(JSON.parse(content))
    })
  })
}

export const client = (resourcePath) => {
  const path = `${process.env.BASE_PATH || '/'}${resourcePath}`

  return global.fetch(path)
    .then((response) => {
      return response.json()
    })
}

export default (path) => (
  (typeof window !== 'undefined')
    ? client(path)
    : server(path)
)
