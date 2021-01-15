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
export type TodoEditPageEditTodoMutationVariables = {
    input: UpdateTodoItemInput;
};
export type TodoEditPageEditTodoMutationResponse = {
    readonly updateTodoItem: {
        readonly updatedTodoItem: {
            readonly id: string;
            readonly completed: boolean | null;
            readonly text: string;
        } | null;
    } | null;
};
export type TodoEditPageEditTodoMutation = {
    readonly response: TodoEditPageEditTodoMutationResponse;
    readonly variables: TodoEditPageEditTodoMutationVariables;
};



/*
mutation TodoEditPageEditTodoMutation(
  $input: UpdateTodoItemInput!
) {
  updateTodoItem(input: $input) {
    updatedTodoItem {
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "text",
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
    "name": "TodoEditPageEditTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoEditPageEditTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f3afbef7541d6cdd946c46c23543c036",
    "id": null,
    "metadata": {},
    "name": "TodoEditPageEditTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoEditPageEditTodoMutation(\n  $input: UpdateTodoItemInput!\n) {\n  updateTodoItem(input: $input) {\n    updatedTodoItem {\n      id\n      completed\n      text\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f50e126e2166d0a137b21fb68a873e91';
export default node;
