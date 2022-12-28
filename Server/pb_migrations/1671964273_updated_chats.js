migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7txox6ppfmoeqxq")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
