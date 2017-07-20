import { parseType } from "../../../src/api/types";
import {tire} from "../../utils/models";

describe("parse django-graphene type", () => {

    test("single field", () => {

        const actual = parseType(tire);

        const expected =
            `class TireType(DjangoObjectType):
    class Meta:
        model = data.models.Tire
        interfaces = (relay.Node,)`;

        expect(actual).toBe(expected);

    });

});
