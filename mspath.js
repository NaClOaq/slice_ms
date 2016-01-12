(function(){
$("#form_frame").ready(function(){

  function replacePath(elm){
    var text = elm.val();
    elm.val(text.replace(/^.*?\/ms\//,'/ms/'));
  }

  $("#form_frame").contents().find("body").on('blur','input',function(){
    var self = $(this);
    chrome.extension.sendRequest({"action": "getIco"}, function(response) {
      if(response == 'on.png'){
        replacePath(self);
      }
    });
  });

});
})()


