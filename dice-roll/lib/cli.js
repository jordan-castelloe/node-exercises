
// The cli.js file should work like a controller.It should have no logic on its own.Use this sample code to get you started

'use strict'

process.title = 'Dice Roll'

const { argv: [, , ...args] } = process
const { count, sides } = require('./parse-args')(args)
const { roll, toDiceNotation } = require('./dice')

const dice = toDiceNotation({ count, sides })
const total = roll(dice)

console.log(total)