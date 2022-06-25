function GetPostsData() {
    return new Promise((resolve, reject) => {
      let xmlhttpReq = new XMLHttpRequest();
      xmlhttpReq.open("GET", "https://jsonplaceholder.typicode.com/possts");
      xmlhttpReq.onreadystatechange = function () {
        if (xmlhttpReq.readyState === 4 && xmlhttpReq.status === 200) {
          resolve(xmlhttpReq.responseText);
        } else if (xmlhttpReq.readyState === 4 && xmlhttpReq.status !== 200) {
          reject("Some thing went wrong !");
        }
      };
      xmlhttpReq.send(); // places an async call
    });
  }