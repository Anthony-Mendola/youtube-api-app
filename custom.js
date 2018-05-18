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
      mainVid();
    })
  }

  function mainVid() {
    $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/3AkjzDHuWKM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `);
  }

});
