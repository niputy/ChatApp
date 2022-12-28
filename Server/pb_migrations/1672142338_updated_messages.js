migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "egp9iscj",
    "name": "chat_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "v9h43yb857p1c26",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  // update
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

  return dao.saveCollection(collection)
})
