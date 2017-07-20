import { generateTypes } from "../../../src/api/types";
import { IModel } from "../../../src/models/interfaces";

describe("generate types", () => {

    const tire: IModel = {
        name: "Tire",
        fields: [
            {
                name: "width",
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

    test("single type", () => {

        const actual = generateTypes([tire]);

        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django import DjangoObjectType
import data.models

class TireType(DjangoObjectType):
    class Meta:
        model = data.models.Tire
        interfaces = (relay.Node,)`;

        expect(actual).toBe(expected);
    });

    test("multiple types", () => {

        const actual = generateTypes([tire, spec]);

        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django import DjangoObjectType
import data.models

class TireType(DjangoObjectType):
    class Meta:
        model = data.models.Tire
        interfaces = (relay.Node,)

class SpecType(DjangoObjectType):
    class Meta:
        model = data.models.Spec
        interfaces = (relay.Node,)`;

        expect(actual).toBe(expected);
    });

});
