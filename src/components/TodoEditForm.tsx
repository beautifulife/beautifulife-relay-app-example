import React, { FormEventHandler, useState } from 'react'
import { graphql, useFragment } from 'relay-hooks'

import { css } from '@emotion/react'

import { TodoEditForm_todo$key } from '../__generated__/TodoEditForm_todo.graphql'

type FormValues = {
  id: string
  text: string
  completed: boolean
}

interface Props {
  todo: TodoEditForm_todo$key
  onSubmit: (formValues: FormValues) => void
}

const TodoEditForm: React.FC<Props> = (props) => {
  const todo = useFragment(
    graphql`
      fragment TodoEditForm_todo on TodoItem {
        id
        text
        completed
      }
    `,
    props.todo
  )
  const [formValues, setFormValues] = useState<FormValues>({
    id: todo.id,
    text: todo.text,
    completed: Boolean(todo.completed),
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    props.onSubmit(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        id: <input name="id" type="text" value={formValues.id} css={inputStyle} readOnly />
      </label>

      <label>
        text:{' '}
        <input
          name="text"
          type="text"
          placeholder="Type what to do"
          value={formValues.text}
          onChange={(e) => {
            setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }))
          }}
          css={inputStyle}
        />
      </label>

      <label>
        completed:
        <input
          name="completed"
          type="checkbox"
          placeholder="Type what to do"
          checked={Boolean(formValues.completed)}
          onChange={(e) => {
            setFormValues((state) => ({ ...state, [e.target.name]: e.target.checked }))
          }}
          css={css`
            display: block;
            width: 20px;
            height: 20px;
            margin: 4px 0 0;
          `}
        />
      </label>

      <button
        type="submit"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 18px 0 0;
          padding: 8px;
          width: 100%;
          border-radius: 8px;
        `}>
        <span
          css={css`
            margin: 0 0 0 8px;
            font-size: 1.2rem;
            font-weight: bold;
          `}>
          Submit
        </span>
      </button>
    </form>
  )
}

export default TodoEditForm

const inputStyle = css`
  margin: 4px 0 12px;
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;

  &:read-only {
    opacity: 0.5;
  }
`
