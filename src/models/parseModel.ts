import { IField, IModel } from "./interfaces";
import { parseFields } from "./utils";

export const parseModel = (model: IModel) =>
`class ${model.name}(models.Model):
${parseFields(model.body)}`;
