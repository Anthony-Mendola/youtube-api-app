$(document).ready(function() {

  var key = "AIzaSyCZXzS7cfbXMrMckZPZMXEcx5emqmLmaME";
  var playlistId = "PLTFCM8gfGxuGSKCOxzFTg8TMhn1b7CeML";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: 'snippet',
    key: key,
    maxResults: 20,
    playlistId: playlistId
  }

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function(data){
      console.log(data)
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop();
    })
  }

  function mainVid(id) {
    $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
  }

  function resultsLoop() {

    $('main').html(`<article>
      <img src="https://i.imgur.com/BhRFjf4.jpg" alt="" class="thumb">

      <div class="details">
        <h4>Title</h4>
        <p>Description</p>
      </div>
    </article>
      `)

  }

});
