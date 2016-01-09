(function(){

  function replacePath(elm){
    var text = elm.val();
    elm.val(text.replace(/^.*?\/ms\//,'/ms/'));
  }

  $("input").focusout(function(){
    var self = $(this);
    chrome.extension.sendRequest({"action": "getIco"}, function(response) {
      if(response == 'on.png'){
        replacePath(self);
      }
    });
  });

})()