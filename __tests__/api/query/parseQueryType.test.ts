import {parseQueryType} from "../../../src/api/query/parseQueryType";
import {tire} from "../../utils/models";

describe("parse query type", () => {

    test("simple query type", () => {

        const actual = parseQueryType(tire);

        const expected =
            `    Tire = relay.Node.Field(data.api.types.TireType)
    all_tires = DjangoFilterConnectionField(data.api.types.TireType)`;

        expect(actual).toBe(expected);

    });

});
