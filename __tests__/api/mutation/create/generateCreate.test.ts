import {generateCreate} from "../../../../src/api/mutation/create/generateCreate";
import {car, spec} from "../../../utils/models";

describe("generate create mutation", () => {

    test("single input", () => {

        const expected =
            `# -*- coding: utf-8 -*-

import graphene
import data.api.types
import data.models


class CreateCar(graphene.relay.ClientIDMutation):
    car = graphene.Field(data.api.types.CarType)

    class Input:
        seats = graphene.Int(required=True)

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):
        car = data.models.Car(
            seats=args.get('seats')
        )
        car.save()
        return CreateCar(car=car)
`;

        const actual = generateCreate([car]);

        expect(actual).toEqual(expected);

    });

    test("multiple inputs", () => {

        const expected =
            `# -*- coding: utf-8 -*-

import graphene
import data.api.types
import data.models


class CreateCar(graphene.relay.ClientIDMutation):
    car = graphene.Field(data.api.types.CarType)

    class Input:
        seats = graphene.Int(required=True)

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):
        car = data.models.Car(
            seats=args.get('seats')
        )
        car.save()
        return CreateCar(car=car)


class CreateSpec(graphene.relay.ClientIDMutation):
    spec = graphene.Field(data.api.types.SpecType)

    class Input:
        manufacturer = graphene.String(required=True)

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):
        spec = data.models.Spec(
            manufacturer=args.get('manufacturer')
        )
        spec.save()
        return CreateSpec(spec=spec)
`;

        const actual = generateCreate([car, spec]);

        expect(actual).toEqual(expected);

    });

});
