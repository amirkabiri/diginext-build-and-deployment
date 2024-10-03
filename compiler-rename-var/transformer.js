console.clear()

// read code from source.js file
const fs = require('fs')
const content = fs.readFileSync('./source.js').toString()

// parse it into AST
const { parse } = require('@babel/parser')
const ast = parse(content, {})

// rename variable by modifying AST
const traverse = require('@babel/traverse').default
traverse(ast, {
  VariableDeclarator: ({ node, remove }) => {
    if (node.id.name === 'name') {
      node.id.name = 'firstName'
    }
  },
  Identifier({ node }) {
    if (node.name === 'name') {
      node.name = 'firstName'
    }
  },
})

// convert AST back to code
const generate = require('@babel/generator').default

const result = generate(ast)
console.log(result.code)
