import React from 'react'
import { graphql, useFragment } from 'relay-hooks'

import { css } from '@emotion/react'
import { faCheck, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Todo_todo$key } from '../__generated__/Todo_todo.graphql'

interface Props {
  todo: Todo_todo$key
}

const Todo: React.FC<Props> = (props) => {
  const todo = useFragment(
    graphql`
      fragment Todo_todo on TodoItem {
        id
        completed
        text
      }
    `,
    props.todo
  )

  return (
    <ul
      css={css`
        padding: 8px 0 8px 40px;
        border-radius: 12px;
        background: #ff8a3d;
        font-weight: bold;
        color: white;
        font-size: 1.2rem;
      `}>
      <li>{todo.completed ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faStop} />}</li>
      <li>text: {todo.text}</li>
      <li>id: {todo.text}</li>
    </ul>
  )
}

export default Todo
