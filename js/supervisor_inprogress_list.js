$(document).on('pageshow', '#supervisor_inprogress_list', function(){  
//alert("supervisor_inprogress_list");
$('#lis_align_inpro').empty();
//alert("supervisor_list_view");

  $(document).off('click', '#dashboardlistinpro').on('click', '#dashboardlistinpro', function() {
        //alert("sdfsdaffasf");
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

   
          $(document).off('click', '#newveriinpro').on('click', '#newveriinpro', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

   $(document).off('click', '#verifiedlistnewpro').on('click', '#verifiedlistnewpro', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_verified_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

     $(document).off('click', '#inprosign').on('click', '#inprosign', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

 superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
        //superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array_array"));
    inprogressArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_inprogress_veri_array_array"));

    addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
    educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));
    activity_log_details_array =  JSON.parse(sessionStorage.getItem("activity_log_details_array"));
      employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));

//alert(inprogressArray_array);

var inpro_veri=inprogressArray_array;


//alert('if inside');
    for(a=0;a<inprogressArray_array.length;a++){
      inpro_obj = inprogressArray_array[a];
   // alert(inpro_obj.verification_user_id+'superArray');
var sup_inprogress=inpro_obj.name;



if( typeof sup_inprogress !== 'undefined'){
//alert(super_obj.city_name)
//var list='<div class="ui-grid-a" > <div class="ui-block-a grid_2" style="margin-top: 16px;"><h2 class="h2_text">Name:'+inpro_obj.name+'</h2> <p>'+inpro_obj.verification_for+'</p><p>'+inpro_obj.qualification_name+'</p></div> <div class="ui-block-b grid_3" style="margin-top: 25px;">  <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextinprogress('+a+')">'+inpro_obj.verification_user_id+'View Details</a><br></div> </div><hr>'
//var table='<tr><th><br></th><td class="title"><a href="" data-rel="external">Name:'+super_obj.name+'</a></td> <td>Name:'+super_obj.name+'</td><td>Assigned On:'+super_obj.assigned_on+'</td> <td>verification Category:'+super_obj.verification_for+'</td><td>Qualification Name:'+super_obj.qualification_name+'</td><td><a href="#" class="ui-btn ui-corner-all ui-shadow submit-button" onclick="callnextp('+a+')">'+super_obj.verification_user_id+'View Details</a></td></tr><br> '
//$('#listshow_inprogress').append(list);
var lis='<li class="bottom-colour"><a href="#" onclick="callnextinprogress('+a+')"><h2 class="">Name:'+inpro_obj.name+'</h2> <p class="paralimit">'+inpro_obj.verification_for+'</p><p class="paralimit">'+inpro_obj.qualification_name+'</p><p class="ui-li-aside"><strong><a href="#" class="ui-btn ui-corner-all ui-icon-carat-r ui-btn-icon-notext" >Carat-r Icon</a></strong></p></a></li>'
$('#lis_align_inpro').append(lis);
//var list_align='<li><a ><h2 style="color: rgb(84, 86, 107);">Name:'+inpro_obj.name+'</h2><p>'+inpro_obj.verification_for+' </p><p>'+inpro_obj.qualification_name+'</p><p></p><p class="ui-li-aside"> <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextinprogress('+a+')">'+inpro_obj.verification_user_id+'View Details</a></p></a></li><hr>'
//$('#list_align_inpro').append(list_align);

 }
      //var img='<img src="http://115.118.113.83/fish_web/images/'+usera_obj.image+'">'
      // $('#image').append(img);
        
}

var superempty=inprogressArray_array;

if(superempty == ""){
  alert(superempty+'No record Found');
  $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false });
}

 
 for(a=0;a<superArray_array.length;a++){
      super_obja = superArray_array[a];

$("#supervisor_name_inprolist").text(super_obja.First_Name);
$("#city_name_inprolist").text(super_obja.city_name);
    }
  
});




function callnextinprogress(index){

   inpro_obj = inprogressArray_array[index];
      qualification_id =inpro_obj.type;
      //alert(inpro_obj.verification_user_id+'superArray');

//alert(qualification_id +'hw');


if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
 
         for(a=0;a<addressid_records_array.length;a++){
      address_inpro_obj = addressid_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_inpro_obj = inprogressArray_array[index];
      h =address_inpro_obj.user_id;
      //alert(h+'super_inpro_obj');
  hainpro=address_inpro_obj.proof_type_id;     
      //alert(proff_type_id+'proff_type_id');
      g =super_inpro_obj.verification_user_id;
     // alert(g+'super_inpro_obj');
if( h == g && hainpro == qualification_id ){
  //alert(h);
  //alert(g);
  //alert(hainpro);
  //alert(qualification_id);
  //alert(g+'super_inpro_obj address'+h);
address_inpro_obja = addressid_records_array[a];
//alert(address_inpro_obja.user_id+'emppppppppp last address passed'+address_inpro_obja.proof_type_id);
}

    }
}
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){

      for(a=0;a<educational_records_array.length;a++){
      eductional_inpro_obj = educational_records_array[a];
      //alert(employ_obj.user_id+'addressid_records_array');
super_inpro_obj = inprogressArray_array[index];
      hh =eductional_inpro_obj.user_id;
      //alert(h+'hh');
      hl=eductional_inpro_obj.education_type;
      gg =super_inpro_obj.verification_user_id;
      //alert(g+'gg');
if( hh == gg && hl == qualification_id ){
    //alert(gg+'super_inpro_obj education'+hh);
eductional_inpro_objay = educational_records_array[a];
//alert(eductional_inpro_objay.user_id+'emppppppppp last educational'+eductional_inpro_objay.education_type);
}

    }
}
 if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');

      for(a=0;a<employment_records_array.length;a++){
      employment_obja_inpo = employment_records_array[a];

super_inpro_obj = inprogressArray_array[index];
      hj =employment_obja_inpo.user_id;
      huemploy=employment_obja_inpo.employment_type;
      //alert(h+'hh');
      gj =super_inpro_obj.verification_user_id;
      //alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
employment_obja_inpod = employment_records_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}

    }
}
//alert(activity_log_details_array);

var loggg=activity_log_details_array;
//alert(loggg);
if(loggg == ''){
}else{
       for(a=0;a<activity_log_details_array.length;a++){
      log_inpro_obj = activity_log_details_array[a];
    
super_inpro_obj = inprogressArray_array[index];
      hh =log_inpro_obj.verification_id;

      gg =super_inpro_obj.verification_user_id;
   
if( hh == gg ){
 
log_inpro_objg = activity_log_details_array[a];
//alert(log_inpro_objg.verification_id+'llllllllllog');
}

    }
 }


var log_inpro_objg=log_inpro_objg;
//alert(log_inpro_objg);
var address_inpro_obja=address_inpro_obja;
var employment_obja_inpod=employment_obja_inpod;
var eductional_inpro_objay=eductional_inpro_objay;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
 //alert('currentob education succes');
 if(log_inpro_objg !== undefined ){
//alert('log current');
sessionStorage.setItem("currentobj_educational_inpro",JSON.stringify(eductional_inpro_objay));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
sessionStorage.setItem("currentobj_log_inpro",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
return false;
}
 sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));

sessionStorage.setItem("currentobj_educational_inpro",JSON.stringify(eductional_inpro_objay));
  $.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
          return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
 //alert('currentob address succes');
 if(log_inpro_objg !== undefined ){
//alert('log current');

sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
sessionStorage.setItem("currentobj_log_inpro",JSON.stringify(log_inpro_objg)); 

sessionStorage.setItem("currentobja_addressid_inpro",JSON.stringify(address_inpro_obja));
$.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));

    sessionStorage.setItem("currentobja_addressid_inpro",JSON.stringify(address_inpro_obja));
  $.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
          return false;
}
         
 if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
 //alert('currentob employment succes');
  if(log_inpro_objg !== undefined ){
//alert('log current');

sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
sessionStorage.setItem("currentobj_log_inpro",JSON.stringify(log_inpro_objg)); 

  sessionStorage.setItem("currentobj_employment_records_inpo",JSON.stringify(employment_obja_inpod));
$.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
return false;
}
 sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("currentobj_employment_records_inpo",JSON.stringify(employment_obja_inpod));
  $.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
          return false;
}


if(log_inpro_objg !== undefined ){
//alert('log current');
sessionStorage.setItem("currentobj_log_inpro",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
return false;
}
/*else{
  



         sessionStorage.setItem("currentobja_addressid_inpro",JSON.stringify(address_inpro_obja));
         sessionStorage.setItem("currentobj_educational_inpro",JSON.stringify(eductional_inpro_obja));
   
          sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
           
           sessionStorage.setItem("currentobj_employment_records_inpo",JSON.stringify(employment_obja_inpo));
       
      $.mobile.changePage($('#supervisor_inprogress_inside'), { transition: "slide", changeHash: true, reverse: false });
          return false;
}*/
    
        }