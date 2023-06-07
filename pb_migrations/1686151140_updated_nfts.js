migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("39p9z5g0nxtp58l")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("39p9z5g0nxtp58l")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
