var largeArray = [];
// 1. No access to window/document
// 2. No access to storageAPI except IndexedDB
// 3. No access to global variables
// 4. Access to XMLHttpRequest | fetch

console.log(this); // DedicatedWorkerGlobalScope

onmessage = function (e) {
  console.log(e.data);

  for (let i = 0; i < 8000; i++) {
    largeArray[i] = [];
    for (let j = 0; j < 4000; j++) {
      largeArray[i][j] = Math.random();
    }
  }
  postMessage(largeArray[2000][2000]);
};