import {generateCreate} from "../../../../src/api/mutation/create/generateCreate";
import {spec} from "../../../utils/models";

describe.skip("generate create mutation", () => {

    test("TBD", () => {

        const expected =
            `class CreateSpec(relay.ClientIDMutation):
    spec = Field(SpecType)

    class Input:
        manufacturer = String()

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):
        spec = Spec(
            manufacturer=args.get('manufacturer'),
        )
        spec.save()
        return CreateSpec(spec=spec)`;

        const actual = generateCreate(spec);

        expect(actual).toBe(expected);

    });

});
