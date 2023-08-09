// import command from 'js/clickCommand.js';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'js/clickCommand.js';

  return element;
}

function createAButton() {
  console.log(command);
  const button = document.createElement('button');
  button.title = 'clickMe';
  button.appendChild(document.createTextNode('clickMe'));
  button.onclick = async () => {
    try {
      const file = 'clickCommand.js';
      const command = command; //await import(file);
    } catch (err) {
      console.error(`err loading command module: ${err}`);
      console.dir(err);
    }

    console.log('you really clicked!!!');
  };
  return button;
}

function container() {
  const container = document.createElement('div');
  container.appendChild(component());
  container.appendChild(createAButton());
  return container;
}
document.body.appendChild(container());
