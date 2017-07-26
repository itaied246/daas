import {IModel} from "../../models/interfaces";

const parseDescription = (model: IModel) =>
    model.description ? `\n        description = "${model.description}"` : "";

export const parseType = (model: IModel) =>
    `class ${model.name}Type(DjangoObjectType):
    class Meta:
        model = data.models.${model.name}
        interfaces = (relay.Node,)${parseDescription(model)}`;
