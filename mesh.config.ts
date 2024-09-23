// import { defineConfig, loadGraphQLHTTPSubgraph } from '@graphql-mesh/compose-cli'
import { defineConfig, } from '@graphql-mesh/compose-cli'
import { loadJSONSchemaSubgraph } from '@omnigraph/json-schema'
import { OperationTypeNode } from 'graphql'

// export const composeConfig = defineConfig({
//   subgraphs: [
//     {
//       sourceHandler: loadGraphQLHTTPSubgraph('Countries', {
//         endpoint: 'https://countries.trevorblades.com'
//       })
//     }
//   ]
// })

export const composeConfig = defineConfig({
  subgraphs: [
    {
      sourceHandler: loadJSONSchemaSubgraph('todoApi', {
        endpoint: `http://localhost:3000`,
        operationHeaders: {
          'Content-Type': 'application/json',
        },
        operations: [
          {
            type: OperationTypeNode.QUERY,
            field: 'todos',
            path: '/todos',
            method: 'GET',
            responseSample: './gql_schemas/todos.json',
          },
          {
            type: OperationTypeNode.QUERY,
            field: 'todo',
            path: '/todos/{args.id}',
            method: 'GET',
            responseSample: './gql_schemas/todo.json',
          }
        ],
      }),
    },
  ],
  // additionalTypeDefs: /* GraphQL */ `
  //   directive @live on QUERY
  // `,
});

