function GetPostsData(callback) {
  //1. Create an XMLHttpRequest
  //2. Configure the request -> open(verb,url)
  //3. Send the async req (send())
  //4. onreadystatechange -> req is complete or not

  let xmlhttpReq = new XMLHttpRequest();
  xmlhttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlhttpReq.onreadystatechange = function () {
    if (xmlhttpReq.readyState === 4 && xmlhttpReq.status === 200) {
      callback(null, xmlhttpReq.responseText);
    } else if (xmlhttpReq.readyState === 4 && xmlhttpReq.status !== 200) {
      callback("Some thing went wrong !", null);
    }
  };
  xmlhttpReq.send(); // places an async call
}
