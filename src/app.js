//create album class
//constructor for album

//create UI class, what does the UI look like? Methods for changing UI + displaying albums
//1.display album
//2.clear our input field method
//3.delete album method

class Album {
  //class declaration
  constructor(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  }
}

class UI {
  addAlbumtoList(album) {
    let html = `<div class="display-album flex-row"><div class="display-title">%title%</div><div class="display-artist">%artist%</div><div class="display-cover"><img src="%url%" alt=""></div><div class="remove-album">Remove Album X</div>`;
    let newHtml = html.replace("%title%", album.title);
    newHtml = newHtml.replace("%artist%", album.artist);
    newHtml = newHtml.replace("%url%", album.url);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }

  clearField() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("url").value = "";
  }
}

//event listener for the form, control flow, init function
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //get values from user
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const url = document.getElementById("url").value;
  //instantiate or get new instance of album
  const album = new Album(title, artist, url);
  const ui = new UI();
  ui.addAlbumtoList(album);
  ui.clearField();
});
