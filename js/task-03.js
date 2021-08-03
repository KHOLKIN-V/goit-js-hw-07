const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgUrl = images.map(i => i.url);
const gallery = document.querySelector('#gallery');

const imagesUl = images.map(i => {
  return `<li><img src="${i.url}" alt="${i.alt}" width="200px"></li>`;
});

console.log(imagesUl)

gallery.insertAdjacentHTML('beforeend', imagesUl.join(''));

gallery.style.listStyleType = 'none';
gallery.style.alignItems = 'auto';
gallery.style.display = 'inline-flex';
