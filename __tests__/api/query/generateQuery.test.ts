import {generateQuery} from "../../../src/api/query/generateQuery";
import {IModel} from "../../../src/models/interfaces/index";

describe("generate django-graphene query", () => {

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
        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django.filter import DjangoFilterConnectionField
import data.types

class Query(AbstractType):
    Tire = relay.Node.Field(TireType)
    all_tires = DjangoFilterConnectionField(TireType)`;

        const actual = generateQuery([tire]);

        expect(actual).toBe(expected);
    });

    test("multiple types", () => {
        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django.filter import DjangoFilterConnectionField
import data.types

class Query(AbstractType):
    Tire = relay.Node.Field(TireType)
    all_tires = DjangoFilterConnectionField(TireType)

    Spec = relay.Node.Field(SpecType)
    all_specs = DjangoFilterConnectionField(SpecType)`;

        const actual = generateQuery([tire, spec]);

        expect(actual).toBe(expected);
    });

});
