/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoList_query = {
    readonly todos: {
        readonly results: ReadonlyArray<{
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"Todo_todo">;
        }>;
    };
    readonly " $refType": "TodoList_query";
};
export type TodoList_query$data = TodoList_query;
export type TodoList_query$key = {
    readonly " $data"?: TodoList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoList_query">;
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
  "name": "TodoList_query",
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
      "concreteType": "TodosPaginated",
      "kind": "LinkedField",
      "name": "todos",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TodoItem",
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
              "name": "Todo_todo"
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
(node as any).hash = 'f490cd20e6b8558e39f940734d00332d';
export default node;
