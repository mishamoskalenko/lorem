const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),toggler=document.querySelector(".header__toggler"),nav=document.querySelector(".header__wrapper"),user=document.querySelector(".header__user");toggler.addEventListener("click",(function(){toggler.classList.contains("header__toggler--open")?(toggler.classList.remove("header__toggler--open"),toggler.classList.add("header__toggler--close"),nav.classList.remove("header__wrapper--open"),nav.classList.add("header__wrapper--close")):(toggler.classList.add("header__toggler--open"),toggler.classList.remove("header__toggler--close"),nav.classList.add("header__wrapper--open"),nav.classList.remove("header__wrapper--close"))}));