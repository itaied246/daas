import {generateMutation} from "../../../src/api/mutation/generateMutation";
import {spec, tire} from "../../utils/models";

describe("generate mutation class", () => {

    test("creation", () => {
        const expected =
            `# -*- coding: utf-8 -*-

import graphene
import data.api.mutation.create


class Mutation(graphene.AbstractType):
    new_tire = data.api.mutation.create.CreateTire.Field()
    new_spec = data.api.mutation.create.CreateSpec.Field()`;

        const actual = generateMutation([tire, spec]);

        expect(actual).toEqual(expected);
    });

});
