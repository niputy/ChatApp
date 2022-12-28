migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egp9iscj",
    "name": "send_to",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dkno8ea",
    "name": "send_by",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  // remove
  collection.schema.removeField("egp9iscj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5dkno8ea",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
