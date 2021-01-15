/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TicketAssignee_ticket = {
    readonly assignee: {
        readonly avatarUrl?: string | null;
        readonly fullName?: string;
    } | null;
    readonly " $refType": "TicketAssignee_ticket";
};
export type TicketAssignee_ticket$data = TicketAssignee_ticket;
export type TicketAssignee_ticket$key = {
    readonly " $data"?: TicketAssignee_ticket$data;
    readonly " $fragmentRefs": FragmentRefs<"TicketAssignee_ticket">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TicketAssignee_ticket",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "assignee",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "avatarUrl",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "fullName",
              "storageKey": null
            }
          ],
          "type": "User",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Ticket",
  "abstractKey": null
};
(node as any).hash = '3ab3b99185e348bc1d85385a5d3e07c6';
export default node;
