const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Scan {
  id: ID!
  name: String!
  uri: String!
  chapter: Int!
}

input ScanInput {
  name: String
  uri: String
  chapter: Int
}

type Query {
  allScans: [Scan]
  getScan(id: ID): Scan
}

type Mutation {
  createScan(input: ScanInput): Scan
  updateScan(id: ID, scan: ScanInput): Scan
}
`)
