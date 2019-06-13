import { join } from 'lodash';
import Print from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Check your console';
  btn.onclick = Print;

  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.ts', function() {
    console.log('Accepting the updated Print module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
