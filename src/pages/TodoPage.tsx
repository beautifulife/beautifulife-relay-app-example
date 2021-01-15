import { ScreenComponentProps, useNavigator, useParams } from 'karrotframe/lib'
import React, { useMemo } from 'react'
import { toast } from 'react-toastify'
import { graphql, useMutation, useQuery } from 'relay-hooks'
import { ROOT_ID } from 'relay-runtime'

import { css } from '@emotion/react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TodoPageDeleteTodoMutation } from '../__generated__/TodoPageDeleteTodoMutation.graphql'
import { TodoPageQuery } from '../__generated__/TodoPageQuery.graphql'
import Loader from '../components/Loader'
import Navigation from '../components/Navigation'
import Todo from '../components/Todo'
import { TodoPageUpdateTodoMutation } from '../__generated__/TodoPageUpdateTodoMutation.graphql'

const TodoPage: React.FC<ScreenComponentProps> = ({ isRoot }) => {
  const { pop, push } = useNavigator()
  const param = useParams<{ id: string }>()
  const { id } = useMemo(() => param ?? { id: '' }, [])

  const { data, isLoading } = useQuery<TodoPageQuery>(
    graphql`
      query TodoPageQuery($id: ID!) {
        node(id: $id) {
          ... on TodoItem {
            id
            completed
            text
            dbId
          }
          ...Todo_todo
        }
      }
    `,
    { id }
  )

  const [mutateDeleteTodo, { loading: deleteLoading }] = useMutation<TodoPageDeleteTodoMutation>(graphql`
    mutation TodoPageDeleteTodoMutation($input: DeleteTodoItemInput!) {
      deleteTodoItem(input: $input) {
        deletedTodoItemId
      }
    }
  `)

  const [mutateUpdateTodo, { loading: updateLoading }] = useMutation<TodoPageUpdateTodoMutation>(graphql`
    mutation TodoPageUpdateTodoMutation($input: UpdateTodoItemInput!) {
      updateTodoItem(input: $input) {
        updatedTodoItem {
          id
          completed
        }
      }
    }
  `)

  const handleDeleteClick = () => {
    mutateDeleteTodo({
      variables: {
        input: {
          id,
        },
      },
      configs: [
        {
          type: 'RANGE_DELETE',
          parentID: ROOT_ID,
          connectionKeys: [
            {
              key: 'TodoListPaginated_todosConnection',
            },
          ],
          pathToConnection: [ROOT_ID, 'todosConnection'],
          deletedIDFieldName: 'deletedTodoItemId',
        },
      ],
      onCompleted: () => {
        toast.success('Delete Todo Success!')
        pop()
      },
      onError: (err) => {
        console.error(err)
        toast.error('Error Occured')
      },
    })
  }

  const handleCompleteClcik = () => {
    const { id, text, completed } = data!.node!
    mutateUpdateTodo({
      variables: { input: { id: id!, completed: !completed, text: text! } },
      optimisticUpdater: (store, data) => {
        const jobPost = store.get(id!)
        jobPost?.setValue(Boolean(!completed), 'completed')
      },
    })
  }

  const handleEditClick = () => {
    push(`/todo/${id}/edit`)
  }

  return (
    <div
      css={css`
        padding: 16px;
      `}>
      <Loader loading={isLoading || updateLoading || deleteLoading} />

      <Navigation
        title="Todo Page"
        isRoot={isRoot}
        appendRight={
          <>
            <FontAwesomeIcon
              icon={faEdit}
              size="lg"
              onClick={handleEditClick}
              css={css`
                margin: 0 4px;
              `}
            />
            <FontAwesomeIcon
              icon={faTrash}
              size="lg"
              onClick={handleDeleteClick}
              css={css`
                margin: 0 4px;
              `}
            />
          </>
        }
      />

      <h1>Todo Page</h1>

      {data?.node && (
        <section>
          <Todo todo={data.node} />
          <button
            type="submit"
            onClick={handleCompleteClcik}
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
              Toggle
            </span>
          </button>

          <div
            css={css`
              margin: 32px 0 0;
            `}>
            <h2>More Value</h2>
            <p
              css={css`
                margin: 8px 0 0;
                font-size: 1.2rem;
              `}>
              dbId: {data.node.dbId}
            </p>
          </div>
        </section>
      )}
    </div>
  )
}

export default TodoPage
