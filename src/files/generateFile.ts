import * as fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

export const generateFile =
    (path: string, filename: string, content: string) =>
        writeFile(`${path}/${filename}`, content);