import { IModel } from "../../models/interfaces";
import { parseType } from "./parseType";
import { imports } from './imports';

export const generateTypes = (models: [IModel]) =>
    `${imports}

${parseType(models[0])}`;
