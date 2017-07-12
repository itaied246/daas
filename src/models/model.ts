import { IModel, IField } from "./interfaces";
import { parseFields } from './utils';

const Model = (model: IModel) =>
`class ${model.name}(models.Model):
${parseFields(model.fields)}`

export default Model;
