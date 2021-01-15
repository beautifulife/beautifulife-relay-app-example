/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateTodoItemInput = {
    id: string;
    text: string;
    completed: boolean;
    clientMutationId?: string | null;
};
export type TodoPageUpdateTodoMutationVariables = {
    input: UpdateTodoItemInput;
};
export type TodoPageUpdateTodoMutationResponse = {
    readonly updateTodoItem: {
        readonly updatedTodoItem: {
            readonly id: string;
            readonly completed: boolean | null;
        } | null;
    } | null;
};
export type TodoPageUpdateTodoMutation = {
    readonly response: TodoPageUpdateTodoMutationResponse;
    readonly variables: TodoPageUpdateTodoMutationVariables;
};



/*
mutation TodoPageUpdateTodoMutation(
  $input: UpdateTodoItemInput!
) {
  updateTodoItem(input: $input) {
    updatedTodoItem {
      id
      completed
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
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateTodoItemPayload",
    "kind": "LinkedField",
    "name": "updateTodoItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "updatedTodoItem",
        "plural": false,
        "selections": [
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
          }
        ],
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
    "name": "TodoPageUpdateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageUpdateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2542cd9659420be0567b45d7416a136c",
    "id": null,
    "metadata": {},
    "name": "TodoPageUpdateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageUpdateTodoMutation(\n  $input: UpdateTodoItemInput!\n) {\n  updateTodoItem(input: $input) {\n    updatedTodoItem {\n      id\n      completed\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '39ca8cdc6b531a51e0b2b02d33a2b8e3';
export default node;
