import { Model, Field } from "./model";

const fieldsMap = {
    integer: "IntegerField()"
}

export const convertToDjangoFields = (fields: [Field]) => {
    // fields.map(field => ``)
    "";
}

export const generateModel = (model: Model) => {
    return `
class ${model.name}(models.Model):
    ${model.fields[0].name} = models.${fieldsMap[model.fields[0].type]}

    def __str__(self):
        return self.${model.fields[0].name}
`;
}