import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { getApiUrl, getPort } from '#app/config.js'

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))

const todos = [
  {
    id: 1,
    name: 'todo1',
    content: 'todoContent1',
    author: {
      first: 'first1',
      last: 'last1',
    }
  },
  {
    id: 2,
    name: 'todo2',
    content: 'todoContent2',
    author: {
      first: 'first2',
      last: 'last2',
    }
  },
]

app.get('/health', (_, res) => {
  res.status(200).send('OK')
})

app.get('/todos/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const todo = todos.find((todo) => todo.id === userId)
  res.json(todo)
})

app.get('/todos', (_, res) => {
  res.json(todos)
})

app.listen(getPort(), () => {
  console.log(`Server listening at ${getApiUrl()}`)
})
