(function(){


// ローカルストレージが設定されていない場合は初期化する。
if (localStorage['icon'] === undefined) {
  localStorage['icon'] = 'on.png';
}
// 起動時にローカルストレージの値を見てアイコンを設定する。
chrome.browserAction.setIcon({path:localStorage['icon']});
// アイコンがクリックされた場合、ローカルストレージを変更して、アイコンも変更する。
chrome.browserAction.onClicked.addListener(function(tab) {
  if (localStorage['icon'] === 'off.png') {
    localStorage['icon'] = 'on.png'
  } else {
    localStorage['icon'] = 'off.png'
  }
  chrome.browserAction.setIcon({path:localStorage['icon']});
});

chrome.extension.onRequest.addListener(
   function(request, sender, sendResponse) {
      switch(request.action) {
         case 'getIco':
         console.log(getIcoFromStorage());
            sendResponse(getIcoFromStorage());
            break;
      }
   }
);
function getIcoFromStorage() {
    return getItem('icon');
}
function getItem(key) { return getStorage().getItem(key); }
function setItem(key, map) { return getStorage().setItem(key, map); }
function removeItem(key) { return getStorage().removeItem(key); }
function getStorage() { return window.localStorage; }

})()