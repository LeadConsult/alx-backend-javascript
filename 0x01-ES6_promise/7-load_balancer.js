// This function accepts two Promises that are used to download resources from two locations.
// It returns a Promise that resolves with the result of the fastest download.
// If both downloads finish at the same time, the Promise will resolve with the result of the download from chinaDownload.
// The .then() method is used to return the resolved value of the fastest download.

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((res) => res);
  }