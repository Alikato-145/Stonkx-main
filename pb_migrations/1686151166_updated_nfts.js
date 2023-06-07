migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("39p9z5g0nxtp58l")

  // remove
  collection.schema.removeField("yx96t435")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5qutiztv",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("39p9z5g0nxtp58l")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("5qutiztv")

  return dao.saveCollection(collection)
})
