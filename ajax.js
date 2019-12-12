function ajax(url, fnSucc, fnFaild) {
  // 1. Create ajax
  if(window.XMLHttpRequest) {
    var oAjax = new XMLHttpRequest();
  } else {
    var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 2. Connect to server 
  oAjax.open('GET', url, true);

  // 3. Send
  oAjax.send();

  // 4. Receive
  oAjax.onreadystatechange = function() {
    if(oAjax.readyState == 4) {
      if(oAjax.status == 200) {
        // alert('Success:' + oAjax.responseText);
        fnSucc(oAjax.responseText);
      } else {
        // alert('Fail:' + oAjax.responseText);
        if(fnFaild) {
          fnFaild();
        }
      }
    }
  }
}