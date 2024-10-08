import { parse } from 'graphql'
import { getExecutorForUnifiedGraph } from '@graphql-hive/gateway'
import supergraph from 'supergraph'

const fetcExecutor = getExecutorForUnifiedGraph({
  getUnifiedGraph: () => supergraph
})

const exampleDocument = parse(`
  query {
    todos {
      id
      name
      content
      author {
        first
        last  
      }
    }
  }
`)

const result = await fetcExecutor({
  document: exampleDocument,
  variables: {},
  context: {
    fetch,
  }
})

console.log(JSON.stringify(result, null, 2))
