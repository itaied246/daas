import { parseModel } from "../../src/models";
import { IModel } from "../../src/models/interfaces";
import {tire} from "../utils/models";

const assertModel =
    (actual: IModel, expected: string) => expect(parseModel(actual)).toBe(expected);

describe("parse django model", () => {

    test("single field", () => {

        const expected =
`class Tire(models.Model):
    f = models.IntegerField()`;

        assertModel(tire, expected);
    });

    test("multiple fields", () => {
        const actual: IModel = {
            fields: [
                {
                    name: "f1",
                    type: "IntegerField()",
                },
                {
                    name: "f2",
                    type: "TextField()",
                },
            ],
            name: "Tire",
        };

        const expected =
`class Tire(models.Model):
    f1 = models.IntegerField()
    f2 = models.TextField()`;

        assertModel(actual, expected);
    });

});
