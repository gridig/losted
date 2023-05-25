migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nshvoo61q4vfp6p")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nshvoo61q4vfp6p")

  collection.name = "note"

  return dao.saveCollection(collection)
})
