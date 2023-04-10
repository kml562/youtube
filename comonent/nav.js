const navbar =() =>{
    return  ` 
    <header class="header">

    <div class="logo left">
    <i id="menu" class="material-icons">menu</i>
    <img src="https://www.freecodecamp.org/news/content/images/2022/01/yt-logo.png">
  </div>
  
  <div class="search center">
    <form action="">
      <input type="text" placeholder="Search" />
      <button><i class="material-icons">search</i></button>
    </form>
    <i class="material-icons mic">mic</i>
  </div>
  
  <div class="icons right">
    <i class="material-icons">videocam</i>
    <i class="material-icons">apps</i>
    <i class="material-icons">notifications</i>
    <i class="material-icons display-this">account_circle</i>
  </div>
  
  </header>   
    `
};
export {navbar};