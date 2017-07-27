import {IField} from "../../../../src/models/interfaces/index";
import {parseInputs} from "../../../../src/api/mutation/create/parseInputs";

describe("parseInputs", () => {

    test("single input", () => {

        const expected =
            `        volume = graphene.Int()`;

        const actual: IField = {
            name: "volume",
            type: "Int()",
        };

        expect(parseInputs([actual])).toEqual(expected);

    });

    test("multiple inputs", () => {

        const expected =
            `        volume = graphene.Int()
        seats = graphene.Int(required=True)`;

        const actual: IField[] = [
            {
                name: "volume",
                type: "Int()",
            },
            {
                name: "seats",
                type: "Int(required=True)",
            },
        ];

        expect(parseInputs(actual)).toEqual(expected);

    });

});
