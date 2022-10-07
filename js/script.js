const menu = document.querySelector('.nav'),
			burger = document.querySelector('.burger'),
			mobileBack = document.querySelector('.mobile-back'),
			overlay = document.querySelector('.overlay');



const lockScroll = () => {
	document.body.classList.add('lock');
}

const unlockScroll = () => {
	document.body.classList.remove('lock');
}

const initialMenu = () => {
	document.querySelector('.nav__list--dropdown').classList.remove('transformation');
	document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
	scrollTop();
}

const scrollTop = () => {
	menu.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

//Select Language

let lang = document.querySelectorAll('.lang__btn'); 
let langActive = lang[0];

for( let i = 0; i < lang.length; i++ ){

  lang[i].addEventListener('click', function(){
    langActive.classList.remove('active');
    this.classList.add('active');
    langActive = this; 
  });
};

// Menu Burger

burger.addEventListener('click', () => {
	menu.classList.add('open');
	overlay.classList.add('open');
	lockScroll();
	initialMenu();
});

overlay.addEventListener('click', () => {
	menu.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
});


// Phone

const phoneBtn = document.querySelector('.phone');
const phone = document.querySelector('.phone__list');

phoneBtn.addEventListener('click', () => {
	phone.classList.toggle('active');
});

window.addEventListener('click', e => {
	const target = e.target;
	if (!target.closest('.phone__list') && !target.closest('.phone')) {
		phone.classList.remove('active');
	}
});

// Copy Phone To Clipboard

const phoneNumberBtn = document.querySelectorAll('.phone-number__copy');

phoneNumberBtn.forEach((item) => {
	item.addEventListener('click', () => {
		phoneNumber = item.nextElementSibling.innerText;
		phoneNumber = navigator.clipboard.writeText(phoneNumber);
	});
});


// Menu
menu.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		e.target.closest('.nav__list').classList.add('transformation');
		e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('mobile-back__link')) {
		e.preventDefault();
		e.target.closest('.nav__list--dropdown').classList.remove('transformation');
		e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		menu.classList.remove('open');
		overlay.classList.remove('open');
		unlockScroll();
	}
});



//  Footer list
const showMore = document.querySelectorAll('.show-more');

showMore.forEach((item) => {
	item.addEventListener('click', () => {
		let parent = item.closest('.footer__content');
		if (item.innerText == 'Все >') {
			const array = Array.from(parent.querySelector('.footer__list').children);
			array.forEach(el => el.classList.add('is-visible'));
			item.innerText = 'Cкрыть';
		} else {
			const array = Array.from(parent.querySelector('.footer__list').children);
			const visItems = array.slice(7, array.length);
			visItems.forEach(el => el.classList.remove('is-visible'));
			item.innerText = 'Все >';
		}
	});
});


