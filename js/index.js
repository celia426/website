$(document).ready(function(){
 
   function fnTab(oTab,aCon){
   		var aLi = oTab.children();
   		aCon.hide().eq(0).show();

   		aLi.each(function(index){
   			$(this).click(function(){
   				aLi.removeClass("active").addClass("gradient");
   				$(this).removeClass("gradient").addClass("active");

   				aCon.hide().eq(index).show();
   			})
   		})
   }

   fnTab($(".tab1"),$(".con1"));
   fnTab($(".tab2"),$(".con2"));

   var btn = $("section a");
   var img = $(".photo ul li img");
   btn.each(function(index){
      $(this).click(function(){
         img.attr("src","img/photo/"+index+".jpg");
      });
   })

});