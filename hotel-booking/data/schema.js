const typeDefinitions = `
type Hotel {
  id: ID
  name: String
  latitude: String
  longitude: String
}

# the schema allows the following two queries:
type RootQuery {
  Hotel(id: ID): Hotel
}

# this schema allows the following two mutations:
type RootMutation {
  createHotel(
    name: String
    latitude: String
    longitude: String
  ): Hotel
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  mutation: RootMutation
}
`

export default [typeDefinitions]
