import { ScreenComponentProps, useNavigator } from 'karrotframe/lib'
import React, { FormEventHandler, useState } from 'react'
import { toast } from 'react-toastify'
import { graphql, useMutation } from 'relay-hooks'
import { ROOT_ID } from 'relay-runtime'

import { css } from '@emotion/react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NewTodoPageAddTodoMutation } from '../__generated__/NewTodoPageAddTodoMutation.graphql'
import Loader from '../components/Loader'
import Navigation from '../components/Navigation'

const NewTodoPage: React.FC<ScreenComponentProps> = ({ isRoot }) => {
  const { pop } = useNavigator()
  const [inputValue, setInputValue] = useState('')

  const [mutateAddTodo, { loading }] = useMutation<NewTodoPageAddTodoMutation>(graphql`
    mutation NewTodoPageAddTodoMutation($input: AddTodoItemInput!) {
      addTodoItem(input: $input) {
        addedTodoItemEdge {
          cursor
          node {
            id
            completed
            text
          }
        }
        addedTodoItem {
          id
          completed
          text
        }
      }
    }
  `)

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()

    // POINT: 5. Updater Add
    mutateAddTodo({
      variables: { input: { text: inputValue } },
      configs: [
        {
          type: 'RANGE_ADD',
          parentID: ROOT_ID,
          connectionInfo: [
            {
              key: 'TodoListPaginated_todosConnection',
              rangeBehavior: 'prepend',
            },
          ],
          edgeName: 'addedTodoItemEdge',
        },
      ],
      onCompleted: () => {
        toast.success('Add Todo Success!')
        pop()
      },
      onError: (err) => {
        console.error(err)
        toast.error('Error Occured!')
      },
    })
  }

  return (
    <div
      css={css`
        padding: 16px;
      `}>
      <Loader loading={loading} />

      <Navigation title="New Todo Page" isRoot={isRoot} />

      <h1>New Todo</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="text"
          type="text"
          placeholder="Type what to do"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          css={css`
            margin: 0 0 12px;
            padding: 8px;
            width: 100%;
            border-radius: 8px;
            font-size: 1.2rem;
            font-weight: bold;
          `}
        />

        <button
          type="submit"
          disabled={!inputValue}
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            width: 100%;
            border-radius: 8px;
          `}>
          <FontAwesomeIcon icon={faPlusCircle} size="lg" />
          <span
            css={css`
              margin: 0 0 0 8px;
              font-size: 1.2rem;
              font-weight: bold;
            `}>
            Add Todo
          </span>
        </button>
      </form>
    </div>
  )
}

export default NewTodoPage
