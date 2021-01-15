import { Link } from 'karrotframe/lib'
import React from 'react'
import { graphql, useFragment } from 'relay-hooks'

import { css } from '@emotion/react'

import { TicketList_query$key } from '../__generated__/TicketList_query.graphql'
import Ticket from './Ticket'

interface Props {
  query: TicketList_query$key
}

const TicketList: React.FC<Props> = (props) => {
  const query = useFragment(
    graphql`
      fragment TicketList_query on Query
      @argumentDefinitions(limit: { type: "Int", defaultValue: 50 }, offset: { type: "Int", defaultValue: 0 }) {
        tickets(limit: $limit, offset: $offset) {
          results {
            id
            ...Ticket_ticket
          }
        }
      }
    `,
    props.query
  )

  return (
    <ol>
      {query.tickets.results.map((ticket) => {
        return (
          <li
            key={ticket.id}
            css={css`
              margin: 8px 0;
              font-weight: bold;
              font-size: 1.5rem;
            `}>
            <Link to={`/ticket/${ticket.id}`}>
              <Ticket ticket={ticket} />
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default TicketList
