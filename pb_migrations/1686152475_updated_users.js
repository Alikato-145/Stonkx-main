migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jn87c5t49dugico")

  // remove
  collection.schema.removeField("s6xtsvsj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efhjjdds",
    "name": "coin",
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
  const collection = dao.findCollectionByNameOrId("jn87c5t49dugico")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s6xtsvsj",
    "name": "coin",
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
  collection.schema.removeField("efhjjdds")

  return dao.saveCollection(collection)
})
