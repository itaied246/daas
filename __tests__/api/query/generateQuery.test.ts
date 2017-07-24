import {generateQuery} from "../../../src/api/query/generateQuery";
import {spec, tire} from "../../utils/models";

describe("generate django-graphene query", () => {

    test("single type", () => {
        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django.filter import DjangoFilterConnectionField

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

class Query(AbstractType):
    Tire = relay.Node.Field(TireType)
    all_tires = DjangoFilterConnectionField(TireType)

    Spec = relay.Node.Field(SpecType)
    all_specs = DjangoFilterConnectionField(SpecType)`;

        const actual = generateQuery([tire, spec]);

        expect(actual).toBe(expected);
    });

});
