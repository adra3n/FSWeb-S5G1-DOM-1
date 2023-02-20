const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */


const linkler = document.querySelectorAll('nav a');
linkler.forEach((element, i) => {
  element.classList.add("italic");
  element.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

// [...linkler].map((element, i)=>{
//   element.classList.add("italic")
//   linkler[i].textContent = siteContent.nav[`nav-item-${i + 1}`]
// })

// const anaIcerikBaslik = document.querySelectorAll('.text-content h4');
// anaIcerikBaslik.forEach((element, i) => {
//   if (i % 2 == 0) {
//     element.textContent = Object.values(siteContent["ana-içerik"])[i];
//   }
// });

const anaIcerik = document.querySelectorAll('.text-content h4, .text-content p');
anaIcerik.forEach((element, i) => {
  element.textContent = Object.values(siteContent["ana-içerik"])[i];
});

const resimler = document.querySelectorAll('#logo-img, #cta-img, #middle-img');
resimler.forEach((element, i) => {
  element.src = Object.values(siteContent["images"])[i];
});

const cta = document.querySelectorAll('.cta h1, .cta button');
cta.forEach((element, i) => {
  element.textContent = Object.values(siteContent["cta"])[i];
});

const iletisim = document.querySelectorAll(".contact h4, .contact p");
iletisim.forEach((element, i) => {
  element.textContent = Object.values(siteContent["iletisim"])[i];
});

const footerLink = document.querySelectorAll('nav a');
linkler.forEach((element, i) => {
  element.classList.add("italic");
  element.textContent = siteContent.nav[`nav-item-${i + 1}`]
});

const copyrightText = document.querySelector("footer a");
copyrightText.textContent = siteContent.footer["copyright"];
copyrightText.classList.add("bold");
