import {IModel} from "../../models/interfaces/index";

const modelType = (model: IModel) => `${model.name}Type`;
const pluralType = (model: IModel) => `all_${model.name.toLowerCase()}s`;

export const parseQueryType = (model: IModel) =>
    `    ${model.name} = relay.Node.Field(${modelType(model)})
    ${pluralType(model)} = DjangoFilterConnectionField(${modelType(model)})`;
