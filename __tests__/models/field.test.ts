import Field from '../../src/models/field';
import { IField } from "../../src/models/interfaces";

const assertField = 
    (actual :IField, expected :string) => expect(Field(actual)).toBe(expected);

describe("parse django field", () => {

    test("raw field", () => {
        const actual: IField = {
            name: "a",
            type: "TextField()"
        }

        const expected = "a = models.TextField()";

        assertField(actual, expected);
    })

    test("field with options", () => {
        const actual: IField = {
            name: "a",
            type: "TextField(default=5, null=True)"
        }

        const expected = "a = models.TextField(default=5, null=True)";

        assertField(actual, expected);
    })

})