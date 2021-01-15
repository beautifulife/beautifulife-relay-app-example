/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoEditPageQueryVariables = {
    id: string;
};
export type TodoEditPageQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"TodoEditForm_todo">;
    } | null;
};
export type TodoEditPageQuery = {
    readonly response: TodoEditPageQueryResponse;
    readonly variables: TodoEditPageQueryVariables;
};



/*
query TodoEditPageQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on TodoItem {
      ...TodoEditForm_todo
    }
    id
  }
}

fragment TodoEditForm_todo on TodoItem {
  id
  text
  completed
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoEditPageQuery",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TodoEditForm_todo"
              }
            ],
            "type": "TodoItem",
            "abstractKey": null
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
    "name": "TodoEditPageQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
                "name": "completed",
                "storageKey": null
              }
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
    "cacheID": "a87650f2cb5909749d8874699ab69365",
    "id": null,
    "metadata": {},
    "name": "TodoEditPageQuery",
    "operationKind": "query",
    "text": "query TodoEditPageQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on TodoItem {\n      ...TodoEditForm_todo\n    }\n    id\n  }\n}\n\nfragment TodoEditForm_todo on TodoItem {\n  id\n  text\n  completed\n}\n"
  }
};
})();
(node as any).hash = '33132400ad63fc3ab1889b61d90a65e7';
export default node;
