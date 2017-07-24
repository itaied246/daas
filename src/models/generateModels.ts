import {imports, parseModel} from ".";
import {IModel} from "./interfaces";

const parseModels = (models: [IModel]) =>
    models.map(parseModel).join("\n\n\n");

const generateModels = (models: [IModel]) =>
    `${imports}


${parseModels(models)}
`;

export default generateModels;
