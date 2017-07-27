import {IField} from "../../../src/models/interfaces/index";
import {modelTypeConverter} from "../../../src/api/mutation/modelTypeConverter";

const assertConversion = (field: IField[], expected: string[]) =>
    expect(modelTypeConverter(field)).toBe(expected);

describe("convert fields without options", () => {

    test("TextField", () => {

        const field: IField = {
            name: "f",
            type: "TextField()",
        };

        const expected = `f = graphene.String(required=True)`;

        assertConversion([field], [expected]);

    });

    test("CharField", () => {

        const field: IField = {
            name: "f",
            type: "CharField()",
        };

        const expected = `f = graphene.String(required=True)`;

        assertConversion([field], [expected]);

    });

    test("IntegerField", () => {

        const field: IField = {
            name: "f",
            type: "IntegerField()",
        };

        const expected = `f = graphene.Int(required=True)`;

        assertConversion([field], [expected]);

    });

    test("FloatField", () => {

        const field: IField = {
            name: "f",
            type: "FloatField()",
        };

        const expected = `f = graphene.Float(required=True)`;

        assertConversion([field], [expected]);

    });

    test("BooleanField", () => {

        const field: IField = {
            name: "f",
            type: "BooleanField()",
        };

        const expected = `f = graphene.Boolean(required=True)`;

        assertConversion([field], [expected]);

    });

    test("DateTime", () => {

        const field: IField = {
            name: "f",
            type: "DateTime()",
        };

        const expected = `f = graphene.types.datetime.DateTime(required=True)`;

        assertConversion([field], [expected]);

    });

    test("ForeignKey", () => {

        const field: IField = {
            name: "f",
            type: "ForeignKey()",
        };

        const expected = `TODO`;

        assertConversion([field], [expected]);

    });

});

describe("convert fields with options", () => {

    test("nullable", () => {

        const field: IField = {
            name: "f",
            type: "TextField(null=True)",
        };

        const expected = `f = graphene.String(required=False)`;

        assertConversion([field], [expected]);

    });

    test("default value", () => {

        const field: IField = {
            name: "f",
            type: `TextField(default="def")`,
        };

        const expected = `f = graphene.String(default_value="def")`;

        assertConversion([field], [expected]);

    });

    test("ignore other options", () => {

        const field: IField = {
            name: "f",
            type: `TextField(something=value)`,
        };

        const expected = `f = graphene.String()`;

        assertConversion([field], [expected]);

    });

});
