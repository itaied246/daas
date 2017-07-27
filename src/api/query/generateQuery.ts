import {IModel} from "../../models/interfaces/index";
import {imports} from "./imports";
import {parseQuery} from "./parseQuery";

export const generateQuery = (models: IModel[]) =>
    `${imports}


${parseQuery(models)}
`;
