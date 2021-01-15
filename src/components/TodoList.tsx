import { Link } from 'karrotframe/lib'
import React from 'react'
import { graphql, useFragment } from 'relay-hooks'

import { css } from '@emotion/react'

import { TodoList_query$key } from '../__generated__/TodoList_query.graphql'
import Todo from './Todo'

interface Props {
  query: TodoList_query$key
}

const TodoList: React.FC<Props> = (props) => {
  const query = useFragment(
    graphql`
      fragment TodoList_query on Query
      @argumentDefinitions(limit: { type: "Int", defaultValue: 50 }, offset: { type: "Int", defaultValue: 0 }) {
        todos(limit: $limit, offset: $offset) {
          results {
            id # POINT: data masking
            ...Todo_todo # @relay(mask: false)
          }
        }
      }
    `,
    props.query
  )

  return (
    <ol>
      {query.todos.results.map((todo) => {
        return (
          <li
            key={todo.id}
            css={css`
              margin: 8px 0;
              font-weight: bold;
              font-size: 1.5rem;
            `}>
            <Link to={`/todo/${todo.id}`}>
              <Todo todo={todo} />
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default TodoList
