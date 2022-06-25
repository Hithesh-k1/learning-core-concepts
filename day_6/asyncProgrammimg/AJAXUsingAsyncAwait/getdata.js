function GetPostsData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(function (
      response
    ) {
      console.log("Within first then handler !");
      if (response.ok) {	
        return response.json();
      } else {
        throw new Error("Something went wrong !");
      }
    });
  }
  