migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9h43yb857p1c26")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9h43yb857p1c26")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
