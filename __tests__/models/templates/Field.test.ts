import Field from '../../../src/models/templates/Field';
import { IField } from "../../../src/models/model";

test("field template parser", () => {
    const actual: IField = {
        name: "a",
        type: "TextField()"
    }

    const expected = "a = models.TextField()";

    expect(Field(actual)).toBe(expected);
})