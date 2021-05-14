import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import path from "path";

import { render } from "../src/document";

fs.writeFileSync(path.resolve(__dirname, "../index.html"), render());
