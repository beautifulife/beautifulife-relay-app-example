/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddTodoItemInput = {
    text: string;
    clientMutationId?: string | null;
};
export type NewTodoPageAddTodoMutationVariables = {
    input: AddTodoItemInput;
};
export type NewTodoPageAddTodoMutationResponse = {
    readonly addTodoItem: {
        readonly addedTodoItemEdge: {
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly completed: boolean | null;
                readonly text: string;
            } | null;
        } | null;
        readonly addedTodoItem: {
            readonly id: string;
            readonly completed: boolean | null;
            readonly text: string;
        } | null;
    } | null;
};
export type NewTodoPageAddTodoMutation = {
    readonly response: NewTodoPageAddTodoMutationResponse;
    readonly variables: NewTodoPageAddTodoMutationVariables;
};



/*
mutation NewTodoPageAddTodoMutation(
  $input: AddTodoItemInput!
) {
  addTodoItem(input: $input) {
    addedTodoItemEdge {
      cursor
      node {
        id
        completed
        text
      }
    }
    addedTodoItem {
      id
      completed
      text
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
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
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddTodoItemPayload",
    "kind": "LinkedField",
    "name": "addTodoItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoItemEdge",
        "kind": "LinkedField",
        "name": "addedTodoItemEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoItem",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "addedTodoItem",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewTodoPageAddTodoMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewTodoPageAddTodoMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "361f6f9da944c26db0fd76c7da1226f9",
    "id": null,
    "metadata": {},
    "name": "NewTodoPageAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation NewTodoPageAddTodoMutation(\n  $input: AddTodoItemInput!\n) {\n  addTodoItem(input: $input) {\n    addedTodoItemEdge {\n      cursor\n      node {\n        id\n        completed\n        text\n      }\n    }\n    addedTodoItem {\n      id\n      completed\n      text\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c56205ab9241da1f1bb14c9774d485ee';
export default node;
