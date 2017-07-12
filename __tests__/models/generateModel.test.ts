import { IModel } from "../../src/models/interfaces";
import { generateModel } from '../../src/models'

test("generate model", () => {
    const model: IModel = {
        name: "Tire",
        fields: [
            {
                name: "width",
                type: "IntegerField()"
            }
        ]
    }

    const actual = generateModel(model);

    const expected = 
`# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Tire(models.Model):
    width = models.IntegerField()`

    expect(actual).toBe(expected);
})