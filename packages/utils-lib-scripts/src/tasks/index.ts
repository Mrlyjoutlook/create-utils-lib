import { task } from "gulp";
import build from "./build";
import dev from "./dev";
import clean from "./clean";

task(build);
task(dev);
task(clean);
