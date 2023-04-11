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
    const apiKey = "AIzaSyAud_K4GUIUosvr-C5aPniZfpa0FlW4G5M";
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
let body= document.querySelector("body");
body.onload=()=>{
    suggection()
}
const suggection= async()=>{
    try {
        try {
            const apiKey = "AIzaSyAud_K4GUIUosvr-C5aPniZfpa0FlW4G5M";
            // let serach = document.getElementById("serach_term").value;
            let res = await fetch(
  ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=surfing&key=${apiKey}`
            );
            let data = await res.json();
            let adata = data.items;
            appendfunction(adata);
            console.log(adata);
          } catch (error) {
            console.log(error);
          }
    } catch (error) {
        console.log(error)
    }
}
const contanier = document.getElementById("contanier");


const appendfunction = (arr) => {
  contanier.innerHTML = null;
  arr.forEach(({ snippet, id: { videoId } }) => {
 let videoscontanier= document.createElement("div");
    videoscontanier.className= "video"
    videoscontanier.innerHTML= `
   
        <img src=${snippet.thumbnails.high.url} class="thumbnail" alt="">
        <div class="content">
            <img src="https://lh3.googleusercontent.com/ogw/AOLn63EwPLaH-qxaoQYRb75CjCR5AI9UrfEzsK5-f6-S=s64-c-mo" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${snippet.title}</h4>
                <p class="channel-name">${snippet.channelTitle}</p>
            </div>
        </div>`
contanier.append(videoscontanier)
    videoscontanier.addEventListener("click", function () {
      newpage(snippet, videoId);
    });

  });
};

// const appendfunction = (arr) => {
//   contanier.innerHTML = null;
//   arr.forEach(({ snippet, id: { videoId } }) => {
//     let div = document.createElement("div");
//     div.className = "videos";

//     let details = document.createElement("div");
//     details.className = "details";
//     let p_title = document.createElement("p");
//     p_title.innerText = snippet.title;
//     let p_channelName = document.createElement("h3");
//     p_channelName.innerText = snippet.channelTitle;
//     //    p_channelName.style="font-weight:bold";
//     let thumbail = document.createElement("img");
//     thumbail.className = "thumbnail";
//     thumbail.src = snippet.thumbnails.high.url;
//     let channelimg = document.createElement("img");
//     channelimg.id = "channelimg";
//     channelimg.src =
//       "https://yt3.ggpht.com/fP3Q09BEQukh9S-dRt_jEemdETVJWmcAkbAaHe0hn6cBOjGx5kpVSVKpn-oQbqkParC_dZE9=s88-c-k-c0x00ffffff-no-rj-mo";
//     div.append(thumbail, p_channelName, p_title);
//     div.addEventListener("click", function () {
//       newpage(snippet, videoId);
//     });
//     contanier.append(div);
//   });
// };

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



