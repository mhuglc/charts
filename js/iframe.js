function updateiframesrc() {
  var loc = window.location.toString(),
  params = loc.split('?')[1],
  iframe = document.getElementById('myIframe');
  console.log(loc);

  iframe.src = iframe.src + '?' + params;
}
