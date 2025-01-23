console.clear()

// read code from source.js file
const fs = require('fs')
const content = fs.readFileSync('./source.js').toString()

// parse it into AST
const { parse } = require('@babel/parser')
const ast = parse(content)

// rename variable by modifying AST
const { default: traverse } = require('@babel/traverse')
traverse(ast, {
  Identifier({ node }) {
    if (node.name.length < 3) {
    }
    if (node.name === 'age') {
      node.name = 'userAge'
    }
  },
})

// convert AST back to code
const { default: generate } = require('@babel/generator')
console.log(generate(ast).code)
