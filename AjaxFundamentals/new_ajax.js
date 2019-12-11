function ajax(url, fnSucc, fnFaild) {
  // 1. Create ajax object
  if (window.XMLHttpRequest) {
    // Non-IE6 
    var oAjax = new XMLHttpRequest();
  } else {
    // IE6
    var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
  }

  // 2. Connect to server
  // open(method, url, asynchronous)
  oAjax.open('GET', url, true);

  // 3. Send request
  oAjax.send();

  // 4. Receive message
  oAjax.onreadystatechange = function () {
    // 0 - UNSENT - Client has been created. open() not called yet.
    // 1 - OPENED - open() has been called.
    // 2 - HEADERS_RECEIVED - send() has been called, and headers and status are available.
    // 3 - LOADING - Downloading; responseText holds partial data.
    // 4 - DONE - The operation is complete.

    if (oAjax.readyState == 4) {
      if (oAjax.status == 200) {
        fnSucc(oAjax.responseText);
      } else {
        if(fnFaild) {
          fnFaild(oAjax.status);
        }
        alert('Fail: ' + oAjax.status);
      }
    }
  }
};