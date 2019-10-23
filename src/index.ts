import { Msg } from 'types/index.d.ts';

export function sayMsg(msg: Msg): Msg {
  return msg;
}

// test
const x: string = '1';

sayMsg(x);
