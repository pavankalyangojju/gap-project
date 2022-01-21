//-------------sizes animation-------------->
const viewSizes = (input) => {
    document.getElementById('regular').style = "font-weight: 400; text-decoration: unset;";
    document.getElementById('tall').style = "font-weight: 400; text-decoration: unset;";
    document.getElementById('petite').style = "font-weight: 400; text-decoration: unset;";
    document.getElementById(input).style = "font-weight: 600; text-decoration: underline;";

}


//------------sizes in circles animation-------------->

const changeBack = (input) => {
  document.getElementById('xxs').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
  document.getElementById('xs').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
  document.getElementById('s').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
  document.getElementById('m').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
  document.getElementById('l').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
  document.getElementById('xl').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
  document.getElementById('xxl').style = "background-color: white; color: rgb(68, 65, 65); font-weight: 400";
  document.getElementById(input).style = "background-color: #00255a; color: white; font-weight: 600";
  
}


var product = JSON.parse(localStorage.getItem("single_product")) || []
console.log("product:", product);

var {name, price, color, image, image1, image2, image3} = product;


//<--------------function for product details display---------------->

const display = ({name, price, color, image, image1, image2, image3} = product) => {
  
  console.log('name: ',name);
  //title
  document.getElementById('title').textContent = name;

  console.log("price: ",price);
  //discounted price
  document.getElementById('discount_price').textContent = price;
  
  console.log("color: ",color);
   //color
   document.getElementById('prod_color').textContent = color;

  //images
  console.log("images: ");
  console.log(image, image1, image2, image3);
  let imgDiv = document.getElementById('prod_imgs');

  
      var img = document.createElement("img")
      img.setAttribute("src", image)
      img.setAttribute("class", 'display_img')

      var img1 = document.createElement("img")
      img1.setAttribute("src", image1)
      img1.setAttribute("class", 'display_img')

      var img2 = document.createElement("img")
      img2.setAttribute("src", image2)
      img2.setAttribute("class", 'display_img')

      var img3 = document.createElement("img")
      img3.setAttribute("src", image3)
      img3.setAttribute("class", 'display_img')

   imgDiv.append(img, img1, img2, img3)

}

display();


//<--------------function for product details display---------------->

var cartArray = [];


const addToBag = ({name, price, image} = product) => {
    document.getElementById('removePopup').style.display = 'flex';

    document.getElementById('coImg').src = image;

    document.getElementById('coTitle').textContent = name;

    document.getElementById('coPriceDiscounted').textContent = price;
    

    cartArray.push(product);
    console.log('cartArray', cartArray);

    document.getElementById('cartQty').textContent = cartArray.length;

    //<--------------calculating the total cart value---------------->
    var total = 0;
    for(let t=0; t<cartArray.length ; t++){
            
        let p = cartArray[t].price;
        p = price.split("")
        p.shift();
        p = +p.join("")
        console.log(p);

        total += p 
    }
    document.getElementById('totalAmt').textContent = '$'+total.toFixed(2);

    localStorage.setItem("cartArray",JSON.stringify(cartArray));
}


//<--------------function to remove popup---------------->
document.getElementById("crosS").onclick=()=>{
    document.getElementById('removePopup').style.display = 'none';
}

document.getElementById("keepShopBtn").onclick=()=>{
    document.getElementById('removePopup').style.display = 'none';
}


//<--------------go to chechout page---------------->
document.getElementById("coBtn").onclick=()=> {
    window.location.href = "./checkOut.html";
}

