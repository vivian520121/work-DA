//function turnpage(url) {  
//  var url0 = document.URL;  
//  var num = url0.indexOf('?');  
//  var oldurl;  
//  if(num == -1) {  
//      oldurl = url0;  
//  } else {  
//      oldurl = url0.slice(0, num);  
//  }  
//  var newurl = oldurl + '?' + url;  
//  history.pushState(null, null, newurl);  
//  var ajaxurl = url + '.html'  
//  $.ajax({  
//      type: "post",  
//      url: 'template/hierarchy.html',  
//      success: function(html) {  
//          $('right-content').html(html);  
//      }  
//  });  
//}
$(document).on("click","a.nav-link",function(e){

e.preventDefault();

var $this=$(this);

$.get($this.attr("href"),null,function(res){

$("#right-content").empty().html(res);

});
debugger
});