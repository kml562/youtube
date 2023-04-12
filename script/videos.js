import { navbar } from "../comonent/nav.js";
import { side } from "../comonent/side.js";
// import { check } from "../check.js";
let nav = document.getElementById("navbarr");
let sidebar = document.getElementById("sidedata");

nav.innerHTML = navbar();
sidebar.innerHTML = side();
const formdata = document.getElementById("form_data");
formdata.onclick = (event) => {
  event.preventDefault();
};

let searchbuttonn = document.getElementById("searchbutton-nav");
searchbuttonn.onclick = () => {
  console.log("Searching...");
  searchvideo();
};

const searchvideo = async () => {
  try {
    const apiKey="AIzaSyCMK0pW_72rqVTygUXt3PMiYq_xtK6bbcc"
    let serach = document.getElementById("serach_term").value;
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${serach}&key=${apiKey}`
    );
    let data = await res.json();
    let adata = data.items;
    appendfunction(adata);
    console.log(adata);
  } catch (error) {
    console.log(error);
  }
};

const contanier = document.getElementById("contanier");


const appendfunction = (arr) => {
  contanier.innerHTML = null;
  arr.forEach(({ snippet, id: { videoId } }) => {


    let videoscontanier= document.createElement("div");
    videoscontanier.className= "video-container"
    videoscontanier.innerHTML= `
    <div class="video">
        <img src=${snippet.thumbnails.high.url} class="thumbnail" alt="">
        <div class="content">
            <img src="https://lh3.googleusercontent.com/ogw/AOLn63EwPLaH-qxaoQYRb75CjCR5AI9UrfEzsK5-f6-S=s64-c-mo" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${snippet.title}</h4>
                <p class="channel-name">${snippet.channelTitle}</p>
            </div>
        </div>
    </div>`
contanier.append(videoscontanier)
    div.addEventListener("click", function () {
      newpage(snippet, videoId);
    });
    contanier.append(div);
  });
};

const newpage = (snippet, videoId) => {
  //    window.location.replace("./video.html")
  let data = {
    snippet,
    videoId,
  };
  data = JSON.stringify(data);
  localStorage.setItem("clickedvideo", data);
  window.location.href = "../videos.html";
};

// ============================================================================================================/////

let body= document.querySelector("body");
body.onload=()=>{
    showvideos()
}

const showvideos=()=>{
    let data=localStorage.getItem("clickedvideo")
    let {videoId,snippet} = JSON.parse(data);
    console.log(snippet)

let iframe= document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${videoId}`
iframe.width="100%";
iframe.height="100%";
iframe.setAttribute('allowfullscreen',true)

let vidDiv= document.getElementById("container")

let details= document.getElementById("video_details")
let div= document.createElement("div");
let p_title= document.createElement("h4")
p_title.innerText= snippet.title
let p_channelName= document.createElement("h2")
p_channelName.innerText= snippet.channelTitle;
let thumbail= document.createElement("img")
thumbail.src= snippet.thumbnails.high.url;
div.append(p_title,p_channelName)
details.append(div)
vidDiv.append(iframe)
}