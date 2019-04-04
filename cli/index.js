import sync from "./sync"

const commands = {
  sync,
}

require("yargs").command(
  "run [command]",
  "",
  () => {},
  argv => {
    console.log(argv)
    commands[argv.command](argv).then(() => process.exit(0))
  }
)
