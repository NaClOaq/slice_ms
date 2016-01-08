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




})()