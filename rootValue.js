const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ scans: [] }).write()

const queries = {
  allScans: () => db.get('scans').value(),
  getScan: ({ id }) =>
    db
      .get('scans')
      .find({ id })
      .value(),
}

const mutations = {
  createScan: ({ input }) => {
    const scan = {
      id: shortid.generate(),
      ...input,
    }
    db.get('scans')
      .push(scan)
      .write()
    return scan
  },
  updateScan: ({ id, scan }) => {
    db.get('scans')
      .find({ id })
      .assign(scan)
      .write()
    return db
      .get('scans')
      .find({ id })
      .value()
  },
}

module.exports = {
  ...queries,
  ...mutations,
}
