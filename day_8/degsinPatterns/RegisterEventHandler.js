function RegisterEventHandler(theObject, theEvent, theHandler) {
    if (window.addEventListener) {
      theObject.addEventListener(theEvent, theHandler);
    } else if (window.attachEvent) {
      theObject.attachEvent(theEvent, theHandler);
    } else {
      // btn.onclick = Handler;  OR btn["onclick"] = Handler
      theObject["on" + theEvent] = theHandler;
    }
  }