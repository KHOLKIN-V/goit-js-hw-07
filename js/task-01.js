const categories = document.querySelector('#categories');

const listsCategories = document.getElementById('categories').children.length;

console.log('В списке ' + listsCategories + ' категории');

const items = document.querySelectorAll('.item');

items.forEach(i => {
	const title = i.querySelector('h2').textContent;
	console.log(`Категория: ${title}`);
	const lastLi = i.lastElementChild.children.length;
	console.log(`Количество элементов: ${lastLi}`);
})
