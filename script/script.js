let menu = document.querySelector('.menu'),
    menuBtn = document.querySelector('.nav__btn'),
    menuLinkWrapper = document.querySelector('.section-contain'),
    searchBtn = document.querySelector('.search__hidden'),
    searchContain = document.querySelector('.search-hidden-contain'),
    filterLogo = document.getElementsByClassName('filter-hidden-contain'),
    popuplogo = document.querySelector('.filter-hidden-logo'),
    popupBrand = document.querySelector('.filter-hidden-brand'),
    BtnFilterSub = document.querySelector('.menu-hidden__filter-btn'),
    menuFilter = document.querySelector('.filter-hidden-bg'),
    menuFilterBtn = document.querySelector('.filter-hidden__btn'),
    inputMain = document.querySelector('.search__input'),
    inputHidden = document.querySelector('.search-hidden'),
    filterContain = document.getElementsByClassName('filter-contain'),
    filterDrop = document.getElementsByClassName('dropdown'),
    filterDropHeader = document.getElementsByClassName('filter__span');

if(window.matchMedia('(max-width: 1024px)').matches){
    menuBtn.addEventListener('click', ()=>{
    if((menu.style.display == "")||((menu.style.display == "none"))){
        menu.style.display = "flex";
        searchContain.style.display = "none";
    }
    else{menu.style.display = "none"}
    });
    menuLinkWrapper.addEventListener('click', ()=>{
        menu.style.display = "none"; 
    });
}
searchBtn.addEventListener('click', ()=>{
    if((searchContain.style.display == "")||((searchContain.style.display == "none"))){
        searchContain.style.display = "flex";
        menu.style.display = "none";
    }
    else{searchContain.style.display = "none"}
});
filterLogo[0].addEventListener('click', ()=>{
    if((popuplogo.style.display == "")||((popuplogo.style.display == "none"))){
        popuplogo.style.display = "block";
    }
    else{popuplogo.style.display = "none"}
});
popuplogo.addEventListener('click', ()=>{
    popuplogo.style.display = "none";
    });
filterLogo[1].addEventListener('click', ()=>{
    if((popupBrand.style.display == "")||((popupBrand.style.display == "none"))){
        popupBrand.style.display = "block";
    }
    else{popupBrand.style.display = "none"}
});
popupBrand.addEventListener('click', ()=>{
    popupBrand.style.display = "none";
});
 BtnFilterSub.addEventListener('click', ()=>{
    if((menuFilter.style.display == "")||((menuFilter.style.display == "none"))){
        menuFilter.style.display = "block";
    }
    else{menuFilter.style.display = "none"}
});
menuFilterBtn.addEventListener('click', ()=>{
    menuFilter.style.display = "none";
});
inputMain.addEventListener('click', ()=>{
    inputMain.value="";
})
inputHidden.addEventListener('click', ()=>{
    inputHidden.value="";
})
filterContain[0].addEventListener('click', (e)=>{
    filterDrop[0].classList.add('visibility');
    let dropItem = e.target;
    filterDropHeader[0].innerText = dropItem.innerText;
}, true)
filterDrop[0].addEventListener('click', ()=>{
    filterDrop[0].classList.remove('visibility');
});

filterContain[1].addEventListener('click', (e)=>{
    filterDrop[1].classList.add('visibility');
    let dropItem = e.target;
    filterDropHeader[1].innerText = dropItem.innerText;
}, true)
filterDrop[1].addEventListener('click', ()=>{
    filterDrop[1].classList.remove('visibility');
});



let
productContain = document.querySelector('.product-contain'),
product = document.getElementsByClassName('product'),
productImg = document.getElementsByClassName('product__img'),
productInfo = document.getElementsByClassName('product-info'),
productContent = document.getElementsByClassName('product-content'),
productText = document.getElementsByClassName('product__text'),
productPrice = document.getElementsByClassName('product-price'),
productPriceNew = document.getElementsByClassName('product-price__new'),
productPriceBacket = document.getElementsByClassName('product-price__backet');

























for(let i=0, j=product.length; i<=j; i++){
    product[i].addEventListener("click", function(e){
        if(document.querySelector('.product-active')){
            document.querySelector('.product-active').classList.remove('product-active');
        }
        let zz=e.target;
        if(zz.classList.contains('product')){
            zz.classList.add('product-active');
        }
        
    }, true);
}

















/*productContain.addEventListener("click", function(e){
    let xx = e.target;
    xx.children[0].stopPropagation();
    console.log(this.xx)

  }, true
);*/
/*product.addEventListener('click', (e)=>{
    let xx = e.target;
    console.log(xx);
    product[0].setAttribute('class', 'product-active');
    productImg[0].setAttribute('class', 'product__img-active');
    productInfo[0].setAttribute('class', 'product-info-active');
    productContent[0].setAttribute('class', 'product-content-active');
    productText[0].setAttribute('class', 'product__text-active');
    productPrice[0].setAttribute('class', 'product-price-active');
    productPriceNew[0].setAttribute('class', 'product-price__new-active');
    productPriceBacket[0].setAttribute('class', 'product-price__backet-active');
}, true)*/


/*('.product-active')
('.product__img-active')
('.product-info-active')
('.product-content-active')
('.product__text-active')
('.product-price-active')
('.product-price__new-active')
('.product-price__backet-active')*/
