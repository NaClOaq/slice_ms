(function(){
function getClickHandler() {
  return function(info, tab) {
    if(localStorage["regexp"] == 'true'){
      var find = new RegExp( localStorage["find"], "g" );
      var url = info.linkUrl.replace(find,localStorage["replace"]);
      console.log(info.linkUrl);
    }else{
      var url = info.linkUrl.split(localStorage["find"]).join(localStorage["replace"]);
    };
    console.log(url);
    saveToClipboard(url);
  };
};


function saveToClipboard(str) {
  var textArea = document.createElement("textarea");
  textArea.style.cssText = "position:absolute;left:-100%";

  document.body.appendChild(textArea);

  textArea.value = str;
  textArea.select();
  document.execCommand("copy");

  document.body.removeChild(textArea);
}


var parentId = chrome.contextMenus.create({
  "title" : "Replace Copy",
  "type" : "normal",
  "contexts" : ["link"],
  "onclick" : getClickHandler()
})

})();