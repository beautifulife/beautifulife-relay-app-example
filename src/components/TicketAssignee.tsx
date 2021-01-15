import React from 'react'
import { graphql, useFragment } from 'relay-hooks'

import { css } from '@emotion/react'

import { TicketAssignee_ticket$key } from '../__generated__/TicketAssignee_ticket.graphql'

interface Props {
  ticket: TicketAssignee_ticket$key
}

const TicketAssignee: React.FC<Props> = (props) => {
  const ticket = useFragment(
    graphql`
      fragment TicketAssignee_ticket on Ticket {
        assignee {
          ... on User {
            avatarUrl
            fullName
          }
        }
      }
    `,
    props.ticket
  )

  return (
    <div
      css={css`
        padding: 8px;
        border-radius: 12px;
        background: #ff8a3d;
        font-weight: bold;
        color: white;
        font-size: 1.2rem;
      `}>
      assignee:{' '}
      <ul
        css={css`
          margin: 10px 0 0;
        `}>
        {ticket.assignee && (
          <>
            <li>
              <img
                src={ticket.assignee.avatarUrl!}
                alt="avatar"
                css={css`
                  width: 70px;
                  height: 70px;
                `}
              />
            </li>
            <li>assigneeName: {ticket.assignee.fullName}</li>
          </>
        )}
      </ul>
    </div>
  )
}

export default TicketAssignee
