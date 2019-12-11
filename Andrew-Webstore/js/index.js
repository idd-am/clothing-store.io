


const clothings = [

{
name:`Vanquish Legacy`,
brand:'vanquish',
price: 38.99,
reviews: `excellent`,
img: `img/vqq1.png`

},
{
  name:`Vanquish Pullover`,
  brand:'vanquish',
  price: 90.99,
  reviews: `excellent`,
  img: `img/vqq2.png`
  },
  {
    name:`Vanquish Critical`,
    brand:'vanquish',
    price: 40.99,
    reviews: `excellent`,
    img: `img/vqq3.png`
    },
    {
      name:`Vanquish Laundered`,
      brand:'vanquish',
      price: 50.99,
      reviews: `excellent`,
      img: `img/vqq4.png`
      },
      {
        name:`Vanquish OT`,
        brand:'vanquish',
        price: 80.99,
        reviews: `excellent`,
        img: `img/vqq5.png`
        },
        {
          name:`Vanquish OT V2`,
          brand:'vanquish',
          price: 90.99,
          reviews: `excellent`,
          img: `img/vqq6.png`
          },
          {
            name:`Vanquish BF`,
            brand:'vanquish',
            price: 77.99,
            reviews: `excellent`,
            img: `img/vqq7.png`
            },
            {
              name:`Vanquish Clique`,
              brand:'vanquish',
              price: 96.99,
              reviews: `excellent`,
              img: `img/vqq8.png`
              },
              {
                name:`Vanquish Crest`,
                brand:'vanquish',
                price: 42.99,
                reviews: `excellent`,
                img: `img/vqq9.png`
                },
                {
                  name:`Vanquish Oversize V2`,
                  brand:'vanquish',
                  price: 83.99,
                  reviews: `excellent`,
                  img: `img/vqq10.png`
                  },
                  {
                  name:`Vanquish Reflective`,
                  brand:'vanquish',
                  price: 22.99,
                  reviews: `excellent`,
                  img: `img/vqq11.png`
                  },
                  {
                    name:`Vanquish Longline`,
                    brand:'vanquish',
                    price: 32.99,
                    reviews: `excellent`,
                    img: `img/vqq12.png`
                    },
                    {
                      name:`Vanquish Reflective`,
                      brand:'vanquish',
                      price: 23.99,
                      reviews: `excellent`,
                      img: `img/vqq13.png`
                      },
                      {
                        name:`Vanquish Longline Navy`,
                        brand:'vanquish',
                        price: 25.99,
                        reviews: `excellent`,
                        img: `img/vqq14.png`
                        },
                        {
                          name:`Vanquish Longline Yellow`,
                          brand:'vanquish',
                          price: 33.99,
                          reviews: `excellent`,
                          img: `img/vqq15.png`
                          },
                          {
                            name:`Vanquish Longline SP`,
                            brand:'vanquish',
                            price: 32.99,
                            reviews: `excellent`,
                            img: `img/vqq16.png`
                            },
                            {
                              name:`Vanquish Longline V2`,
                              brand:'vanquish',
                              price: 20.99,
                              reviews: `excellent`,
                              img: `img/vqq17.png`
                              },
                              {
                                name:`Vanquish Reflective V2`,
                                brand:'vanquish',
                                price: 29.99,
                                reviews: `excellent`,
                                img: `img/vqq18.png`
                                },
                                {
                                  name:`Vanquish Reflective V3`,
                                  brand:'vanquish',
                                  price: 21.99,
                                  reviews: `excellent`,
                                  img: `img/vqq19.png`
                                  },
                                  {
                                    name:`Vanquish Reflective V4`,
                                    brand:'vanquish',
                                    price: 22.99,
                                    reviews: `excellent`,
                                    img: `img/vqq20.png`
                                    },
                                  
                                  
]


function addHtmlData(clothings){
  // return `<div class="brand0">
  //     <ul>
  //         <li><h2>${clothings.name}</h2></li>
  //         <li><a href="#"> ${clothings.brand}</a></li>
  //         <li> ${clothings.reviews}</li>
  //         <li>price: ${clothings.price}</li>
  //         <div class="btn"><button class="cart-btn">add to cart</button></div>
  //     </ul>


  // </div>`;

  return `<article class="product">
  <header>
    <img src="${clothings.img}" alt="Product Image">
  </header>
  <h3>${clothings.name}</h3>
 <form>
    <fieldset>
      <legend class="colours">Colours</legend>
      <ul class="colors">
        <li><label><input type="radio" name="colour" value="r"> <span>Yellow</span></label></li>
        <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
        <li><label><input type="radio" name="colour" value="b"> <span>Blue</span></label></li>
        <li><label><input type="radio" name="colour" value="b"> <span>Black</span></label></li>
      </ul>
    </fieldset>

    <fieldset>
      <legend class="sizes">Sizes</legend>
      <ul class="size">
        <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
        <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
        <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
      </ul>
    </fieldset>

    <footer>
      <dl>
        <dt class="ratings">Rating</dt>
        <dd class="stars">4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
      </dl>
      <dl class="numbers">
      <data value="39"> <ins>${clothings.price}</ins></data>
      <button type="button" class="btn btn-default btn-sm">
        <span class="glyphicon glyphicon-shopping-cart"></span> Add to Cart

    </dl>
    </footer>
  </form>
</article>`


}


function showClothings(clothings){
  const arrayOfClothings = clothings.map (addHtmlData);
  const stringOfHtml = arrayOfClothings.join(`/n`);
  document.getElementById('clothings').innerHTML = stringOfHtml;
}

function isMatchingName(prod){
  if(prod.name.toUpperCase().includes(this.trim().toUpperCase())){
    return true;
  }
  else{
    return false;
  }
}

function searchBar(){
  const searchName = event.target.value;
  showClothings(clothings.filter(isMatchingName,searchName));
}


document.getElementById('searchName').addEventListener('input', searchBar);
showClothings(clothings);


//dropdown search
function isThisInCategory(prod){
  if(this =='all'){
    return true;

  }else if(prod.developer == this){
    return true;

  }else{
    return false;
  }
  }
function loadDevCategory(event){
  //runs everytime drop down change
  const categoryChose = event.target.value;
  //console.log(categorychose);
  showClothings(clothings.filter(isMatchingName,categoryChose));
}

document.getElementById('developerCategory').addEventListener('change',loadDevCategory);







