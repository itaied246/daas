import {parseQueryType} from "../../../src/api/query/parseQueryType";
import {IModel} from "../../../src/models/interfaces/index";

describe("parse query type", () => {

    const tire: IModel = {
        name: "Tire",
        fields: [
            {
                name: "f",
                type: "IntegerField()",
            },
        ],
    };

    test("simple query type", () => {

        const actual = parseQueryType(tire);

        const expected =
            `    Tire = relay.Node.Field(TireType)
    all_tires = DjangoFilterConnectionField(TireType)`;

        expect(actual).toBe(expected);

    });

});
