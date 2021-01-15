/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TicketList_query = {
    readonly tickets: {
        readonly results: ReadonlyArray<{
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"Ticket_ticket">;
        }>;
    };
    readonly " $refType": "TicketList_query";
};
export type TicketList_query$data = TicketList_query;
export type TicketList_query$key = {
    readonly " $data"?: TicketList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"TicketList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "limit"
    },
    {
      "defaultValue": 0,
      "kind": "LocalArgument",
      "name": "offset"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "TicketList_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "limit",
          "variableName": "limit"
        },
        {
          "kind": "Variable",
          "name": "offset",
          "variableName": "offset"
        }
      ],
      "concreteType": "TicketsPaginated",
      "kind": "LinkedField",
      "name": "tickets",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Ticket",
          "kind": "LinkedField",
          "name": "results",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Ticket_ticket"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '6d908c4f79edab1db82fcd2aa4eeda3f';
export default node;
