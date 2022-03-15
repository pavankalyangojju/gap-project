
let cross= document.getElementById("cross")
  cross.onclick=()=>{
 let  bluediv=document.getElementById("blue");
         bluediv.remove();

  }


////////////blue div end////////////

  
  let saveItems= document.getElementById("saveItems");
    
    var data= JSON.parse(localStorage.getItem("cartArray")) || [] ;
    console.log(data);
    
    var bagItems=document.getElementById("bagItems");

   
     /////////////////  data map function  ///////////////////
    data.map((elem)=>{

      document.getElementById("priceValue").textContent = elem.price
      document.getElementById("priceValue2").textContent = elem.price
  


      let oneItem = document.createElement("div");
      oneItem.setAttribute("id","oneItem");

      let div1 =  document.createElement("div");
      div1.setAttribute("id","div1");

      let div2 =  document.createElement("div");
      div2.setAttribute("id","div2");

      let div3= document.createElement("div");
      div3.setAttribute("id","div3")

      let cross1=document.createElement("p")
      cross1.setAttribute("id","removeItem");

                cross1.onclick=()=>{
              
              //     sum=sum-(elem.price)
              //     console.log(elem.price)
                  oneItem.remove();

                  document.getElementById("priceValue").textContent = "$ 0.00"
                  document.getElementById("priceValue2").textContent = "$ 0.00"
          
                  var index=data.indexOf(elem)   
                    data.splice(index, 1 );

                    document.getElementById("shippingLength").textContent="Shipping:"+"0 items"
                  
                // console.log(data.splice(index, 1));
            
                // localStorage.setItem("cartItems", JSON.stringify(data));
                // localStorage.setItem("bill",JSON. stringify(sum));
                    
              }





    
        var index=data.indexOf(elem)   
          data.splice(index, 1 );
         
       // console.log(data.splice(index, 1));
  
      // localStorage.setItem("cartItems", JSON.stringify(data));
      // localStorage.setItem("bill",JSON. stringify(sum));
     

      let h3= document.createElement("h3")
      h3.textContent=elem.price



      
      

      let itemImg = document.createElement("img");
      itemImg.src= elem.image;
      itemImg.width="110"

      let button= document.createElement("button")
      button.textContent="SAVE FOR LATER";
      button.setAttribute("id","saveForLater");
                button.onclick=()=>{
                  oneItem.remove();
                  

                  document.getElementById("priceValue").textContent = "$ 0.00"
                  document.getElementById("priceValue2").textContent = "$ 0.00"

                  document.getElementById("shippingLength").textContent="Shipping:"+"0 items"

                  saveItems.append(oneItem);

                }
      let name= document.createElement("h4")
      name.textContent=elem.name;

      let color=document.createElement("p")
      color.textContent="Color :"+elem.color;

      let size= document.createElement("p")
      size.textContent="Size: S"

     var price= document.createElement("p");
     price.textContent="Price: "+elem.price;

     
   
     div1.append(itemImg, button)
     div2.append(name, color, size, price)
     div3.append(cross1, h3)
     oneItem.append(div1,div2,div3);
     bagItems.append(oneItem)


    
    })
  
  
    // priceValue.textContent="$"+sum.toFixed(2); ;
    

    // priceValue2.textContent="$"+sum.toFixed(2); ;
    

    


    document.getElementById("shippingLength").textContent="Shipping:"+"1 items"


////////////////promo code////////////////////
    document.getElementById("promoBtn").addEventListener("click" , function(){ 
         var promo=document.querySelector("#promo-input").value
         
           if(promo=="masai30"  ){
             let p = document.getElementById("priceValue2").textContent
            
            p = p.split("")
            p.shift();
            p = +p.join("")
            console.log(p);
    
            
           
           p =(p-((p*30))/100)
           p = p.toFixed(2)
           console.log(p)

           localStorage.setItem("bill",JSON. stringify(p));
           document.getElementById("priceValue").textContent = "$ "+p 
          document.getElementById("priceValue2").textContent = "$ "+p 
                   
        
        
           }              
     });
   
    
////////////////best sellers///////////////
var span= document.getElementsByTagName('span');
    var div= document.getElementsByClassName('col-md-12');
    var l=0;
    span[1].onclick=()=>{
        l++;
        console.log("h")

        for(var i of div)
        {
            if(l==0){i.style.left="0px";}
            if(l==1){i.style.left="-300px";}
            if(l==2){i.style.left="-600px";}
            if(l==3){i.style.left="-900px";}
            if(l==4){i.style.left="-1200px";}
            if(l==5){i.style.left="-1600px";}
            if(l>6){l=6;}

        }
    }
    span[0].onclick=()=>{
        l--;
        console.log("h")

        for(var i of div)
        {
            if(l==0){i.style.left="0px";}
            if(l==1){i.style.left="-300px";}
            if(l==2){i.style.left="-600px";}
            if(l==3){i.style.left="-900px";}
            if(l==4){i.style.left="-1200px";}
            if(l==5){i.style.left="-1600px";}
            if(l<0){l=0;}

        }
    }
//////////best seller end////////////

const goToPayment=()=>{
  window.location.href = "./payment.html"
}