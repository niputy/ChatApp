migrate((db) => {
  const collection = new Collection({
    "id": "v9h43yb857p1c26",
    "created": "2022-12-26 18:48:45.842Z",
    "updated": "2022-12-26 18:48:45.842Z",
    "name": "chats",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lxolruvh",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v9h43yb857p1c26");

  return dao.deleteCollection(collection);
})
