import { IModel, IField } from "./interfaces";
import { parseFields } from './utils';

export const parseModel = (model: IModel) =>
`class ${model.name}(models.Model):
${parseFields(model.fields)}`