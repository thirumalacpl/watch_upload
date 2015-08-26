		$(document).on('pageshow', '#supervisor_inprogress_inside', function(){  
//alert('supervisor_inprogress_inside');
$('#logapp').empty();

      $(document).off('click', '#new_verification_inside').on('click', '#new_verification_inside', function() {

  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#dashboard_inpro_inside').on('click', '#dashboard_inpro_inside', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

        $(document).off('click', '#inproveri_inside').on('click', '#inproveri_inside', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});
            $(document).off('click', '#inproveri_inside_neww').on('click', '#inproveri_inside_neww', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

          $(document).off('click', '#verified_inpro_inside').on('click', '#verified_inpro_inside', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_verified_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});


     $(document).off('click', '#inproinsig').on('click', '#inproinsig', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      //alert("success");
$('.document_imag_inpro').empty();
$('#select_inpro').empty();

assignValues();


 

function assignValues(){
   region_array = JSON.parse(sessionStorage.getItem("regionArray"));
    superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
      user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
       activity_log_details_array = JSON.parse(sessionStorage.getItem("activity_log_details_array"));

       currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_inpro"));

//alert("inside inprogress addressid" +currentobja_addressid.user_id+currentobja_addressid.proof_type_id );

       currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_inpro"));

       //alert("inside inprogress educat" +currentobj_educational_records.user_id+currentobj_educational_records.education_type );

        currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records_inpo"));

        //alert("inside inprogress employ" +currentobj_employment_records.user_id+currentobj_employment_records.employment_type );

         addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("currentobj_log_inpro"));



employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

       var coordinator_id = user_obja.type;
        // alert(coordinator_id+'qualification_idcoordinator_id');
      // var proof_type_id =currentobja_addressid.proof_type_id;
      // alert(proof_type_id+'proof_type_id');
       var verification_user_id = user_obja.verification_user_id;

var qualification_id=user_obja.type;
//alert(qualification_id);
      // alert(user_obja.qualification_name+'qqq name')
       //alert(user_obja.qualification_id+'qqq id')
       //alert(verification_user_id+'verification_user_id id')

var region_num=region_array.region;

//alert(currentobj_log_inpro);
var current_log=currentobj_log_inpro;


    
     
     
  

var select='<div class="ui-select"><div id="status_val_inpro-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val_inpro-button" class="ui-btn  ui-btn-icon-right ui-corner-all ui-shadow"><span>Select Status</span><select id="status_val_inpro"> <option value="Inprogress">Select Status</option><option value="Inprogress">Inprogress</option><option value="Verified">Verified</option></select></div></div></div></div>'
$('#select_inpro').append(select);

if(current_log !== null){
for(a=0;a<activity_log_details_array.length;a++){
  
      activity_lo_obj = activity_log_details_array[a];
log_ver=activity_lo_obj.verification_id;
ver=currentobj_log_inpro.verification_id;

typ =activity_lo_obj.type;
//alert(typ+'tyy')
      if( log_ver == ver && typ == coordinator_id){
        activity_lok_obj = activity_log_details_array[a];

var logapp='<li><a href="#"><h2></h2><p>'+activity_lok_obj.activity_log+'</p></a><p class="ui-li-asidea"><br><strong></strong></p></li>'
$('#logapp').append(logapp);

}

    }
}
else{
  var logapp='<li><a href="#"><p style="text-align:center">No Previous Log Found</p></li>'
$('#logapp').append(logapp);
}

 for(a=0;a<superArray_array.length;a++){
      super_obja = superArray_array[a];

$("#supervisor_name_inprolistinside").text(super_obja.First_Name);
$("#city_name_inprolistinside").text(super_obja.city_name);
    }



 if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('employment');
for(a=0;a<employment_upload_array.length;a++){
  
      employimg_obj = employment_upload_array[a];
       // alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == coordinator_id && empid == verification_user_id ){
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
var oneemp=employimg_obj.document;

   $('#name_inpro').text(user_obja.name);
    $('#percent_inpro').text('SALARY'+currentobj_employment_records.employee_final_salary);
     //$('#address').text(currentobj_educational_records.address);
    $('#qualification_name_inpro').text(user_obja.qualification_name);
    $('#institute_inpro').text(currentobj_employment_records.employer_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location_inpro').text(user_obja.city_name);

 
    
    $('.document_imag_inpro').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


      $('#pincode_inpro').text(currentobj_employment_records.employer_zipcode);

}

}
 
 }

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('if education');
for(a=0;a<employment_upload_array.length;a++){
  
      employimg_obj = employment_upload_array[a];
       // alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == coordinator_id && empid == verification_user_id ){
//alert("if employimg_obj");

var oneemp=employimg_obj.document;
//alert(oneemp+"one img");
//alert(oneproof+"oneimg after if proof");
//alert(addressimg_obj.document_name);
   $('#name_inpro').text(user_obja.name);
    $('#percent_inpro').text(currentobj_educational_records.percentage+'%');
     $('#address_inpro').text(currentobj_educational_records.address);
    $('#qualification_name_inpro').text(user_obja.qualification_name);
    $('#institute_inpro').text(currentobj_educational_records.institute_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location_inpro').text(user_obja.city_name);

    // $('#year').text(currentobj_educational_records.year_of_passing);
    
    $('.document_imag_inpro').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


      $('#pincode_inpro').text(currentobj_educational_records.pincode);



 

}

}
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){

//alert('if address id');
for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
      addressimg_obj = addressid_records_array[a];
       // alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;

//alert(oneimg +'equal to'+ proof_type_id);
//alert(oneid +'equal to'+ verification_user_id);
if(oneimg == coordinator_id && oneid == verification_user_id ){
//alert("if proof inside iffffffffffffff");
var oneproof=addressimg_obj.document_name;
//alert(oneproof+"oneimg after if proof");
//alert(oneimg+'img id');
   $('#name_inpro').text(user_obja.name);
    $('#qualification_name_inpro').text(user_obja.qualification_name);
   // $('#address_inpro').text(currentobj_educational_records.address);
    $('#percent_inpro').text('');
    $('#institute_inpro').text(user_obja.qualification_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location_inpro').text(user_obja.city_name);
    // $('#year').text(currentobj_educational_records.year_of_passing);
    
    $('.document_imag_inpro').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneproof+'" style="width:150px;height:150px">&nbsp');


      //$('#pincode_inpro').text(currentobj_educational_records.pincode);



}

}

}

$(document).off('click', '#inpro_to_verified').on('click', '#inpro_to_verified', function() { 
    var status_val_inpro=document.getElementById('status_val_inpro').value;
    var remark_inpro=document.getElementById('remark_inpro').value;
    var activity_log=document.getElementById('activity_log').value;
   // var sdocument=document.getElementById('pgAddBookBookImage').value;
   var sdocument=$('input[type=file]').val().split('\\').pop();
  // var a = 'The Three Musketeers';
  //b= a.substring(4, 9); 
 //alert(b);
    //alert(sdocument);
    // alert(sdocumenta);

 //alert(coordinator_id);
 //alert(activity_log);

$.ajax({url: "http://staging.eimpressive.com/slimrestapi-watch/supervisor_status_to_verified.php?status_val_inpro="+status_val_inpro+"&verification_user_id="+verification_user_id+"&remark_inpro="+remark_inpro+"&coordinator_id="+coordinator_id+"&region_num="+region_num+"&activity_log="+activity_log+"&sdocument="+sdocument,
    data:$('#update_to_verified_inpro').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
        sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[0]));
        sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[1]));
          sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[2]));
        $.mobile.loading().hide();
        $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "slide", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});



    





    }
 

  

 

});


      
 




     
    