		$(document).on('pagecreate', '#dashboard', function(){  
alert("dashboard");

  
		new_verification_count_array = 	JSON.parse(sessionStorage.getItem("new_verification_count_array"));
    supervisor_inprogress_count_array =  JSON.parse(sessionStorage.getItem("supervisor_inprogress_count_array"));
    supervisor_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_count_array"));




/*		for(a=0;a<new_verification_count_array.length;a++){
			new_count = new_verification_count_array[a];
     alert(new_count.new_verification_count+'new_verification_count');
}

  for(a=0;a<supervisor_inprogress_count_array.length;a++){
      inprogress_count = supervisor_inprogress_count_array[a];
     alert(inprogress_count.supervisor_inprogress_count+'supervisor_inprogress_count');

}

  for(a=0;a<supervisor_verified_count_array.length;a++){
      verified_count = supervisor_verified_count_array[a];
     alert(verified_count.supervisor_verified_count+'new_verification_count');

}
*/
    $(document).off('click', '#new_verification').on('click', '#new_verification', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#inprogress').on('click', '#inprogress', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

        $(document).off('click', '#not_verified').on('click', '#not_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

          $(document).off('click', '#verified').on('click', '#verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});
 
  
});
