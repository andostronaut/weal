#!/usr/bin/env node
'use strict'
import React from 'react'
import { load } from 'import-jsx'
import { render } from 'ink'
import meow from 'meow'
import { UI } from './ui.js'

const ui = load(UI)

const cli = meow(`
	Usage
	  $ terb

	Options
		--name  Your name

	Examples
	  $ terb --name=Jane
	  Hello, Jane
`)

render(React.createElement(ui, cli.flags))
