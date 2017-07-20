import { parseType } from "../../../src/api/types";
import { IModel } from "../../../src/models/interfaces";

describe("parse django-graphene type", () => {

    test("single field", () => {

        const actual: IModel = {
            name: "Tire",
            fields: [
                {
                    name: "f",
                    type: "IntegerField()",
                },
            ],
        };

        const expected =
            `class TireType(DjangoObjectType):
    class Meta:
        model = data.models.Tire
        interfaces = (relay.Node,)`;

        expect(parseType(actual)).toBe(expected);

    });

});
