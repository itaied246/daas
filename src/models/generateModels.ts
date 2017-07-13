import { IModel } from "./interfaces";
import { Model, Imports } from '.';

const parseModels = (models: [IModel]) => 
    models.map(Model).join('\n');

const generateModels = (models: [IModel]) => 
`${Imports}
${parseModels(models)}`

export default generateModels;