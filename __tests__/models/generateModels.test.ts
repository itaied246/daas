import { IModel } from "../../src/models/interfaces";
import { generateModels } from '../../src/models'

describe("generate models", () => {

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

    test("single model", () => {
        const actual = generateModels([tire]);

        const expected =
`# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Tire(models.Model):
    width = models.IntegerField()`

        expect(actual).toBe(expected);
    })

    test("multiple models", () => {
        const actual = generateModels([tire, spec]);

        const expected =
`# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Tire(models.Model):
    width = models.IntegerField()

class Spec(models.Model):
    manufacturer = models.TextField()`

        expect(actual).toBe(expected);
    })

})
