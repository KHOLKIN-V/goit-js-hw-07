const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.getElementById('ingredients');

const items = ingredients.map(i => {
  const li = document.createElement('li');
  li.textContent = i;
  return li;
});
console.log(items);
ul.append(...items);
