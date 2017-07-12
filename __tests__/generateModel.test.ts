import { generateModel, parseFields } from '../src/models/generateModel';
import { IModel, IField } from '../src/models/model';

test("django fields conversion", () => {
    const fields: [IField] = [
        {
            name: "a",
            type: "integer"
        },
        {
            name: "b",
            type: "string"
        }
    ]

    const expected =
        `    a = models.IntegerField()
    b = models.TextField()`

    expect(parseFields(fields)).toBe(expected);
})

test("single field", () => {

    const expected =
        `
class Tire(models.Model):
    width = models.IntegerField()

    def __str__(self):
        return self.width
`

    const actual: IModel = {
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

    const actual: IModel = {
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