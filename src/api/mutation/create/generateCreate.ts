import {IModel} from "../../../models/interfaces/index";
import {parseInputs} from "./parseInputs";
import {parseModelMutation} from "./parseModelMutation";
import {imports} from "./imports";

export const generateCreate = (model: IModel) =>
    `${imports}


class Create${model.name}(graphene.relay.ClientIDMutation):
    ${model.name.toLowerCase()} = graphene.Field(data.api.types.${model.name}Type)

    class Input:
${parseInputs(model.body)}

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):
${parseModelMutation(model)}
`;
