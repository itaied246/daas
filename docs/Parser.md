# Django Graphene parser

Parsing django model definition to graphene definitions.

## Fields

```
CharField -> graphene.String
TextField -> graphene.String 
IntegerField -> graphene.Int
FloatField -> graphene.Float
BooleanField -> graphene.Boolean
DateTime -> graphene.types.datetime.DateTime
``` 

Not yet designed:

```
json
ForeignKey -> type? name?
```

## Field options

```
null (default: False) -> required (default: True)
default               -> default_value
```

