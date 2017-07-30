import {IField, IModel} from "../../../models/interfaces/index";

const convert = (field: IField) =>
    `            ${field.field.name}=args.get('${field.input.name}')`;

const parseInputArgs = (body: IField[]) =>
    body
        .map(convert)
        .join("\n");

export const parseModelMutation = (model: IModel) => {
    const instance = model.name.toLowerCase();

    return `        ${instance} = ${model.name}(
${parseInputArgs(model.body)}
        )
        ${instance}.save()
        return Create${model.name}(${instance}=${instance})`;
};
