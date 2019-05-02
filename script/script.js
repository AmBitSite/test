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

let product = document.getElementsByClassName('product'),
    productActive = document.querySelector('.product-active');

for(let i=0, j=product.length; i<j; i++){
        product[i].addEventListener("click", function(e){
            let mainContainProduct = e.currentTarget;
                removeProductActive();
            function addProductActive(mainContainProduct){
                let mainContainProductInfo = mainContainProduct.children[1],
                    productContent = mainContainProductInfo.children[0],
                    productPrice = mainContainProductInfo.children[1];
                mainContainProduct.classList.toggle('product-active');
                for(let countProduct=0, lengthProduct=mainContainProduct.children.length; countProduct<lengthProduct;countProduct++){
                    mainContainProduct.children[countProduct].classList.toggle(`${mainContainProduct.children[countProduct].classList}`+'-active')
                };
                for(let countInfo=0, lengthInfo=mainContainProductInfo.children.length; countInfo<lengthInfo;countInfo++){
                    mainContainProductInfo.children[countInfo].classList.toggle(`${mainContainProductInfo.children[countInfo].classList}`+'-active')
                };
                for(let countContent=1, lengthContent=productContent.children.length; countContent<lengthContent;countContent++){
                    productContent.children[countContent].classList.toggle(`${productContent.children[countContent].classList}`+'-active')
                };
                for(let countPrice=0, lengthPrice=productPrice.children.length; countPrice<lengthPrice;countPrice++){
                    productPrice.children[countPrice].classList.toggle(`${productPrice.children[countPrice].classList}`+'-active')
                };
}
            function removeProductActive(){
                if(document.querySelector('.product-active')!==null){
                    document.querySelector('.product-active').classList.add('product');
                    document.querySelector('.product-active').classList.remove('product-active');
                    document.querySelector('.product__img-active').classList.remove('product__img-active');
                    document.querySelector('.product-info-active').classList.remove('product-info-active');
                    document.querySelector('.product-content-active').classList.remove('product-content-active');
                    document.querySelector('.product-price-active').classList.remove('product-price-active');
                    document.querySelector('.product__text-active').classList.remove('product__text-active');
                    document.querySelector('.product__text-hidden-active').classList.remove('product__text-hidden-active');
                    document.querySelector('.product-price__old-active').classList.remove('product-price__old-active');
                    document.querySelector('.product-price__new-active').classList.remove('product-price__new-active');
                    document.querySelector('.product-price__backet-active').classList.remove('product-price__backet-active');
                    if(document.querySelector('.product-active')==null){
                        addProductActive(mainContainProduct);
                    }
                }
                else{addProductActive(mainContainProduct);}
            }
    }, true);
}