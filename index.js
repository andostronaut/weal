#!/usr/bin/env node

const init = require('./lib/init')
const cli = require('./lib/cli')
const log = require('./lib/log')

const input = cli.input
const flags = cli.flags
const { clear, debug } = flags

const boot = async () => {
  init({ clear })
  input.includes('help') && cli.showHelp(0)

  debug && log(flags)
}

boot()
