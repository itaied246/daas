import { IModel, IField } from "./model";

const fieldsMap = {
    integer: "IntegerField()",
    string: "TextField()"
}

export const parseFields = (fields: [IField]) =>
    fields.map(field =>
        `    ${field.name} = models.${fieldsMap[field.type]}`)
        .join('\n');

export const generateModel = (model: IModel) => {
    return `
class ${model.name}(models.Model):
${parseFields(model.fields)}

    def __str__(self):
        return self.${model.fields[0].name}
`;
}