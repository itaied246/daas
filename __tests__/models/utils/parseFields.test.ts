import {IField} from "../../../src/models/interfaces";
import {parseFields} from "../../../src/models/utils";

describe("parseFields", () => {

    test("single field", () => {
        const actual: [IField] = [
            {
                field: {
                    name: "a",
                    type: "b",
                },
            },
        ];

        const expected =
            "    a = models.b";

        expect(parseFields(actual)).toBe(expected);
    });

    test("multiple fields", () => {
        const actual: [IField] = [
            {
                field: {
                    name: "a",
                    type: "1",
                },
            },
            {
                field: {
                    name: "b",
                    type: "2",
                },
            },
        ];

        const expected =
            `    a = models.1
    b = models.2`;

        expect(parseFields(actual)).toBe(expected);
    });

});
