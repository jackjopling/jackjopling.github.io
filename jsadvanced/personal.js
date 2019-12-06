var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);

$('.Rotated_Img').each(function(){
  $(this).css('width', $(this).parent().height() + 'px');
  $(this).css('height', $(this).parent().width() + 'px');
});