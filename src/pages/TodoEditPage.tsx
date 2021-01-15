import { ScreenComponentProps, useNavigator, useParams } from 'karrotframe/lib'
import React, { ComponentProps, useMemo } from 'react'
import Loader from 'react-spinners/HashLoader'
import { toast } from 'react-toastify'
import { graphql, useMutation, useQuery } from 'relay-hooks'

import { css } from '@emotion/react'

import { TodoEditPageEditTodoMutation } from '../__generated__/TodoEditPageEditTodoMutation.graphql'
import { TodoEditPageQuery } from '../__generated__/TodoEditPageQuery.graphql'
import Navigation from '../components/Navigation'
import TodoEditForm from '../components/TodoEditForm'

const TodoEditPage: React.FC<ScreenComponentProps> = ({ isRoot }) => {
  const { pop } = useNavigator()
  const param = useParams<{ id: string }>()
  const { id } = useMemo(() => param ?? { id: '' }, [])

  const { data, isLoading } = useQuery<TodoEditPageQuery>(
    graphql`
      query TodoEditPageQuery($id: ID!) {
        node(id: $id) {
          ... on TodoItem {
            ...TodoEditForm_todo
          }
        }
      }
    `,
    {
      id,
    }
  )

  const [mutateEditTodo, { loading }] = useMutation<TodoEditPageEditTodoMutation>(graphql`
    mutation TodoEditPageEditTodoMutation($input: UpdateTodoItemInput!) {
      updateTodoItem(input: $input) {
        updatedTodoItem {
          id
          completed
          text
        }
      }
    }
  `)

  const handleSubmit: ComponentProps<typeof TodoEditForm>['onSubmit'] = (formValues) => {
    mutateEditTodo({
      variables: { input: formValues },
      onCompleted: () => {
        toast.success('Edit Success!')
        pop()
      },
      onError: (err) => {
        console.error(err)
        toast.error('Error Occured')
      },
    })
  }

  return (
    <div
      css={css`
        padding: 16px;
      `}>
      <Loader loading={isLoading || loading} />

      <Navigation title="Edit Todo Page" isRoot={isRoot} />

      <h1>New Todo</h1>

      {data?.node && <TodoEditForm todo={data.node} onSubmit={handleSubmit} />}
    </div>
  )
}

export default TodoEditPage
