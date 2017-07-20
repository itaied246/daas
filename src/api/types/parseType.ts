import {IModel} from "../../models/interfaces";

export const parseType = (model: IModel) =>
    `class ${model.name}Type(DjangoObjectType):
    class Meta:
        model = ${model.name}
        interfaces = (relay.Node,)`;
