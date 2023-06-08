// Search 

const btnSearch = document.querySelector('.js-search-button');
const resultSearch = document.querySelector('.js-search-result');

btnSearch.addEventListener('click', () => {
	resultSearch.classList.add('active');
});
