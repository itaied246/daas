import { generateTypes } from "../../../src/api/types";
import {spec, tire} from "../../utils/models";

describe("generate types", () => {

    test("single type", () => {

        const actual = generateTypes([tire]);

        const expected =
            `# -*- coding: utf-8 -*-

from graphene import relay
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

from graphene import relay
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
