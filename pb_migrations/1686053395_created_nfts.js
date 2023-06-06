migrate((db) => {
  const collection = new Collection({
    "id": "39p9z5g0nxtp58l",
    "created": "2023-06-06 12:09:55.685Z",
    "updated": "2023-06-06 12:09:55.685Z",
    "name": "nfts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3vdothzy",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "43zctkem",
        "name": "url",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yx96t435",
        "name": "price",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9t62jwzg",
        "name": "sold",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("39p9z5g0nxtp58l");

  return dao.deleteCollection(collection);
})
