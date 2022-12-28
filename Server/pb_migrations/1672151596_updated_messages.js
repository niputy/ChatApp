migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  // remove
  collection.schema.removeField("5dkno8ea")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q6tv7lkq",
    "name": "send_by",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  // add
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

  // remove
  collection.schema.removeField("q6tv7lkq")

  return dao.saveCollection(collection)
})
