import commander from "commander";
import build from "./bin/build";
import dev from "./bin/dev";

const pkg = require("../package.json");

commander.version(pkg.version, "-v, --version");

commander.command("dev").description("build doc and watch reload").action(dev);

commander
  .command("build")
  .description("build file to dist and copy to publish branch")
  .action(build);

commander.parse(process.argv);
