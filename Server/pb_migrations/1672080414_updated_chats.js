migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  collection.name = "messages"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  collection.name = "chats"

  return dao.saveCollection(collection)
})
