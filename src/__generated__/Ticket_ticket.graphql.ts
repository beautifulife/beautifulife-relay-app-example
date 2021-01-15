/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TicketStatus = "Done" | "OnHold" | "Progress" | "Rejected" | "%future added value";
export type Ticket_ticket = {
    readonly status: TicketStatus;
    readonly subject: string;
    readonly lastUpdated: unknown | null;
    readonly trackingId: string;
    readonly " $refType": "Ticket_ticket";
};
export type Ticket_ticket$data = Ticket_ticket;
export type Ticket_ticket$key = {
    readonly " $data"?: Ticket_ticket$data;
    readonly " $fragmentRefs": FragmentRefs<"Ticket_ticket">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Ticket_ticket",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subject",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastUpdated",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "trackingId",
      "storageKey": null
    }
  ],
  "type": "Ticket",
  "abstractKey": null
};
(node as any).hash = 'f2d5d09192f656d23861428d13714b69';
export default node;
