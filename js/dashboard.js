		$(document).on('pageshow', '#dashboard', function(){  
      
//alert("dashboard");

  regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));

		new_verification_count_array = 	JSON.parse(sessionStorage.getItem("new_verification_count_array"));
    supervisor_inprogress_count_array =  JSON.parse(sessionStorage.getItem("supervisor_inprogress_count_array"));
    supervisor_verified_count_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_count_array"));

superArray =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

//alert(superArray);
    for(a=0;a<superArray.length;a++){
      super_obja = superArray[a];
//alert(super_obja.First_Name);
//alert(super_obja.city_name);
$("#supervisor_name").text(super_obja.First_Name);
$("#city_name").text(super_obja.city_name);
    }

//alert(regionArray_array.region);
var region=regionArray_array.region;
 //alert(region);
 $(document).off('click', '#new_verification').on('click', '#new_verification', function() {
//alert(region+'refresh');
   $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-watch/dashnewveri.php?region='+region,
                        data:$('#new').serialize(),
                        type: 'post',                   
                        async: 'true',
            crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {
                        },
                        complete: function() {
                        },
                        success: function (result) {
              console.log('searchlpa ' +result);
              if(result[0]){
                $("#popupsearchmade").popup("open");
                 //alert('Data available for the search made');
                 sessionStorage.setItem("supervisor_view_new_veri_array",JSON.stringify(result[0]));
            // alert(region+'refresh new regionArray_array');
                 $.mobile.loading().hide();
                 $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
              }else {
                alert('No Data Found for the search record'); 
              }
              
              return false;
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action     
              console.log(request);
              console.log(error);  
              
                            alert('Network error has occurred please try again!');
                        }
                    });

 });

 $(document).off('click', '#inprogress').on('click', '#inprogress', function() {
//alert(region+'inprogress');
   $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-watch/dashinprogress.php?region='+region,
                        data:$('#new').serialize(),
                        type: 'post',                   
                        async: 'true',
            crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {
                        },
                        complete: function() {
                        },
                        success: function (result) {
              console.log('searchlpa ' +result);
              if(result[0]){
                $("#popupsearchmade").popup("open");
                 //alert('Data available for the search made');
                 sessionStorage.setItem("supervisor_view_inprogress_veri_array_array",JSON.stringify(result[0]));
                  sessionStorage.setItem("activity_log_details_array",JSON.stringify(result[1]));
            // alert(region+'refresh new regionArray_array');
                 $.mobile.loading().hide();
                 $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "slide", changeHash: true, reverse: false });
              }else {
                alert('No Data Found for the search record'); 
              }
              
              return false;
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action     
              console.log(request);
              console.log(error);  
              
                            alert('Network error has occurred please try again!');
                        }
                    });

 });


 $(document).off('click', '#verified').on('click', '#verified', function() {
//alert(region+'verified');
   $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-watch/dashverified.php?region='+region,
                        data:$('#new').serialize(),
                        type: 'post',                   
                        async: 'true',
            crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {
                        },
                        complete: function() {
                        },
                        success: function (result) {
              console.log('searchlpa ' +result);
              if(result[0]){
                $("#popupsearchmade").popup("open");
                 //alert('Data available for the search made');
                 sessionStorage.setItem("supervisor_view_verified_array",JSON.stringify(result[0]));
                  //sessionStorage.setItem("activity_log_details_array",JSON.stringify(result[1]));
            // alert(region+'refresh new regionArray_array');
                 $.mobile.loading().hide();
                 $.mobile.changePage($('#supervisor_verified_list'), { transition: "slide", changeHash: true, reverse: false });
              }else {
                alert('No Data Found for the search record'); 
              }
              
              return false;
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action     
              console.log(request);
              console.log(error);  
              
                            alert('Network error has occurred please try again!');
                        }
                    });

 });

		for(a=0;a<new_verification_count_array.length;a++){
			new_count = new_verification_count_array[a];
    // alert(new_count.new_verification_count+'new_verification_count');
     $("#new_veri_count").html(new_count.new_verification_count);
}

  for(a=0;a<supervisor_inprogress_count_array.length;a++){
      inprogress_count = supervisor_inprogress_count_array[a];
     //alert(inprogress_count.supervisor_inprogress_count+'supervisor_inprogress_count');
     $("#inprogress_count").html(inprogress_count.supervisor_inprogress_count);

}

  for(a=0;a<supervisor_verified_count_array.length;a++){
      verified_count = supervisor_verified_count_array[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#verified_count").html(verified_count.supervisor_verified_count);

}

    /*$(document).off('click', '#new_verification').on('click', '#new_verification', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});*/

 

        $(document).off('click', '#not_verified').on('click', '#not_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});
        $(document).off('click', '#dashlogout').on('click', '#dashlogout', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*          $(document).off('click', '#verified').on('click', '#verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_verified_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});*/
 
  
});
