import Model from '../../src/models/Model';
import { IModel } from "../../src/models/interfaces";

const assertModel =
    (actual: IModel, expected: string) => expect(Model(actual)).toBe(expected)

describe("parse django model", () => {

    test("single field", () => {
        const actual: IModel = {
            name: "Tire",
            fields: [
                {
                    name: "f",
                    type: "IntegerField()"
                }
            ]
        }

        const expected =
`class Tire(models.Model):
    f = models.IntegerField()`

        assertModel(actual, expected);
    })

    test("multiple fields", () => {
        const actual: IModel = {
            name: "Tire",
            fields: [
                {
                    name: "f1",
                    type: "IntegerField()"
                },
                {
                    name: "f2",
                    type: "TextField()"
                }
            ]
        }

        const expected =
`class Tire(models.Model):
    f1 = models.IntegerField()
    f2 = models.TextField()`

        assertModel(actual, expected);
    })

})



