import {IModel} from "../../../models/interfaces/index";

export const generateCreate = (model: IModel) =>
    `class Create${model.name}(graphene.relay.ClientIDMutation):
    ${model.name} = graphene.Field(data.api.types.${model.name}Type)

    class Input:
        `;

// `class CreateSpec(relay.ClientIDMutation):
//     spec = Field(SpecType)
//
//     class Input:
//         volume = Int()
//         manufacturer = String()
//         tireId = Int()
//
//     @classmethod
//     def mutate_and_get_payload(cls, args, c, i):
//         spec = Spec(
//             volume=args.get('volume'),
//             manufacturer=args.get('manufacturer'),
//             tire_id=args.get('tireId')
//         )
//         spec.save()
//         return CreateSpec(spec=spec)`;
