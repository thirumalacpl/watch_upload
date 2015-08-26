		$(document).on('pagecreate', '#supervisor_view', function(){  
alert("superpagee");
$('#supertable').empty();
   /* $.mobile.changePage.defaults.reloadPage = true;*/
   //$('#superpag').empty();
		superArray = 	JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
    //employment_upload_array =  JSON.parse(sessionStorage.getItem("employment_upload_array"));
    addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
    educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));
  /*  view_assigned_address_download_array =  JSON.parse(sessionStorage.getItem("view_assigned_address_download_array"));*/





		for(a=0;a<superArray.length;a++){
			super_obj = superArray[a];
     //alert(super_obj.verification_user_id+'superArray');
var sup=super_obj.name;
//alert(sup);
/*var table_h=' <tr><th data-priority="1">Rank</th><th style="width:40%">Movie Title</th><th data-priority="2">Year</th><th data-priority="3"><abbr title="Rotten Tomato Rating">Rating</abbr></th>  <th data-priority="4">Reviews</th><th data-priority="4">Director</th></tr>'
$('#supertableh').append(table_h);
var table='<tr><th>1</th><td class="title"><a href="" data-rel="external">Citizen Kane</a></td> <td>1941</td><td>100%</td> <td>74</td><td>Orson Welles</td></tr> '
$('#supertable').append(table);*/
if( typeof sup !== 'undefined'){
//alert(super_obj.city_name)
var table='<tr><th><br></th><td class="title"><a href="" data-rel="external">Name:'+super_obj.name+'</a></td> <td>Name:'+super_obj.name+'</td><td>Assigned On:'+super_obj.assigned_on+'</td> <td>verification Category:'+super_obj.verification_for+'</td><td>Qualification Name:'+super_obj.qualification_name+'</td><td><a href="#" class="ui-btn ui-corner-all ui-shadow submit-button" onclick="callnextp('+a+')">'+super_obj.verification_user_id+'View Details</a></td></tr><br> '
$('#supertable').append(table);

 }
      //var img='<img src="http://115.118.113.83/fish_web/images/'+usera_obj.image+'">'
      // $('#image').append(img);
        
}
 
  
});



function callnextp(index){

 

//if($qualification == '12' || $qualification == '13' || $qualification == '14' || $qualification == '15'){

         for(a=0;a<addressid_records_array.length;a++){
      address_obj = addressid_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_obj = superArray[index];
      h =address_obj.user_id;
      proff_type_id=address_obj.proof_type_id;
      //alert(proff_type_id+'proff_type_id');
      g =super_obj.verification_user_id;
      //alert(g+'gg');
if( h == g ){
address_obj = addressid_records_array[a];
alert(address_obj.user_id+'emppppppppp');
}

    }
//}

 //if($qualification == '1' || $qualification == '2' || $qualification == '3' || $qualification == '4' || $qualification == '5' || $qualification == '6'){
      for(a=0;a<educational_records_array.length;a++){
      eductional_obj = educational_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_obj = superArray[index];
      h =eductional_obj.user_id;
      //alert(h+'hh');
      g =super_obj.verification_user_id;
      //alert(g+'gg');
if( h == g ){
eductional_obj = educational_records_array[a];
alert(eductional_obj.user_id+'educational_records_array'+g);
}

    }
  //}

 //if($qualification == '7' || $qualification == '8' || $qualification == '9' || $qualification == '10' || $qualification == '11'){
 
/* impo*/
/*
 for(a=0;a<employment_upload_array.length;a++){
      employ_obj = employment_upload_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_obj = superArray[index];
      h =employ_obj.verification_master_id;
      //alert(h+'hh');
      g =super_obj.verification_user_id;
      //alert(g+'gg');
if( h == g ){
employment_obj = employment_upload_array[a];
//alert(employ_ob.user_id+'emppppppppp');
}

    }*/
/* impo*/

   

//}     
             //super=superArray[index.verification_user_id];
    
   // alert(super);

         //alert(super_obj.verification_user_id+'superArray')
          //employ_obj = addressid_records_array[index];
           //alert(employ_obj.user_id +'superaaray');
          //usera_obj = employment_upload_array[index];
          //alert(usera_obj.verification_user_id);
         sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_obj));
         sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_obj));
          //sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_obj));
          sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
          //alert("alert 3 ");
          //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
      $.mobile.changePage($('#supervisor_view_inside'), { transition: "slide", changeHash: true, reverse: false });
          return false;

    
        }