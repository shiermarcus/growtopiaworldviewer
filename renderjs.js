$('#worldname').on("change", function(){
    document.getElementById('worldimage').src = `https://s3.amazonaws.com/world.growtopiagame.com/${$('#worldname').val()}.png`;
  });


  $('#downloadWorld').on("click", function downloadImage() {
    var link = document.createElement('a');
link.href = `https://s3.amazonaws.com/world.growtopiagame.com/${$('#worldname').val()}.png`;
link.download = `${$('#worldname').val()}.png`;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});