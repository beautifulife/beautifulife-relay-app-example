import { Link, ScreenComponentProps } from 'karrotframe/lib'
import React from 'react'
import { graphql, useQuery } from 'relay-hooks'

import { css } from '@emotion/react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MainPageQuery } from '../__generated__/MainPageQuery.graphql'
import daangn from '../assets/daangn.png'
import Loader from '../components/Loader'
import Navigation from '../components/Navigation'
import TicketList from '../components/TicketList'
import TodoListPaginated from '../components/TodoListPaginated'

const MainPage: React.FC<ScreenComponentProps> = () => {
  const { data, isLoading } = useQuery<MainPageQuery>(
    graphql`
      query MainPageQuery($first: Int) {
        # POINT: pagination
        ...TodoListPaginated_query @arguments(first: $first)

        # POINT: relay cache
        ...TicketList_query
      }
    `,
    {
      first: 2,
    }
  )

  return (
    <div
      css={css`
        padding: 16px;
      `}>
      <Navigation
        title="Main Page"
        appendRight={
          <>
            <Link to="/new">
              <FontAwesomeIcon
                icon={faPlus}
                size="lg"
                css={css`
                  margin: 0 4px;
                `}
              />
            </Link>
            <Link to="/with-us">
              <img
                alt="daangn"
                src={daangn}
                css={css`
                  width: 20px;
                  margin: 0 4px;
                `}
              />
            </Link>
          </>
        }
        isHome
      />

      {/* # POINT: Fragment */}
      <h1>Todo List (Chapter 1)</h1>
      {data && <TodoListPaginated query={data} />}

      <h1>Ticket List (Chapter 2)</h1>
      {data && <TicketList query={data} />}

      <Loader loading={isLoading} />
    </div>
  )
}

export default MainPage
