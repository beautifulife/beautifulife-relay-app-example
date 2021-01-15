/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TicketPageQueryVariables = {
    id: string;
};
export type TicketPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"Ticket_ticket" | "TicketAssignee_ticket">;
    } | null;
};
export type TicketPageQuery = {
    readonly response: TicketPageQueryResponse;
    readonly variables: TicketPageQueryVariables;
};



/*
query TicketPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...Ticket_ticket
    ...TicketAssignee_ticket
    id
  }
}

fragment TicketAssignee_ticket on Ticket {
  assignee {
    __typename
    ... on User {
      avatarUrl
      fullName
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment Ticket_ticket on Ticket {
  status
  subject
  lastUpdated
  trackingId
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TicketPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Ticket_ticket"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TicketAssignee_ticket"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TicketPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "assignee",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Ticket",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "00720ca3a639e73c9767497c9f52f123",
    "id": null,
    "metadata": {},
    "name": "TicketPageQuery",
    "operationKind": "query",
    "text": "query TicketPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Ticket_ticket\n    ...TicketAssignee_ticket\n    id\n  }\n}\n\nfragment TicketAssignee_ticket on Ticket {\n  assignee {\n    __typename\n    ... on User {\n      avatarUrl\n      fullName\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment Ticket_ticket on Ticket {\n  status\n  subject\n  lastUpdated\n  trackingId\n}\n"
  }
};
})();
(node as any).hash = '3b19116b4902b2fe867fb6449f6984b4';
export default node;
