$(document).on('pageshow', '#supervisor_list_view', function(){  
//alert("supervisor_list_view");
$('#listshow').empty();
//alert("supervisor_list_view");

      $(document).off('click', '#dashboarda').on('click', '#dashboarda', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false });
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

            superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array_array"));
              inprogressArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_inprogress_veri_array_array"));

    addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
    educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));

//alert(superArray_array);

var new_veri=superArray_array;
//alert(new_veri);
if( new_veri !== null){

		for(a=0;a<superArray_array.length;a++){
			super_obj = superArray_array[a];
    // alert(super_obj.verification_user_id+'superArray');
var sup=super_obj.name;

if( typeof sup !== 'undefined'){
//alert(super_obj.city_name)
var list='<div class="ui-grid-a" > <div class="ui-block-a grid_2" style="margin-top: 16px;"><h2 class="h2_text">Name:'+super_obj.name+'</h2> <p>'+super_obj.verification_for+'</p><p>'+super_obj.qualification_name+'</p></div> <div class="ui-block-b grid_3" style="margin-top: 25px;">  <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextp('+a+')">'+super_obj.verification_user_id+'View Details</a><br></div> </div><hr>'
//var table='<tr><th><br></th><td class="title"><a href="" data-rel="external">Name:'+super_obj.name+'</a></td> <td>Name:'+super_obj.name+'</td><td>Assigned On:'+super_obj.assigned_on+'</td> <td>verification Category:'+super_obj.verification_for+'</td><td>Qualification Name:'+super_obj.qualification_name+'</td><td><a href="#" class="ui-btn ui-corner-all ui-shadow submit-button" onclick="callnextp('+a+')">'+super_obj.verification_user_id+'View Details</a></td></tr><br> '
$('#listshow').append(list);

 }
      //var img='<img src="http://115.118.113.83/fish_web/images/'+usera_obj.image+'">'
      // $('#image').append(img);
        
}
 
 }

var inpro_veri=inprogressArray_array;
//alert(inpro_veri);
 if( inpro_veri !== null){

    for(a=0;a<inprogressArray_array.length;a++){
      inpro_obj = inprogressArray_array[a];
    // alert(super_obj.verification_user_id+'superArray');
var sup_inprogress=inpro_obj.name;

if( typeof sup_inprogress !== 'undefined'){
//alert(super_obj.city_name)
var list='<div class="ui-grid-a" > <div class="ui-block-a grid_2" style="margin-top: 16px;"><h2 class="h2_text">Name:'+inpro_obj.name+'</h2> <p>'+inpro_obj.verification_for+'</p><p>'+inpro_obj.qualification_name+'</p></div> <div class="ui-block-b grid_3" style="margin-top: 25px;">  <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextinprogress('+a+')">'+inpro_obj.verification_user_id+'View Details</a><br></div> </div><hr>'
//var table='<tr><th><br></th><td class="title"><a href="" data-rel="external">Name:'+super_obj.name+'</a></td> <td>Name:'+super_obj.name+'</td><td>Assigned On:'+super_obj.assigned_on+'</td> <td>verification Category:'+super_obj.verification_for+'</td><td>Qualification Name:'+super_obj.qualification_name+'</td><td><a href="#" class="ui-btn ui-corner-all ui-shadow submit-button" onclick="callnextp('+a+')">'+super_obj.verification_user_id+'View Details</a></td></tr><br> '
$('#listshow').append(list);

 }
      //var img='<img src="http://115.118.113.83/fish_web/images/'+usera_obj.image+'">'
      // $('#image').append(img);
        
}
 
 }
  
});



function callnextp(index){

 

//if($qualification == '12' || $qualification == '13' || $qualification == '14' || $qualification == '15'){

         for(a=0;a<addressid_records_array.length;a++){
      address_obj = addressid_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_obj = superArray_array[index];
      h =address_obj.user_id;
      proff_type_id=address_obj.proof_type_id;
      //alert(proff_type_id+'proff_type_id');
      g =super_obj.verification_user_id;
      //alert(g+'gg');
if( h == g ){
address_obj = addressid_records_array[a];
//alert(employ_ob.user_id+'emppppppppp');
}

    }
//}

 //if($qualification == '1' || $qualification == '2' || $qualification == '3' || $qualification == '4' || $qualification == '5' || $qualification == '6'){
      for(a=0;a<educational_records_array.length;a++){
      eductional_obj = educational_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_obj = superArray_array[index];
      h =eductional_obj.user_id;
      //alert(h+'hh');
      g =super_obj.verification_user_id;
      //alert(g+'gg');
if( h == g ){
eductional_obj = educational_records_array[a];
//alert(eductional_obj.user_id+'emppppppppp');
}

    }
  //}

         sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_obj));
         sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_obj));
          //sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_obj));
          sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
          //alert("alert 3 ");
          //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
      $.mobile.changePage($('#supervisor_view_inside'), { transition: "slide", changeHash: true, reverse: false });
          return false;

    
        }

function callnextinprogress(index){

 

//if($qualification == '12' || $qualification == '13' || $qualification == '14' || $qualification == '15'){

         for(a=0;a<addressid_records_array.length;a++){
      address_inpro_obj = addressid_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_inpro_obj = inprogressArray_array[index];
      h =address_inpro_obj.user_id;
      alert(h+'super_inpro_obj');
      proff_type_id=address_inpro_obj.proof_type_id;
      //alert(proff_type_id+'proff_type_id');
      g =super_inpro_obj.verification_user_id;
      alert(g+'super_inpro_obj');
if( h == g ){
  alert(g+'super_inpro_obj'+h);
address_inpro_obj = addressid_records_array[a];
alert(address_inpro_obj.user_id+'emppppppppp');
}

    }
//}

 //if($qualification == '1' || $qualification == '2' || $qualification == '3' || $qualification == '4' || $qualification == '5' || $qualification == '6'){
      for(a=0;a<educational_records_array.length;a++){
      eductional_inpro_obj = educational_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_inpro_obj = inprogressArray_array[index];
      h =eductional_inpro_obj.user_id;
      //alert(h+'hh');
      g =super_inpro_obj.verification_user_id;
      //alert(g+'gg');
if( h == g ){
eductional_inpro_obj = educational_records_array[a];
//alert(eductional_obj.user_id+'emppppppppp');
}

    }
  //}

         sessionStorage.setItem("currentobja_addressid_inpro",JSON.stringify(address_inpro_obj));
         sessionStorage.setItem("currentobj_educational_inpro",JSON.stringify(eductional_inpro_obj));
          //sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_obj));
          sessionStorage.setItem("currentobj",JSON.stringify(super_inpro_obj));
          //alert("alert 3 ");
          //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
      $.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
          return false;

    
        }