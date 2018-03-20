## Database Builder for Bangazon Corp

This is an exercise in building a database with dummy data from Faker.

## Instructions

To build your database:
- `` git clone ``
- ``npm install ``
- `` node build-db.js ``

If you want to alter the database schema and re-generate your dummy data:
- Delete all the files in the ``data/json`` EXCEPT ``product-types.json`` and ``payment-types.json``. These two were created manually.
- Once you've deleted the old json data, change your schema by editing the files in the `` fake-data-builders `` folder.
- To generate new json files, run `` node build-data.js`` in your terminal.
- To rebuild the database with your new data, run `` node build-db.js`` 