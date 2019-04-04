import sync from "./sync"
import create from "./create"

const commands = {
  sync,
  create,
}

const argv = require("yargs").command("run [cmd]").argv

commands[argv.cmd](argv).then(() => process.exit(0))
