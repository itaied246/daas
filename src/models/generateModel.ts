import { IModel } from "./interfaces";
import { Model, Imports } from '.';

const generateModel = (model: IModel) => 
`${Imports}
${Model(model)}`

export default generateModel;