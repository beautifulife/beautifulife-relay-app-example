/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MainPageQueryVariables = {
    first?: number | null;
};
export type MainPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TodoListPaginated_query" | "TicketList_query">;
};
export type MainPageQuery = {
    readonly response: MainPageQueryResponse;
    readonly variables: MainPageQueryVariables;
};



/*
query MainPageQuery(
  $first: Int
) {
  ...TodoListPaginated_query_3ASum4
  ...TicketList_query
}

fragment TicketList_query on Query {
  tickets(limit: 50, offset: 0) {
    results {
      id
      ...Ticket_ticket
    }
  }
}

fragment Ticket_ticket on Ticket {
  status
  subject
  lastUpdated
  trackingId
}

fragment TodoListPaginated_query_3ASum4 on Query {
  todosConnection(first: $first) {
    edges {
      node {
        id
        ...Todo_todo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}

fragment Todo_todo on TodoItem {
  id
  completed
  text
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
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
    "name": "MainPageQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "TodoListPaginated_query"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TicketList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TodoItemConnection",
        "kind": "LinkedField",
        "name": "todosConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TodoItem",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "completed",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "TodoListPaginated_todosConnection",
        "kind": "LinkedHandle",
        "name": "todosConnection"
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 50
          },
          {
            "kind": "Literal",
            "name": "offset",
            "value": 0
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
              (v2/*: any*/),
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
            "storageKey": null
          }
        ],
        "storageKey": "tickets(limit:50,offset:0)"
      }
    ]
  },
  "params": {
    "cacheID": "c302a71a3f21bd2cdb0e105fba9a6f42",
    "id": null,
    "metadata": {},
    "name": "MainPageQuery",
    "operationKind": "query",
    "text": "query MainPageQuery(\n  $first: Int\n) {\n  ...TodoListPaginated_query_3ASum4\n  ...TicketList_query\n}\n\nfragment TicketList_query on Query {\n  tickets(limit: 50, offset: 0) {\n    results {\n      id\n      ...Ticket_ticket\n    }\n  }\n}\n\nfragment Ticket_ticket on Ticket {\n  status\n  subject\n  lastUpdated\n  trackingId\n}\n\nfragment TodoListPaginated_query_3ASum4 on Query {\n  todosConnection(first: $first) {\n    edges {\n      node {\n        id\n        ...Todo_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Todo_todo on TodoItem {\n  id\n  completed\n  text\n}\n"
  }
};
})();
(node as any).hash = 'bd50f454f6977c2ff78b453afe2fc154';
export default node;
