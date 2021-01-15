/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoPageQueryVariables = {
    id: string;
};
export type TodoPageQueryResponse = {
    readonly node: {
        readonly id?: string;
        readonly completed?: boolean | null;
        readonly text?: string;
        readonly dbId?: string;
        readonly " $fragmentRefs": FragmentRefs<"Todo_todo">;
    } | null;
};
export type TodoPageQuery = {
    readonly response: TodoPageQueryResponse;
    readonly variables: TodoPageQueryVariables;
};



/*
query TodoPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on TodoItem {
      id
      completed
      text
      dbId
    }
    ...Todo_todo
    id
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completed",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dbId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoPageQuery",
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
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "type": "TodoItem",
            "abstractKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Todo_todo"
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
    "name": "TodoPageQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "type": "TodoItem",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ef36fd2337c24f7c09cf36f74f71ef00",
    "id": null,
    "metadata": {},
    "name": "TodoPageQuery",
    "operationKind": "query",
    "text": "query TodoPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on TodoItem {\n      id\n      completed\n      text\n      dbId\n    }\n    ...Todo_todo\n    id\n  }\n}\n\nfragment Todo_todo on TodoItem {\n  id\n  completed\n  text\n}\n"
  }
};
})();
(node as any).hash = 'efa4dc7142b258de1d79c8e999d07d88';
export default node;
