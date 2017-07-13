import { IModel } from "../../src/models/interfaces";
import { generateModels } from '../../src/models'

describe("generate models", () => {

    test("single model", () => {
        const model: IModel = {
            name: "Tire",
            fields: [
                {
                    name: "width",
                    type: "IntegerField()"
                }
            ]
        }

        const actual = generateModels([model]);

        const expected =
`# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Tire(models.Model):
    width = models.IntegerField()`

        expect(actual).toBe(expected);
    })

})

