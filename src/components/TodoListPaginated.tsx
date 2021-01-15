import { Link } from 'karrotframe/lib'
import React from 'react'
import { graphql, usePagination } from 'relay-hooks'

import { css } from '@emotion/react'
import { faArrowAltCircleDown, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TodoListPaginated_query$key } from '../__generated__/TodoListPaginated_query.graphql'
import Todo from './Todo'

interface Props {
  query: TodoListPaginated_query$key
}

const TodoListPaginated: React.FC<Props> = (props) => {
  const { data, isLoading, hasNext, loadNext } = usePagination(
    graphql`
      fragment TodoListPaginated_query on Query
      @argumentDefinitions(
        after: { type: "String" }
        first: { type: "Int", defaultValue: 2 }
        before: { type: "String" }
        last: { type: "Int" }
      )
      @refetchable(queryName: "TodoListPaginatedRefetchQuery") {
        todosConnection(after: $after, first: $first, before: $before, last: $last)
          @connection(key: "TodoListPaginated_todosConnection") {
          edges {
            node {
              id
              ...Todo_todo
            }
          }
        }
      }
    `,
    props.query
  )

  const handleMoreClick = () => {
    if (!isLoading && hasNext) {
      loadNext(2, {
        onComplete: (err) => {
          console.log('Completed', err)
        },
      })
    }
  }

  return (
    <section>
      <ol>
        {data.todosConnection.edges!.map((edge) => {
          if (!edge?.node) return null
          return (
            <li
              key={edge.node.id}
              css={css`
                margin: 8px 0;
                font-weight: bold;
                font-size: 1.5rem;
              `}>
              <Link to={`/todo/${edge.node.id}`}>
                <Todo todo={edge.node} />
              </Link>
            </li>
          )
        })}
      </ol>

      <button
        onClick={handleMoreClick}
        disabled={!hasNext}
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0 0;
          padding: 8px;
          width: 100%;
          border-radius: 8px;
        `}>
        <FontAwesomeIcon icon={hasNext ? faArrowAltCircleDown : faWindowClose} size="lg" />
        <span
          css={css`
            margin: 0 0 0 8px;
            font-size: 1.2rem;
            font-weight: bold;
          `}>
          {hasNext ? 'Get More' : 'No More Data'}
        </span>
      </button>
    </section>
  )
}

export default TodoListPaginated
