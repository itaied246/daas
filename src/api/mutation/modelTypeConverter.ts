import {IField} from "../../models/interfaces/index";

const conversionMap = {
    CharField: "graphene.String",
    TextField: "graphene.String",
    IntegerField: "graphene.Int",
    FloatField: "graphene.Float",
    BooleanField: "graphene.Boolean",
    DateTime: "graphene.types.datetime.DateTime",
};

const convert = (type: string) => conversionMap[type];

const extractFieldType = (field: IField) =>
    field.type.split("(", 1)[0];

const convertField = (field: IField) =>
    `${field.name} = ${convert(extractFieldType(field))}`;

export const modelTypeConverter = (fields: IField[]) =>
    fields
        .map(convertField)
        ;
