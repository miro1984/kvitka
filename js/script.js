const menu = document.querySelector('.nav'),
	burger = document.querySelector('.burger'),
	mobileBack = document.querySelector('.mobile-back'),
	overlay = document.querySelector('.overlay'),
	closeBtn = document.querySelectorAll('.close-icon');



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

for (let i = 0; i < lang.length; i++) {

	lang[i].addEventListener('click', function () {
		langActive.classList.remove('active');
		this.classList.add('active');
		langActive = this;
	});
};

// Menu Burger

burger.addEventListener('click', () => {
	phoneBtn.classList.remove('active');
	phone.classList.remove('active');
	overlay.classList.remove('open');


	burger.classList.toggle('active');
	menu.classList.toggle('open');
	overlay.classList.toggle('active');
	document.body.classList.toggle('lock');
});

overlay.addEventListener('click', () => {
	burger.classList.remove('active');
	menu.classList.remove('open');
	overlay.classList.remove('active');
	unlockScroll();
});


// Phone

const phoneBtn = document.querySelector('.phone');
const phone = document.querySelector('.phone__list');

phoneBtn.addEventListener('click', () => {
	burger.classList.remove('active');
	menu.classList.remove('open');
	overlay.classList.remove('active');

	phoneBtn.classList.toggle('active');
	phone.classList.toggle('active');
	overlay.classList.toggle('open');
	document.body.classList.toggle('lock');
});


window.addEventListener('click', e => {
	const target = e.target;

	if (!target.closest('.phone__list') && !target.closest('.phone')) {
		phoneBtn.classList.remove('active');
		phone.classList.remove('active');
		overlay.classList.remove('open');
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

	if (e.target.classList.contains('mobile-back__link') /* && e.target.classList.contains('input') */) {
		e.preventDefault();
		e.target.closest('.nav__list--dropdown').classList.remove('transformation');
		e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
		scrollTop();
	}

	if (e.target.classList.contains('js-nav-link') && !e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		menu.classList.remove('open');
		overlay.classList.remove('active');
		unlockScroll();
	}


});



// Footer List
const windowInnerWidth = document.documentElement.clientWidth;

if (windowInnerWidth < 769) {


	// добавляю классы для стилизации footer__product

	let footerProducts = document.querySelectorAll('.footer__product');

	footerProducts.forEach((element) => {
		element.classList.add('accordion__item');
	});

	let footerContents = document.querySelectorAll('.footer__content');

	footerContents.forEach((element) => {
		element.classList.add('accordion__content');
	});


	let footerTitles = document.querySelectorAll('.footer__title-wrapper');

	footerTitles.forEach((element) => {
		element.classList.add('accordion__title');
	});


	let footerIcons = document.querySelectorAll('.accordion__icon');

	footerIcons.forEach((element) => {
		element.classList.add('mobile');
	});


	// Footer List Accordion

	let accordion = document.querySelector('.accordion');
	let items = document.querySelectorAll('.accordion__item');
	let title = document.querySelectorAll('.accordion__title');

	const footerItems = document.querySelectorAll('.footer__item');

	footerItems.forEach((element) => {
		element.classList.add('is-visible');
	});

	const showMore = document.querySelectorAll('.show-more');

	showMore.forEach((element) => {
		element.classList.add('hide');
	});

	function toggleAccordion() {
		let thisItem = this.parentNode;

		items.forEach(item => {
			if (thisItem == item) {
				thisItem.classList.toggle('active');

				return;
			}
			item.classList.remove('active');
		});
	};

	title.forEach(question => question.addEventListener('click', toggleAccordion));

} else {

	// Для десктопной версии с кнопкой "Показать ещё"

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
}


// Переносим header__list в header__nav

if (windowInnerWidth < 992) {

	var parentElement = document.querySelector('.header__nav');
	var theFirstChild = parentElement.firstChild;
	var newElement = document.querySelector('.header__list');

	parentElement.insertBefore(newElement, theFirstChild);

	// меняю классы для стилизации header__list для мобайл устройств

	let headerList = document.querySelectorAll('.header__list');

	headerList.forEach((element) => {
		element.classList.add('mobile-header__list');
	});

	let headerItems = document.querySelectorAll('.header__item');

	headerItems.forEach((element) => {
		element.classList.add('mobile-header__item');
	});


	let headerIcons = document.querySelectorAll('.header__icon');

	headerIcons.forEach((element) => {
		element.classList.add('mobile-header__icon');
	});

	let headerLinks = document.querySelectorAll('.header__link');

	headerLinks.forEach((element) => {
		element.classList.add('mobile-header__link');
	});

	let headerDescr = document.querySelectorAll('.header__descr');

	headerDescr.forEach((element) => {
		element.classList.add('mobile-header__descr');
	});
}

// Modal Window

var modalButtons = document.querySelectorAll('.open-modal'),
	modalOverlay = document.querySelector('.overlay-modal'),
	closeButtons = document.querySelectorAll('.modal-close');


modalButtons.forEach(function (item) {


	item.addEventListener('click', function (e) {

		e.preventDefault();

		var modalId = this.getAttribute('data-modal'),
			modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

		//  Если нажатие в Мобильном меню, то закрываем его
		menu.classList.remove('open');
		overlay.classList.remove('active');
		burger.classList.remove('active');

		modalElem.classList.add('active');
		modalOverlay.classList.add('active');
	});

});


closeButtons.forEach(function (item) {

	item.addEventListener('click', function (e) {
		var parentModal = this.closest('.modal');
		e.preventDefault();
		parentModal.classList.remove('active');
		modalOverlay.classList.remove('active');
	});

});


document.body.addEventListener('keyup', function (e) {

	if (e.key == 'Escape') {
		document.querySelector('.modal.active').classList.remove('active');
		document.querySelector('.overlay-modal').classList.remove('active');
	};
}, false);


modalOverlay.addEventListener('click', function () {

	document.querySelector('.modal.active').classList.remove('active');
	this.classList.remove('active');
});


// Маска телефона

let phoneInput = document.querySelector(".phone__callback");
let btn = document.querySelector(".btn__callback");

const phoneMask = new IMask(phoneInput, {
	mask: "+{38} (000) 000-00-00",
});

phoneInput.addEventListener("input", phoneInputHandler);


function phoneInputHandler() {
	if (phoneMask.masked.isComplete) {
		btn.classList.add("active");
	} else {
		btn.classList.remove("active");
	}
};



/* 	  

let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
			navItem = document.querySelector(`[data-id-nav=${pageId}]`);

		if(pageId == navItem.getAttribute("data-id-nav")) {
			navItem.classList.add("active-desktop-link");
}
		 */

// Active menu link

const profileLink = document.querySelectorAll('.js-profile-link');
let profileLinkActive = document.querySelector('.js-profile-link-active');


for (let i = 0; i < profileLink.length; i++) {

	profileLink[i].addEventListener('click', function () {
		profileLinkActive.classList.remove('js-profile-link-active');
		this.classList.add('js-profile-link-active');
		profileLinkActive = this;
	});
};


//   Smooth Scroll

const materialLink = document.querySelectorAll('.js-material-link');

for (let i = 0; i < materialLink.length; i++) {
	materialLink[i].addEventListener('click', function () {

		document.getElementById('calculate').scrollIntoView({ behavior: 'smooth' });
	})
}

/*   Скролл к секциям   */

/* const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("href");

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
}; */


// How Make Order Accordion

const howmakeorderLink = document.querySelectorAll('.js-howmakeorder-link');
let howmakeorderContent = document.querySelectorAll('.js-howmakeorder-content');
let howmakeorderIcon = document.querySelectorAll('.js-howmakeorder-icon');


for (let i = 0; i < howmakeorderLink.length; i++) {


	howmakeorderLink[i].addEventListener('click', function () {
		howmakeorderContent[i].classList.toggle('open');
		howmakeorderIcon[i].classList.toggle('open');
	});

};



// Login Modal

const signInBtn = document.querySelector('.js-signin-button');
const signUpBtn = document.querySelector('.js-signup-button');
const formBox = document.querySelector('.js-form-box');


signUpBtn.addEventListener('click', function () {
	formBox.classList.add('active');
});

signInBtn.addEventListener('click', function () {
	formBox.classList.remove('active');
});


// Modal Window about Succes LogIn/Registration 

const buttonLogIn = document.querySelector('.js-login-button');
const buttonRegister = document.querySelector('.js-register-button');
const formSuccess = document.querySelector('.js-form-success');

const windowSuccessLogIn = document.querySelector('.js-success-login');
const windowSuccessRegister = document.querySelector('.js-success-register');


buttonLogIn.addEventListener('click', function () {
	formSuccess.classList.add('active');
	windowSuccessLogIn.classList.add('active');
});

buttonRegister.addEventListener('click', function () {
	formSuccess.classList.add('active');
	windowSuccessRegister.classList.add('active');
});



// Calculator Result Table

const buttonCalculateResult = document.querySelector('.js-calculate-button');
const buttonOrder = document.querySelector('.js-order-button');
const tablePriceList = document.querySelector('.js-pricelist-table');
const valueCalculateResult = document.querySelector('.js-calculate-value');
const wrapperCalculateResult = document.querySelector('.js-calculator-result');

buttonCalculateResult.addEventListener('click', function () {


	wrapperCalculateResult.classList.add('active');
	wrapperCalculateResult.scrollIntoView({ behavior: 'smooth' });
	valueCalculateResult.textContent = "12453.00 грн";
	tablePriceList.classList.add('active');
	buttonOrder.classList.add('active');

});


// Calculator Tabs


const tabsBtn = document.querySelectorAll(".js-calculator-tabs-button");
const tabsItems = document.querySelectorAll(".js-calculator-tabs-content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

document.querySelector('.js-calculator-tabs-button').click();
