import {IModel} from "../../../models/interfaces/index";
import {parseInputs} from "./parseInputs";

export const generateCreate = (model: IModel) =>
    `class Create${model.name}(graphene.relay.ClientIDMutation):
    ${model.name.toLowerCase()} = graphene.Field(data.api.types.${model.name}Type)

    class Input:
${parseInputs(model.inputs)}

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):`;

//     @classmethod
//     def mutate_and_get_payload(cls, args, c, i):
//         spec = Spec(
//             volume=args.get('volume'),
//             manufacturer=args.get('manufacturer'),
//             tire_id=args.get('tireId')
//         )
//         spec.save()
//         return CreateSpec(spec=spec)`;
