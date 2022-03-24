class Product
{
    constructor(Id, ProductName, Describe, IsPresent, Price, AmountKg, Country, ProdImage, Coefficient)
    {
        this.Id = Id;
        this.ProductName = ProductName;
        this.Describe = Describe;
        this.IsPresent = IsPresent;
        this.Price = Price;
        this.AmountKg = AmountKg;
        this.Country = Country;
        this.ProdImage = ProdImage;
        this.Coefficient = Coefficient;
    }
}
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click',CloseModalWindow);

const modal = document.getElementById('wrapper-modal');
modal.addEventListener('mousemove',getTotalResultAllOrder);
modal.addEventListener('click',getTotalResultAllOrder);

const backToOrders = document.getElementById('back-to-orders-id');
backToOrders.addEventListener('click',CloseModalWindow); 


const showCase = 
[
    new Product('00123','МАГРОК Ретро с молоком вар.', '(п/а-Ф80) (2 кг)', true, 115, 12, "Украина",'images/magrok-with-milk.webp'),
    new Product('00234','МАГРОК Любительская к-са в/с синюга', '(Газ 1,5)', true, 205, 105, "Украина", 'images/magrok-lubitelskaya.jpeg'),
    new Product('00345','МАГРОК Филейные сосиски 1с п/а', '(газ - 12 шт) (0,6кг)', true, 145 , 22, "Украина", 'images/file-magrok.webp'),
    new Product('00456','МАГРОК Филейная вар. в/с 2 кг (п/а-Ф80)', 'в/с 2 кг (п/а-Ф80) ', true, 130 , 200, "Украина", 'images/file-var-magr.jpeg'),
    new Product('00567','ДМ Снеки в/к сушеные Классик .', '(280гр "Чикенzzz")', true, 76.1 , 120, "Украина", 'images/sneak.webp'),
    new Product('00678','Casademont колбаса Caprichos', 'Fuet с перцем 80г', true, 82 , 15, "Украина", 'images/colbaska.webp'),
];
let basket = [];
//Всегда можно розширить асортимент на странице
addProductInCatalog(new Product(createId(),'МАГРОК Ретро с молоком вар.','(п/а-Ф80) (2 кг)',true,115.23,54.3,"Украина",'images/magrok-with-milk.webp',1.2));
addProductInCatalog(new Product(createId(),'МАГРОК Любительская к-са в/с синюга','(Газ 1,5)',true,205.44,34.5,"Украина",'images/magrok-lubitelskaya.jpeg',1.8));
addProductInCatalog(new Product(createId(),'МАГРОК Филейные сосиски 1с п/а.','(газ - 12 шт) (0,6кг)',true,145.77,44.3,"Украина",'images/file-magrok.webp',2.0));
addProductInCatalog(new Product(createId(),'МАГРОК Филейная вар. в/с 2 кг (п/а-Ф80)','в/с 2 кг (п/а-Ф80)',true,130.12,244.1,"Украина",'images/file-var-magr.jpeg',1.3));
addProductInCatalog(new Product(createId(),'ДМ Снеки в/к сушеные Классик','(280гр "Чикенzzz")',true,300.22,123.2,"Украина",'images/sneak.webp',1.4));
addProductInCatalog(new Product(createId(),'МАГРОК Столичная в/с вар.','(пузырь)ТУ 1/2',true,217.11,41.9,"Украина",'images/stolichna.jpeg',1.6));
addProductInCatalog(new Product(createId(),'Casademont колбаса Caprichos.','Fuet с перцем 80г',true,82.22,141.9,"Украина",'images/colbaska.webp',1.6));





function addProductInCatalog(product)
{
    const flexProductItem = document.createElement('section');
    flexProductItem.className = "flex-product-item";
    
    const div1 = document.createElement('div');
    
    const prodImg = document.createElement('img');
    prodImg.src = product.ProdImage;
    prodImg.alt = product.ProductName+'img';
    prodImg.className = 'productImages';
    
    const countryLebel = document.createElement('p');
    countryLebel.textContent = product.Country;
    countryLebel.className = 'country-track';
    
    const articleProductInfo = document.createElement('article');
    articleProductInfo.className = 'product-main-info';
    
    const productTitleH4 = document.createElement('h4');
    productTitleH4.textContent = product.ProductName;
    
    const productNameP = document.createElement('p');
    productNameP.textContent = product.Describe;

    const div2 = document.createElement('div');

    const border = document.createElement('p');
    border.className = 'myBorder-lvl1';

    const isPresentP = document.createElement('p');
    isPresentP.className = 'isPresent';
    if(product.IsPresent)
    {
        isPresentP.classList.add('isApsent');
        isPresentP.textContent = 'В наличии';
    }
    else
    {
        isPresentP.textContent = 'Заканчивается';
    }

    const priceP = document.createElement('p');
    priceP.textContent = product.Price + 'грн';
    priceP.className ="priceProduct";

    const describePrice = document.createElement('p');
    describePrice.textContent = '(Цена за кг)'; //
    describePrice.className = 'discrPrice';

    const buttonContainerDiv = document.createElement('div');
    buttonContainerDiv.className = 'button-container';

    const buttonWrapperDiv = document.createElement('div');
    buttonWrapperDiv.className = 'button-wrapper';

    const minusDiv = document.createElement('div');
    minusDiv.className = 'minus';
    minusDiv.addEventListener('click',decrementOperation);

    const myInput = document.createElement('input');
    myInput.type = 'number';
    myInput.value = product.Coefficient;
    myInput.className ='input-product';

    const plusDiv = document.createElement('div');
    plusDiv.className = 'plus';
    plusDiv.addEventListener('click',incrementOperation);

    const kgLabelP = document.createElement('p');
    kgLabelP.textContent = 'кг';

    const buttonWrapper2Div = document.createElement('div');
    buttonWrapper2Div.className = 'button-wrapper-2';

    const buyButton = document.createElement('button');
    buyButton.className = 'button-buy';
    buyButton.textContent = 'Купить';
    buyButton.addEventListener('click',onBuyProductClick)
    buyButton.addEventListener('mousedown',changeBackColor);
    buyButton.addEventListener('mouseup', returnBackColor);

    flexProductItem.append(div1);
    div1.append(prodImg);
    div1.append(countryLebel);
    div1.append(articleProductInfo);
    articleProductInfo.append(productTitleH4);
    articleProductInfo.append(productNameP);
    flexProductItem.append(div2);
    div2.append(border);
    div2.append(isPresentP);
    div2.append(priceP);
    div2.append(describePrice);
    div2.append(buttonContainerDiv);
    buttonContainerDiv.append(buttonWrapperDiv);
    buttonWrapperDiv.append(minusDiv);
    buttonWrapperDiv.append(myInput);
    buttonWrapperDiv.append(plusDiv);
    buttonContainerDiv.append(kgLabelP);
    div2.append(buttonWrapper2Div);
    buttonWrapper2Div.append(buyButton);

    showCase.push(product);

    const container = document.getElementById('containerProducts');
    container.append(flexProductItem);
}
function onBuyProductClick()
{
    const basketModalWindow = document.getElementById('wrapper-modal');
    if(basketModalWindow.style.display === 'block')
        return;
    basketModalWindow.style.display = 'block';
    const titleProduct = this.parentElement.parentElement.parentElement.children[0].children[2].children[0].innerText;
   
    if(checkExist(this)) // if exist don't add , but update basket
    {
        const container = document.getElementById('contentContainer');
         for(let i = 1; i < container.children.length; i++)
         {
            if(titleProduct === container.children[i].children[0].children[1].children[0].children[0].textContent)
            {
               const kgBasket = container.children[i].children[0].children[1].children[2].children[2].children[0].children[1].value;
               const kgVitrina = this.parentElement.parentElement.children[4].children[0].children[1].value;
               const suma = Number(kgBasket) + Number(kgVitrina);
               container.children[i].children[0].children[1].children[2].children[2].children[0].children[1].value = Number(suma).toFixed(3);

               container.children[i].children[0].children[1].children[2].children[5].textContent =(
               Number(getOnlyDigit(container.children[i].children[0].children[1].children[2].children[0].textContent) * suma).toFixed(2)) + 'грн' ;
            }
         }
        
        return;
    };

    const price =  getOnlyDigit(this.parentElement.parentElement.children[2].innerText);
    const isPresent  =  getBoleanResult(this.parentElement.parentElement.children[1].innerText);
    const totalAmountKg = this.parentElement.parentElement.children[4].children[0].children[1].value;
    const imgProduct = this.parentElement.parentElement.parentElement.children[0].children[0].src;
    
    const descrProduct = this.parentElement.parentElement.parentElement.children[0].children[2].children[1].innerText;
    const country = this.parentElement.parentElement.parentElement.children[0].children[1].innerText;
    
   
    const contentContainerItem = document.createElement('section');
    contentContainerItem.className = 'content-container-item';
    
    const contentContainerItemWrapper = document.createElement('div');
    contentContainerItemWrapper.classList.add('content-container-item-wrapper');
    
    const productImage = document.createElement('img');
    productImage.src = imgProduct;
    productImage.style.width ='126px';
    productImage.style.height='126px';
    productImage.style.alt ='productImgHere';

    const secondBlockContent = document.createElement('section');
    secondBlockContent.classList.add('second-block-content');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/basket-remove.png';
    deleteIcon.className = 'basket-remove';
    deleteIcon.addEventListener('mousemove',changeColorBasket);
    deleteIcon.addEventListener('mouseleave',returnColorBasket);
    deleteIcon.addEventListener('click',removeFromBasket);

    const titleAndDescr = document.createElement('div');
    titleAndDescr.classList.add('second-block-content-title-and-descr');

    const productNameP = document.createElement('p');
    productNameP.textContent = titleProduct;
   
    const descrProductP = document.createElement('p');
    descrProductP.textContent = descrProduct;

    const flexSectionOne = document.createElement('section');
    flexSectionOne.classList.add('d-flex');
    flexSectionOne.classList.add('justify-content-between');

    const partOne = document.createElement('p');
    partOne.textContent = '(Цена за кг)';
    partOne.className = 'first-div-first-p';

    const partSecond = document.createElement('p');
    partSecond.textContent = 'Кол-во:';
    partSecond.className ='third-div-first-p';

    const partThird = document.createElement('p');
    partThird.textContent = 'Общая сумма:';
    partThird.className ='last-div-first-p';

    const priceSection = document.createElement('section');
    priceSection.classList.add('d-flex');
    priceSection.classList.add('justify-content-between');
    priceSection.classList.add('align-items-center');

    const priceProductP = document.createElement('p');
    priceProductP.textContent = price +'грн';
    priceProductP.className = 'PriceLabel';

    const signMultiplyLable = document.createElement('div');
    signMultiplyLable.textContent = 'X';
    signMultiplyLable.className ='multiplyLabel';

    const blockDiv = document.createElement('div');

    const buttonWrapperDiv3 = document.createElement('div');
    buttonWrapperDiv3.className = 'button-wrapper';

    const minusDiv = document.createElement('div');
    minusDiv.className = 'minus';
    minusDiv.id = 'signOperatorMinus';
    minusDiv.addEventListener('click',decrementOperation);

    const amountKgInput = document.createElement('input');
    amountKgInput.type ='number';
    amountKgInput.className ='input-product';
    amountKgInput.value = totalAmountKg;
    amountKgInput.addEventListener('input', getSummaCurrentProduct);
   

   const plusDiv = document.createElement('div');
   plusDiv.className = 'plus';
   plusDiv.id = 'signOperatorPlus';
   plusDiv.addEventListener('click',incrementOperation);

   const kgLabel2 = document.createElement('p');
   kgLabel2.textContent = 'кг';
   kgLabel2.className = 'kgLable';

   const equalLabel = document.createElement('div');
   equalLabel.textContent = '=';
   equalLabel.classList.add('equalLabel');

   const priceLabel2 = document.createElement('p');
   priceLabel2.textContent = Number(amountKgInput.value * getOnlyDigit(priceProductP.textContent)).toFixed(2) + 'грн';
   

   priceLabel2.className = 'PriceLabel';

   contentContainerItem.append(contentContainerItemWrapper);

   contentContainerItemWrapper.append(productImage);
   contentContainerItemWrapper.append(secondBlockContent);
   contentContainerItemWrapper.append(deleteIcon);

   secondBlockContent.append(titleAndDescr);

   titleAndDescr.append(productNameP);
   titleAndDescr.append(descrProductP);

   secondBlockContent.append(flexSectionOne);

   flexSectionOne.append(partOne);
   flexSectionOne.append(partSecond);
   flexSectionOne.append(partThird);

   secondBlockContent.append(priceSection);

   priceSection.append((priceProductP));

   priceSection.append(signMultiplyLable);

   priceSection.append(blockDiv);
   blockDiv.append(buttonWrapperDiv3);
   buttonWrapperDiv3.append(minusDiv);
   buttonWrapperDiv3.append(amountKgInput);
   buttonWrapperDiv3.append(plusDiv);
   priceSection.append(kgLabel2);
   priceSection.append(equalLabel);
   priceSection.append(priceLabel2);

   const container = document.getElementById('contentContainer');
   container.append(contentContainerItem);

   let id = null;
   let amountKgProd = null;
   let coefficient = null;
    for(let i = 0; i< showCase.length;i++)
    {
        if(showCase[i].ProductName === titleProduct)
        {
            id = showCase[i].Id;
            amountKgProd = showCase[i].AmountKg;
            coefficient = showCase[i].Coefficient;
        }
    }

   basket.push(new Product(id,titleProduct,descrProduct,isPresent,price,amountKgProd,country,imgProduct,coefficient));
   
}


function getOnlyDigit(target)
{
    const result = String(target).replace("грн","");
    return result;
}
function getBoleanResult(item)
{
    if(item === 'Заканчивается')
    {
        return false
    };
    return true;
}
function CloseModalWindow()
{
    const basketModalWindow = document.getElementById('wrapper-modal');
    if(basketModalWindow.style.display === 'block')
    {
         basketModalWindow.style.display = 'none';
    }
   
}
function incrementOperation()
{
    this.parentElement.children[1].value ++;
    const modal = document.getElementById('wrapper-modal');
        if(modal.style.display === 'block')
        {
            getSummaCurrentProduct(this);
        }
}
function decrementOperation()
{
    if(this.parentElement.children[1].value >= 1)
    {
        Number(this.parentElement.children[1].value--);
        this.parentElement.children[1].value = Number(this.parentElement.children[1].value).toFixed(3);
        const modal = document.getElementById('wrapper-modal');
        
        if(modal.style.display === 'block')
        {
            getSummaCurrentProduct(this);
        }
        
        
    }
}
function getSummaCurrentProduct(target)
{
   if(target.type === 'input')
   {
    const container = document.getElementById('contentContainer');
    
    for(let i = 1; i < container.children.length; i++)
    {
        if(target.data === container.children[i].children[0].children[1].children[2].children[2].children[0].children[1].value)
        {
            container.children[i].children[0].children[1].children[2].children[5].textContent = Number(Number(target.data) *
            Number(getOnlyDigit(container.children[i].children[0].children[1].children[2].children[0].textContent))).toFixed(2) +'грн' ;
        }
    }
        return;
   }
        target.parentElement.parentElement.parentElement.children[5].textContent = Number(
            getOnlyDigit(target.parentElement.parentElement.parentElement.children[0].textContent) *
             target.parentElement.children[1].value ).toFixed(2) + 'грн';
}
function createId()
{
    const min = 100000;
    const max = 999999;
    let ok = false;
    
    while(ok === false)
    {
        let testInstance = Math.floor(Math.random() * (max - min) + min);
        if(showCase.length === 0)
            return testInstance;

        for(let i = 0; i < showCase.length; i++)
        {
            if(showCase[i].Id  === testInstance)
            {
                ok = false;
                break; 
            }
            ok = true;
        }
        if(ok===true)
        return testInstance;
    }
    
}
function changeBackColor()
{
    this.style.backgroundColor = '#8a0e0e';
}
function returnBackColor()
{
    this.style.backgroundColor = '#df4c54';
}
function checkExist(target)
{
    
    for (let i = 0; i < basket.length; i++) {
       if(target.parentElement.parentElement.parentElement.children[0].children[2].children[0].textContent === basket[i].ProductName)
        {
           return true;
        }
    }
}
function getTotalResultAllOrder()
{ 
    const price = document.getElementById("resultOrder");
    if(price.textContent === "0.00грн")
    {
        const noItem = document.getElementById('no-item');
        noItem.style.display ='block';
        noItem.children[1].addEventListener('click',CloseModalWindow);
    }
    else{
        const noItem = document.getElementById('no-item');
        noItem.style.display ='none';
    }
    const container = document.getElementById('contentContainer');
    if(container === null)
        return;
    let summa = 0;
    let current = 0;
    for(let i = 1; i < container.children.length; i++)
    {
        if(container.children[i].children[0].children[1].children[2].children[5].textContent != null)
        {
            const target = Number(getOnlyDigit(container.children[i].children[0].children[1].children[2].children[5].textContent)).toFixed(2);
            current = summa;
            summa = Number(current) + Number(target);
        }
       
       
    }
    const resultOrder = document.getElementById('resultOrder');
    resultOrder.textContent = Number(summa).toFixed(2)  +"грн";
    return;
}
function changeColorBasket()
{
    this.src ='images/redBasket.jpg';
    this.width='35px';
    this.height='35px';
}
function returnColorBasket()
{
    this.src ='images/basket-remove.png';
    this.width='35px';
    this.height='35px';
}
function removeFromBasket()
{
    for (let i = 0; i < basket.length; i++) {
       
        
    }
    basket = basket.filter((item)=>{item != this.parentElement.parentElement.children[0].children[1].children[0].children[0].textContent});
    console.dir(basket);
    this.parentElement.parentElement.remove();
    
   
}