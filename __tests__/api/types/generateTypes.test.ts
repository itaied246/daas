import { IModel } from "../../../src/models/interfaces";
import { generateTypes } from "../../../src/api/types";

describe("generate types", () => {

    const tire: IModel = {
        name: "Tire",
        fields: [
            {
                name: "width",
                type: "IntegerField()"
            }
        ]
    }

    const spec: IModel = {
        name: "Spec",
        fields: [
            {
                name: "manufacturer",
                type: "TextField()"
            }
        ]
    }

    test("single type", () => {

        const actual = generateTypes([tire]);

        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django import DjangoObjectType
import data.models

class TireType(DjangoObjectType):
    class Meta:
        model = Tire
        interfaces = (relay.Node,)`;

        expect(actual).toBe(expected);
    })

})