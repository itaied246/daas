import { generateModel } from '../src/models/generateModel';
import { Model } from '../src/models/model';

test("single field", () => {

    const expected =
        `
class Tire(models.Model):
    width = models.IntegerField()

    def __str__(self):
        return self.width
`

    const actual: Model = {
        name: "Tire",
        fields: [
            {
                name: "width",
                type: "integer"
            }
        ]
    }

    const tireModel = generateModel(actual);
    expect(expected).toBe(tireModel);
})

test("multiple fields", () => {
    const expected =
        `
class Tire(models.Model):
    width = models.IntegerField()
    color = models.TextField()

    def __str__(self):
        return self.width
`

    const actual: Model = {
        name: "Tire",
        fields: [
            {
                name: "width",
                type: "integer"
            },
            {
                name: "color",
                type: "string"
            }
        ]
    }

    const actualModel = generateModel(actual);
    expect(expected).toBe(actualModel);
})