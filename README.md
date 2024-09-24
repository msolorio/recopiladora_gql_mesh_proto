# GraphQL Mesh Proto

A service that unifies data from multiple sources, stores, and makes available as a supergraph with [GrapQL  Mesh](https://the-guild.dev/graphql/mesh).

### Setup
```sh
git clone git@github.com:msolorio/recopiladora_gql_mesh_proto.git
cd recopiladora_gql_mesh_proto
make build
make dev
```
Navigate to collector dir
```
cd collector
```

Generate the supergraph after making updates to `mesh.config.ts`
```
npx mesh-compose
```

### Query supergraph locally
```
npx tsx ./src/app/getDataLocal.ts
```

---
#### if querying from gql hive server
serve the hive supergraph
```
npx hive-gateway supergraph
```

go to localhost:4000/graphql

fetch data programmatically
```
npx tsx ./getDataHttp.ts
```
