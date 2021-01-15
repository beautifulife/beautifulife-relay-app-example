/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteTodoItemInput = {
    id: string;
    clientMutationId?: string | null;
};
export type TodoPageDeleteTodoMutationVariables = {
    input: DeleteTodoItemInput;
};
export type TodoPageDeleteTodoMutationResponse = {
    readonly deleteTodoItem: {
        readonly deletedTodoItemId: string | null;
    } | null;
};
export type TodoPageDeleteTodoMutation = {
    readonly response: TodoPageDeleteTodoMutationResponse;
    readonly variables: TodoPageDeleteTodoMutationVariables;
};



/*
mutation TodoPageDeleteTodoMutation(
  $input: DeleteTodoItemInput!
) {
  deleteTodoItem(input: $input) {
    deletedTodoItemId
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
    "concreteType": "DeleteTodoItemPayload",
    "kind": "LinkedField",
    "name": "deleteTodoItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedTodoItemId",
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
    "name": "TodoPageDeleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageDeleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dc9dab643a7f6f74078a470f288a9693",
    "id": null,
    "metadata": {},
    "name": "TodoPageDeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageDeleteTodoMutation(\n  $input: DeleteTodoItemInput!\n) {\n  deleteTodoItem(input: $input) {\n    deletedTodoItemId\n  }\n}\n"
  }
};
})();
(node as any).hash = '98019e529c87cc0fd009695c216e5c49';
export default node;
