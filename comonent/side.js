const side=()=>{
    return `
    <div class="nav">
    <a class="nav-link active">
       <i class="material-icons">home</i>
       <span>Home</span>
    </a>
    <a class="nav-link">
      <a class="nav-link">
          <i class="material-icons">library_add_check</i>
          <span>Library</span>
       </a>
       <a class="nav-link">
          <i class="material-icons">history</i>
          <span>History</span>
       </a>
       <a class="nav-link">
          <i class="material-icons">play_arrow</i>
          <span>Your Videos</span>
       </a>
       <a class="nav-link">
          <i class="material-icons">watch_later</i>
          <span>Watch Later</span>
       </a>
       <a class="nav-link">
          <i class="material-icons">thumb_up</i>
          <span>Liked Videos</span>
       </a>
    </a>
    <a class="nav-link">
       <i class="material-icons">subscriptions</i>
       <span>Subscriptions</span>
    </a>
  </div>
  <hr>
    `
}
export {side};