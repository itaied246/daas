import * as fs from "fs";
import { promisify } from "util";
import {config} from "../utils/config";

const writeFile = promisify(fs.writeFile);

const rootPath = config.root;

export const generateFile =
    (path: string, filename: string, content: string) =>
        writeFile(`${rootPath}/${path}/${filename}`, content);
