import { IModel } from "./interfaces";
import { parseModel, Imports } from '.';

const parseModels = (models: [IModel]) => 
    models.map(parseModel).join('\n\n');

const generateModels = (models: [IModel]) => 
`${Imports}
${parseModels(models)}`

export default generateModels;