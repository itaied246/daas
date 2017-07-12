import Model from '../../../src/models/templates/Model';
import { IModel } from "../../../src/models/model";

test("field template parser", () => {
    const actual: IModel = {
        name: "a",
        fields: [
            {
                name: "f",
                type: "IntegerField()"
            }
        ]
    }

    const expected =
        `class Spec(models.Model):
    `

    expect(Model(actual)).toBe(expected);
})