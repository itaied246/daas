# Start Django Project

1. `activate snakes`: activate python environment.
2. `pip install django graphene_django django-filter`: install dependencies.
3. `django-admin startproject daas .`: create django project.
4. `django-admin startapp data`: create data app.
5. Add the following to `INSTALLED_APPS` at `settings.py`:
    ```   
    'data',
    'graphene_django'
    ```
6. Create graphql schema at `schema.py`. 
7. Add the schema to graphql settings at `settings.py`:
    ```
    GRAPHENE = {
        'SCHEMA': 'daas.schema.schema'
    }
    ```
8. Add graphql views at `urls.py`.

[docs-ref](http://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/)