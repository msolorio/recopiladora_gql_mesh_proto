# GraphQL Mesh Proto

Serves an rest api via graphql mesh

### Setup
```sh
git clone git@github.com:msolorio/recopiladora_gql_mesh_proto.git
cd recopiladora_gql_mesh_proto
make build
make dev

# serve the hive supergraph
npx hive-gateway supergraph

# go to localhost:4000/graphql
```

Generate the supergraph after making updates to `mesh.config.ts`
```
npx mesh-compose > supergraph.graphql
```
