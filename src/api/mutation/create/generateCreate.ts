import {IModel} from "../../../models/interfaces/index";
import {parseInputs} from "./parseInputs";
import {parseModelMutation} from "./parseModelMutation";
import {imports} from "./imports";

const generateClass = (model: IModel) =>
    `class Create${model.name}(graphene.relay.ClientIDMutation):
    ${model.name.toLowerCase()} = graphene.Field(data.api.types.${model.name}Type)

    class Input:
${parseInputs(model.body)}

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):
${parseModelMutation(model)}`;

export const generateCreate = (models: IModel[]) => {
    const classes = models
        .map(generateClass)
        .join("\n\n\n");

    return `${imports}


${classes}
`;
};
