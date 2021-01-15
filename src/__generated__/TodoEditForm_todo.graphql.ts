/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoEditForm_todo = {
    readonly id: string;
    readonly text: string;
    readonly completed: boolean | null;
    readonly " $refType": "TodoEditForm_todo";
};
export type TodoEditForm_todo$data = TodoEditForm_todo;
export type TodoEditForm_todo$key = {
    readonly " $data"?: TodoEditForm_todo$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoEditForm_todo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoEditForm_todo",
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
};
(node as any).hash = '1b95254bb1a761e1601fe7a772cc57ae';
export default node;
