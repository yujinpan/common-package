import { test } from './module/test';

export type Msg = string;

export function sayMsg(msg: Msg): Msg {
  return msg;
}

// test
const x = '1';

sayMsg(x);
test();
