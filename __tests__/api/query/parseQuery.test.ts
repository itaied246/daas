import {parseQuery} from "../../../src/api/query/parseQuery";
import {IModel} from "../../../src/models/interfaces/index";

describe("parse django-graphene query", () => {

    const tire: IModel = {
        name: "Tire",
        fields: [
            {
                name: "f",
                type: "IntegerField()",
            },
        ],
    };

    const spec: IModel = {
        name: "Spec",
        fields: [
            {
                name: "manufacturer",
                type: "TextField()",
            },
        ],
    };

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
