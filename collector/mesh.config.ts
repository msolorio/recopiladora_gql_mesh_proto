import { defineConfig, } from '@graphql-mesh/compose-cli'
import { loadJSONSchemaSubgraph } from '@omnigraph/json-schema'
import { OperationTypeNode } from 'graphql'

export const composeConfig = defineConfig({
  output: './supergraph.ts',
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

