import {generateQuery} from "../../../src/api/query/generateQuery";
import {spec, tire} from "../../utils/models";

describe("generate django-graphene query", () => {

    test("single type", () => {
        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django.filter import DjangoFilterConnectionField
import data.api.types


class Query(AbstractType):
    Tire = relay.Node.Field(data.api.types.TireType)
    all_tires = DjangoFilterConnectionField(data.api.types.TireType)
`;

        const actual = generateQuery([tire]);

        expect(actual).toBe(expected);
    });

    test("multiple types", () => {
        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay, AbstractType
from graphene_django.filter import DjangoFilterConnectionField
import data.api.types


class Query(AbstractType):
    Tire = relay.Node.Field(data.api.types.TireType)
    all_tires = DjangoFilterConnectionField(data.api.types.TireType)

    Spec = relay.Node.Field(data.api.types.SpecType)
    all_specs = DjangoFilterConnectionField(data.api.types.SpecType)
`;

        const actual = generateQuery([tire, spec]);

        expect(actual).toBe(expected);
    });

});
