import React from 'react'
import { graphql, useFragment } from 'relay-hooks'

import { css } from '@emotion/react'

import { Ticket_ticket$key } from '../__generated__/Ticket_ticket.graphql'

interface Props {
  ticket: Ticket_ticket$key
}

const Ticket: React.FC<Props> = (props) => {
  const ticket = useFragment(
    graphql`
      fragment Ticket_ticket on Ticket {
        status
        subject
        lastUpdated
        trackingId
      }
    `,
    props.ticket
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
      <li>status: {ticket.status}</li>
      <li>subject: {ticket.subject}</li>
      <li>lastUpdated: {ticket.lastUpdated}</li>
      <li>trackingId: {ticket.trackingId}</li>
    </ul>
  )
}

export default Ticket
