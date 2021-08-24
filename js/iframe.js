function updateiframesrc() {
  var loc = window.location.toString(),
  params = loc.split('?')[1],
  iframe = document.getElementById('iFrameResizer1');
  console.log(params);

  iframe.src = iframe.src + '?' + params;
}
