console.clear()

// read code from source.js file
const fs = require('fs')
const fileContent = fs.readFileSync('./source.js').toString()

// parse it into AST
const { parse } = require('@babel/parser')
const ast = parse(fileContent)

// Lint: find undefined vars
const traverse = require('@babel/traverse').default
const vars = new Set(['console'])
traverse(ast, {
  VariableDeclarator({ node }) {
    vars.add(node.id.name)
  },
  Identifier({ node, parent }) {
    if (parent.type === 'MemberExpression') {
      return
    }
    if (!vars.has(node.name)) {
      console.log('We did not find this var, ', node.name)
    }
  },
  /**
   * Implement here
   */
})
