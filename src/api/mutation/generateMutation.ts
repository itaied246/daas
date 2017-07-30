import {imports} from "./imports";
import {IModel} from "../../models/interfaces/index";

const parseMutationModels = (models: IModel[]) =>
    models
        .map((model) => model.name)
        .map((name) => `    new_${name.toLowerCase()} = data.api.mutation.create.Create${name}.Field()`)
        .join("\n");

export const generateMutation = (models: IModel[]) =>
    `${imports}


class Mutation(graphene.AbstractType):
${parseMutationModels(models)}`;
