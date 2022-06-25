if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("../serviceworker.js").then(
        function () {
          console.log("Service Worker : Registered Successfully !");
        },
        function (err) {
          console.log("Service Worker Error : " + err);
        }
      );
    });
  }