console.clear()

// read code from source.js file
const fs = require('fs')
const fileContent = fs.readFileSync('./source.js').toString()

// parse it into AST
const { parse } = require('@babel/parser')
const ast = parse(fileContent)

// Lint: find undefined vars
const traverse = require('@babel/traverse').default

traverse(ast, {
  /**
   * Implement here
   */
})
