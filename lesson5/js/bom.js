const input = document.querySelector("#bomchapter");
const button = document.querySelector("button");
const list = document.querySelector(".list");


button.addEventListener('click', function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = '❌';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
  list.removeChild(listItem);
  }

  input.focus();
}
    
);
