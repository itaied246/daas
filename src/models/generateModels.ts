import { IModel } from "./interfaces";
import { parseModel, imports } from '.';

const parseModels = (models: [IModel]) => 
    models.map(parseModel).join('\n\n');

const generateModels = (models: [IModel]) => 
`${imports}

${parseModels(models)}`

export default generateModels;