$(function(){
  $("#save").click(function () {
    localStorage["find"] = $("#find").val();
    localStorage["replace"] = $("#replace").val();
    localStorage["regexp"] = $("#regexp").prop('checked');
  });


  // オプション画面の初期値を設定する
  if (localStorage["find"]) {
    $("#find").val(localStorage["find"]);
  }
  if (localStorage["replace"]) {
    $("#replace").val(localStorage["replace"]);
  }
  if (localStorage["regexp"]) {
    if(localStorage["regexp"] == 'true'){
      $("#regexp").prop("checked",true);
    };
    if(localStorage["regexp"] == 'false'){
      $("#regexp").prop("checked",false);
    };
  }


});

