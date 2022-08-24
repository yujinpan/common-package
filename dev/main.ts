import { sayMsg } from '../src';

const div = document.createElement('div');
div.innerText = sayMsg('Hello World!');

document.body.appendChild(div);
