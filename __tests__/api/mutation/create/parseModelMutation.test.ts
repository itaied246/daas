import {IModel} from "../../../../src/models/interfaces/index";
import {parseModelMutation} from "../../../../src/api/mutation/create/parseModelMutation";

describe("parseModelMutation", () => {

    test("parse model with single input", () => {

        const expected =
            `        spec = data.models.Spec(
            volume=args.get('volume')
        )
        spec.save()
        return CreateSpec(spec=spec)`;

        const actual: IModel = {
            name: "Spec",
            body: [
                {
                    field: {
                        name: "volume",
                        type: "_",
                    },
                    input: {
                        name: "volume",
                        type: "_",
                    },
                },
            ],
        };

        expect(parseModelMutation(actual)).toEqual(expected);

    });

    test("parse model with different input and field names", () => {

        const expected =
            `        spec = data.models.Spec(
            volume=args.get('VOLUME')
        )
        spec.save()
        return CreateSpec(spec=spec)`;

        const actual: IModel = {
            name: "Spec",
            body: [
                {
                    field: {
                        name: "volume",
                        type: "_",
                    },
                    input: {
                        name: "VOLUME",
                        type: "_",
                    },
                },
            ],
        };

        expect(parseModelMutation(actual)).toEqual(expected);

    });

    test("parse model with multiple inputs", () => {

        const expected =
            `        spec = data.models.Spec(
            volume=args.get('volume'),
            seats=args.get('seats')
        )
        spec.save()
        return CreateSpec(spec=spec)`;

        const actual: IModel = {
            name: "Spec",
            body: [
                {
                    field: {
                        name: "volume",
                        type: "_",
                    },
                    input: {
                        name: "volume",
                        type: "_",
                    },

                },
                {
                    field: {
                        name: "seats",
                        type: "_",
                    },
                    input: {
                        name: "seats",
                        type: "_",
                    },

                },
            ],
        };

        expect(parseModelMutation(actual)).toEqual(expected);

    });

});
