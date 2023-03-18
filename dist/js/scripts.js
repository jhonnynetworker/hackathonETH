/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/

//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const ethereumButton = document.querySelector('.connect-metamask');
let web3;
let accounts;
let accountElem = document.querySelector('#account-address');

const metamaskButton = document.getElementById('metamask-button');
metamaskButton.addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log('Metamask is installed!');
    await connectMetamask();
  } else {
    console.log('MetaMask not found');
  }
});

async function connectMetamask() {
  accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  account = accounts[0];
  console.log('Your address:', account);
  accountElem.innerHTML = account;

  metamaskButton.textContent = 'Is logged';
}

  
ethereumButton.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        await connectMetamask();
    } else {
        console.log('MetaMask not found');
    }
});
