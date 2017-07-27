[![Build Status](https://travis-ci.org/itaied246/daas.svg?branch=master)](https://travis-ci.org/itaied246/daas)
[![codecov](https://codecov.io/gh/itaied246/daas/branch/master/graph/badge.svg)](https://codecov.io/gh/itaied246/daas)

# daas (Data as a Service)

Generate `django-graphene` backend from designed models is `JSON` format.

# Rationale

Designing and modeling the data is probably the most important task.  
The next step, accessing the data via some API, is very quick and easy in the `django` framework.  
In order to not be coupled to that framework, we would like to expose the API as a service.  
We want to apply some business rules (or logic) to those endpoints,  
so we can do it by calling remote services.

Design your data -> generate `django-graphene` project -> expose your API.

# Requirements

- `Node` v8.1.4

# Architecture

![architecture](docs/architecture.png)

## Final Result

Web service based on `django-graphene` including filters and pagination on the data.

## Base JSON

Low level JSON that represents the data in `django-graphene` API.  
The base JSON is parsed to the web service.

```
{
    "name": <model name>,
    "fields": [
        {
            "fieldName": <field name>,
            "fieldType": <raw django field type>,
            "inputName": <field name>,
            "inputType": <raw graphene input field type>
        }
    ],
    "description": <model description>
}
```

Example:

```
{
    "name": "Tire",
    "fields": [
        {
            "fieldName": "width",
            "fieldType": "IntegerField(default=5, null=True, help_text=\"The tire's width in inches.\")",
            "inputName": "width",
            "inputType": "Int(default_value=5, required=False)"
        }
    ],
    "description": "A car's tire model."
}
```