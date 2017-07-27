import {IModel} from "../../../../src/models/interfaces/index";
import {parseModelMutation} from "../../../../src/api/mutation/create/parseModelMutation";

describe("parseModelMutation", () => {

    test("parse model with single input", () => {

        const expected =
            `        spec = Spec(
            volume=args.get('volume')
        )
        spec.save()
        return CreateSpec(spec=spec)`;

        const actual: IModel = {
            name: "Spec",
            fields: [
                {

                }
            ],
            inputs: [
                {
                    name: "volume",
                    type: "_",
                },
            ],
        };

        expect(parseModelMutation(actual)).toEqual(expected);

    });

});
