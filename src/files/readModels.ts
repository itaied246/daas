import * as fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export const readModels =
    (path: string, filename: string) =>
        readFile(`${path}/${filename}`);
