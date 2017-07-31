import { IModel } from "../../models/interfaces";
import { imports } from "./imports";
import { parseType } from "./parseType";

const parseTypes = (models: IModel[]) =>
    models.map(parseType).join("\n\n\n");

export const generateTypes = (models: IModel[]) =>
    `${imports}


${parseTypes(models)}
`;
