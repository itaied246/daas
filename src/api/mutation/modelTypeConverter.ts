import {IField} from "../../models/interfaces/index";

const conversionMap = {
    CharField: "graphene.String",
    TextField: "graphene.String",
    IntegerField: "graphene.Int",
    FloatField: "graphene.Float",
    BooleanField: "graphene.Boolean",
    DateTime: "graphene.types.datetime.DateTime",
};

const convert = (type: string) => conversionMap[type] || type;

const convertField = (type: string) =>
    convert(type.split("(", 1)[0]);

export const modelTypeConverter = (fields: [IField]) =>
    fields
        .map((field) => field.type)
        .map(convertField);
