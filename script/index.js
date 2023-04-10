import { navbar } from "../comonent/nav.js";
import{side} from "../comonent/side.js";

let nav= document.getElementById("navbarr");
let sidebar= document.getElementById("sidedata")

nav.innerHTML=navbar();
sidebar.innerHTML=side();
let searchbutton= document.getElementById("searchbutton");
searchbutton.onclick =()=>{
    searchvideo()
}
const searchvideo = async() =>{
try{
const apiKey= "AIzaSyAud_K4GUIUosvr-C5aPniZfpa0FlW4G5M";
let serach= document.getElementById("serach_term").value;
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${serach}&key=${apiKey}`);
let data= await res.json();
let adata= data.items;
appendfunction(adata);
console.log(adata);
}
catch(error){
console.log(error);
};


}
const contanier= document.getElementById("contanier");
const appendfunction= (arr)=>{
    contanier.innerHTML= null;
    arr.forEach(({snippet , id:{videoId}}) => {
    let div= document.createElement("div");
       let p_title= document.createElement("p")
       p_title.innerText= snippet.title
       let p_channelName= document.createElement("p")
       p_channelName= snippet.channelTitle;
       let thumbail= document.createElement("img")
       thumbail.src= snippet.thumbnails.high.url;
       div.append(thumbail,p_title,p_channelName)
       div.addEventListener("click",function(){
        newpage(snippet,videoId)
       })
       contanier.append(div)
      
    })
   }
   
   
  const newpage = (snippet,videoId) =>{
//    window.location.replace("./video.html")
let data= {
    snippet,
    videoId, 
} 
data = JSON.stringify(data);
localStorage.setItem("clickedvideo",data);
window.location.href='./video.html';
   }