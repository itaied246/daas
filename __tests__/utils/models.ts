import {IModel} from "../../src/models/interfaces/index";

export const tire: IModel = {
    name: "Tire",
    body: [
        {
            field: {
                name: "f",
                type: "IntegerField()",
            },
        },
    ],
};

export const spec: IModel = {
    name: "Spec",
    body: [
        {
            field: {
                name: "manufacturer",
                type: "TextField()",
            },
        },
    ],
};

export const car: IModel = {
    name: "Car",
    body: [
        {
            field: {
                name: "seats",
                type: "IntegerField()",
            },
            input: {
                name: "seats",
                type: "Int(required=True)",
            },
        },
    ],
    description: "Car model description.",
};
