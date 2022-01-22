
let cross= document.getElementById("cross")
  cross.onclick=()=>{
 let  bluediv=document.getElementById("blue");
         bluediv.remove();

  }
  ////////////blue div end////////////

  
  let saveItems= document.getElementById("saveItems");
  let priceValue= document.getElementById("priceValue");
  let priceValue2= document.getElementById("priceValue2");
  // let Feedback= document.getElementById("Feedback").onclick=()=>{
      
  // };

      
    var data= JSON.parse(localStorage.getItem("cartItems")) || [] ;
         data=data[0]
    var bagItems=document.getElementById("bagItems");

    let sum=0;
   
     /////////////////  data map function  ///////////////////
    data.map((elem)=>{

     sum=sum+(+elem.price)
     console.log(sum)


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
    
        sum=sum-(elem.price)
        console.log(elem.price)
        oneItem.remove();

    priceValue.textContent="$"+sum.toFixed(2);   
  
    priceValue2.textContent="$"+sum.toFixed(2); ;
 
        var index=data.indexOf(elem)   
          data.splice(index, 1 );
         
       // console.log(data.splice(index, 1));
  
      localStorage.setItem("cartItems", JSON.stringify(data));
      localStorage.setItem("bill",JSON. stringify(sum));
          
    }
     

      let h3= document.createElement("h3")
      h3.textContent="$"+elem.price
      
      

      let itemImg = document.createElement("img");
      itemImg.src= elem.imgUrl;
      itemImg.width="110"

      let button= document.createElement("button")
      button.textContent="SAVE FOR LATER";
      button.setAttribute("id","saveForLater");
         button.onclick=()=>{
           oneItem.remove();
             
           sum=sum-(+elem.price);
           console.log(sum)

           priceValue.textContent="$"+sum.toFixed(2);   
                       
           priceValue2.textContent="$"+sum.toFixed(2);
           saveItems.append(oneItem);

           localStorage.setItem("bill",JSON. stringify(sum));

        }

      let name= document.createElement("h4").textContent=elem.name;

      let color=document.createElement("p").textContent="Color :"+elem.color;

      let size= document.createElement("p").textContent="Size:" + elem.size;

     let price= document.createElement("p");
     price.textContent="Price:"+" "+elem.strikedOffPrice +" "+ "$"+elem.price;

     
     let select= document.createElement("select");

     let op1= document.createElement("option").textContent=1;

     let op2= document.createElement("option").textContent=2;

     let op3= document.createElement("option").textContent=3;

     let op4= document.createElement("option").textContent=4;


     select.append(op1, op2, op3, op4)
 

     bagItems.append(oneItem)
     oneItem.append(div1,div2,div3);
     div1.append(itemImg, button)
     div2.append(name, color, size, price ,select)
     div3.append(cross1, h3)
    })
  
  
    priceValue.textContent="$"+sum.toFixed(2); ;
    

    priceValue2.textContent="$"+sum.toFixed(2); ;
    

    localStorage.setItem("bill",JSON. stringify(sum));


    document.getElementById("shippingLength").textContent="Shipping:" +" "+data.length+" "+"items"


    ////////////////promo code////////////////////
    document.getElementById("promoBtn").addEventListener("click" , function(){ 
         var promo=document.querySelector("#promo-input").value
         
           if(promo=="masai30"  ){
           sum=(sum-((sum*30))/100)
                   
           priceValue.textContent="$"+sum ;
    
           priceValue2.textContent="$"+sum ;
           localStorage.setItem("bill",JSON. stringify(sum));
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