import {parseType} from "../../../src/api/types";
import {tire, car} from "../../utils/models";

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

    test("description generation", () => {

        const actual = parseType(car);

        const expected =
            `class CarType(DjangoObjectType):
    class Meta:
        model = data.models.Car
        interfaces = (relay.Node,)
        description = "Car model description."`;

        expect(actual).toBe(expected);

    });

});
