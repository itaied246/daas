import * as fs from "fs";
import {promisify} from "util";

const readFile = promisify(fs.readFile);

export const readModels =
    async (path: string, filename: string) =>
        JSON.parse(await readFile(`${path}/${filename}`));
