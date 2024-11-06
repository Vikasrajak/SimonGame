
 let gemeSeq =[];
 let userSeq = [];

  let started = false;
 let level = 0;

   let btns = ["red","yellow","purple","green"];
 
  let h2 = document.querySelector("h2");    

 document.addEventListener("keypress",function(){
     if(started == false){
        console.log("Gage  started");
        started = true;
     }
     levelUP();
 })

   function btnflash(btn){
      btn.classList.add("flash");
      setTimeout(function(){
        btn.classList.remove("flash");
      },250);
   } 

   function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
 } 

   function levelUP(){
     level++;
     h2.innerText = `Level is ${level}`;
    
     let randInxd = Math.floor(Math.random()*3);
     let randColor = btns[randInxd];

      let randBtn = document.querySelector(`.${randColor}`);
      btnflash(randBtn);
       
        gameSeq.push(randColor);
        console.log(gameSeq);
   }

    function btnPress(){
        console.log(this);
        let btn = this;
      userflash(btn);
    }

    let allbtn = document.querySelectorAll(".btn");

    for(btn of allbtn){
        btn.addEventListener("click",btnPress)
    }















//     let url = 'https://dog.ceo/api/breeds/image/random';

//  let btn = document.querySelector("button");
//   let img = document.querySelector(".fact");


//    btn.addEventListener("click",async()=>{
//            let link =  await  getimage();
          
//          img.setAttribute("src",link);
            
//    })

   
//    async function getimage(){
     
//     try{
//         let res = await axios.get(url);
//          return  res.data.message;
//     }catch(error){
  
//          return " NO image found";
//     }
     
//    }
