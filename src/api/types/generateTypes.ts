import { IModel } from "../../models/interfaces";
import { parseType } from "./parseType";
import { imports } from './imports';

const parseTypes = (models: [IModel]) =>
    models.map(parseType).join('\n\n');

export const generateTypes = (models: [IModel]) =>
    `${imports}

${parseTypes(models)}`;
