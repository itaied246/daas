import {parseQuery} from "../../../src/api/query/parseQuery";
import {spec, tire} from "../../utils/models";

describe("parse django-graphene query", () => {

    test("parse single query type", () => {
        const expected =
            `class Query(AbstractType):
    Tire = relay.Node.Field(TireType)
    all_tires = DjangoFilterConnectionField(TireType)`;

        const actual = parseQuery([tire]);

        expect(actual).toBe(expected);
    });

    test("parse multiple query types", () => {
        const expected =
            `class Query(AbstractType):
    Tire = relay.Node.Field(TireType)
    all_tires = DjangoFilterConnectionField(TireType)

    Spec = relay.Node.Field(SpecType)
    all_specs = DjangoFilterConnectionField(SpecType)`;

        const actual = parseQuery([tire, spec]);

        expect(actual).toBe(expected);
    });

});
