window.appRootDirName = "prijava_ispita";
document.addEventListener("deviceready", onDeviceReady, false);
 
function onDeviceReady() {
console.log("device is ready");
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}
 
function fail() {
console.log("failed to get filesystem");
}
 
function gotFS(fileSystem) {
console.log("filesystem got");
window.fileSystem = fileSystem;
fileSystem.root.getDirectory(window.appRootDirName, {
create : true,
exclusive : false
}, dirReady, fail);
}
 
function dirReady(entry) {
window.appRootDir = entry;
console.log("application dir is ready");
}
 
 
downloadFile = function(){
var fileTransfer = new FileTransfer();
 
var url = "http://qa.etf.unssa.rs.ba/univ/statut.pdf";
var filePath = window.appRootDir.fullPath + "/test.pdf";
fileTransfer.download(
url,
filePath,
function(entry) {
alert("download complete: " + entry.fullPath);
},
function(error) {
alert("download error" + error.source);
}
);
}
