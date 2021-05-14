import fs from "fs";
import path from "path";
import arg from "arg";
import chokidar from "chokidar";

import { render } from "../src/document";

const args = arg({
  "--watch": Boolean,
});

const build = () => {
  const filePath = path.resolve(__dirname, "../index.html");
  fs.writeFileSync(filePath, render());
  console.log(`${filePath} was generated`);
};

build();

if (args["--watch"]) {
  chokidar
    .watch(path.resolve(__dirname, "../src"), { ignoreInitial: true })
    .on("all", build);
}
