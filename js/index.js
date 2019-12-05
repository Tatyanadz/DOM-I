const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//NAVIGATION

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a');
nav.forEach((nav, i) => {
  nav.textContent = siteContent['nav']['nav-item-'+i]
  nav.style.color = 'green'
})

let New1 = document.createElement('a');
New1.textContent = "New1";
New1.style.color = 'green';
let navBar = document.querySelector('nav');
navBar.prepend(New1);

// let New2 = document.createElement('a');
// let navBar = document.createTextNode('New2');
// New2.appendChild(navBar);
// document.querySelectorAll('nav a').appendChild(New2);


// CTA 

let img = document.getElementById("cta-img");
img.setAttribute('src', siteContent["cta"]["img-src"])

let ctaText = document.querySelector(".cta-text");
ctaText.childNodes[1].innerHTML = siteContent["cta"]["h1"];
ctaText.childNodes[3].innerHTML = siteContent["cta"]["button"];

// CONTENT

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let topContent = document.querySelector(".top-content");
topContent.childNodes[1].children[0].innerHTML = siteContent["main-content"]["features-h4"];
topContent.childNodes[1].children[1].innerHTML = siteContent["main-content"]["features-content"];
topContent.childNodes[3].children[0].innerHTML = siteContent["main-content"]["about-h4"];
topContent.childNodes[3].children[1].innerHTML = siteContent["main-content"]["about-content"];

let bottomContent = document.querySelector(".bottom-content");
bottomContent.childNodes[1].children[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContent.childNodes[1].children[1].innerHTML = siteContent["main-content"]["services-content"];
bottomContent.childNodes[3].children[0].innerHTML = siteContent["main-content"]["product-h4"];
bottomContent.childNodes[3].children[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContent.childNodes[5].children[0].innerHTML = siteContent["main-content"]["vision-h4"];
bottomContent.childNodes[5].children[1].innerHTML = siteContent["main-content"]["vision-content"];

// FOOTER

let contact = document.querySelector(".contact");
contact.childNodes[1].innerHTML = siteContent["contact"]["contact-h4"];
contact.childNodes[3].innerHTML = siteContent["contact"]["address"];
contact.childNodes[5].innerHTML = siteContent["contact"]["phone"];
contact.childNodes[7].innerHTML = siteContent["contact"]["email"];

let footer = document.getElementsByTagName("footer");
footer[0].innerHTML = siteContent["footer"]["copyright"];