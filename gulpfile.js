const env = require('node-env-file')
const path = require('path')

if (process.env.ENV_FILE) {
  env(path.join(process.cwd(), process.env.ENV_FILE))
}

require('./build/tasks')
