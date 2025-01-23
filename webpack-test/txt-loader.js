const fs = require('fs')

module.exports = function () {
  const result = fs
    .readFileSync(this.resourcePath)
    .toString()
    .trim()
    .split('\n')
    .map(Number)
  return `export default ${JSON.stringify(result)}`
}
