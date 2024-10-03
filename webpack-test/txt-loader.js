const fs = require('fs')

module.exports = function () {
  const content = fs.readFileSync(this.resourcePath).toString()

  return `export default ${content}`
}
