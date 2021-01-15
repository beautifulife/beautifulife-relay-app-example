import { ScreenComponentProps, useParams } from 'karrotframe/lib'
import React, { useMemo } from 'react'
import { graphql, useQuery } from 'relay-hooks'

import { css } from '@emotion/react'

// # POINT: cache
// import { useRetainQuery } from '../packages/relayQueryCache'
import { TicketPageQuery } from '../__generated__/TicketPageQuery.graphql'
import Loader from '../components/Loader'
import Navigation from '../components/Navigation'
import Ticket from '../components/Ticket'
import TicketAssignee from '../components/TicketAssignee'

const ticketPageQueryNode = graphql`
  query TicketPageQuery($id: ID!) {
    node(id: $id) {
      ...Ticket_ticket

      # More Value
      ...TicketAssignee_ticket
    }
  }
`

const TicketPage: React.FC<ScreenComponentProps> = ({ isRoot }) => {
  const param = useParams<{ id: string }>()
  const { id } = useMemo(() => param ?? { id: '' }, [])

  const variables = { id }
  const { data, isLoading } = useQuery<TicketPageQuery>(ticketPageQueryNode, variables, {
    fetchPolicy: 'store-or-network',
  })
  // useRetainQuery(ticketPageQueryNode, variables)

  return (
    <div
      css={css`
        padding: 16px;
      `}>
      <Loader loading={isLoading} />

      <Navigation title="Todo Page" isRoot={isRoot} />

      <h1>Ticket Page</h1>

      {data?.node && (
        <section>
          <Ticket ticket={data.node} />

          <div
            css={css`
              margin: 32px 0 0;
            `}>
            <h2>More Value</h2>

            <div
              css={css`
                margin: 8px 0 0;
                font-size: 1.2rem;
              `}>
              <TicketAssignee ticket={data.node} />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default TicketPage
