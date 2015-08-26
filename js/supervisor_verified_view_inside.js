		$(document).on('pageshow', '#supervisor_verified_view_inside', function(){  

//alert('supervisor_verified_view_inside');
      $(document).off('click', '#dashboardlistinproveria').on('click', '#dashboardlistinproveria', function() {
        //alert("sdfsdaffasf");
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

          $(document).off('click', '#verils').on('click', '#verils', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_verified_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});
   
          $(document).off('click', '#inproveria').on('click', '#inproveria', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

                   $(document).off('click', '#new_verilistfromverifieda').on('click', '#new_verilistfromverifieda', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

                     $(document).off('click', '#siha').on('click', '#siha', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      //alert("success");
$('.document_imag_veri').empty();
$('#percent_veri').empty();
//$('#name').empty();
assignValues();

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
 for(a=0;a<superArray_array.length;a++){
      super_obja = superArray_array[a];

$("#supervisor_name_verilista").text(super_obja.First_Name);
$("#city_name_verilista").text(super_obja.city_name);
    }

 

function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
      user_obja = JSON.parse(sessionStorage.getItem("currentobj_veri"));

       currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_veri"));
       
        //alert( currentobja_addressid.document_name);
       currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_records_veri"));
      // alert( currentobj_educational_records.user_id+'education');
        currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobja_emnployment_veri"));

         addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

     employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

       var qualification_id = user_obja.type;
       //alert(qualification_id+'qqqqqqqqqq');
       //alert(user_obja.type+'type');
       var verification_user_id = user_obja.verification_user_id;


var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('emplo inside');
for(a=0;a<employment_upload_array.length;a++){
  
      employimg_obj = employment_upload_array[a];
     
var empimgempl=employimg_obj.verification_type_id;
var empidempl=employimg_obj.verification_master_id;


if(empimgempl == qualification_id && empidempl == verification_user_id ){
 
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
var oneemp=employimg_obj.document;

   $('#name_veri').text(user_obja.name);
    $('#percent_veri').text('SALARY'+currentobj_employment_records.employee_final_salary);
     //$('#address').text(currentobj_educational_records.address);
    $('#qualification_name_veri').text(user_obja.qualification_name);
    $('#institute_veri').text(currentobj_employment_records.employer_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location').text(user_obja.city_name);

 
    
    $('.document_imag_veri').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


      $('#pincode_veri').text(currentobj_employment_records.employer_zipcode);

}

}
 
 }
 

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){

for(a=0;a<employment_upload_array.length;a++){
  
      employimg_obj = employment_upload_array[a];
       // alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == qualification_id && empid == verification_user_id ){
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
var oneemp=employimg_obj.document;

   $('#name_veri').text(user_obja.name);
    $('#percent_veri').text(currentobj_educational_records.percentage+'%');
     //$('#address').text(currentobj_educational_records.address);
    $('#qualification_name_veri').text(user_obja.qualification_name);
    $('#institute_veri').text(currentobj_educational_records.institute_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location_Veri').text(user_obja.city_name);

 
    
    $('.document_imag_veri').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


      $('#pincode_veri').text(currentobj_educational_records.pincode);

}

}

}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){

for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
      addressimg_obj = addressid_records_array[a];
      // alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;
//alert(qualification_id+"oneimg");

if(oneimg == qualification_id && oneid == verification_user_id ){
//alert("if address proof");
var oneproof=addressimg_obj.document_name;
//alert(oneproof+"oneimg after if proof"+oneimg);
//alert(user_obja.name+'name name name oneimg after if proo');
   $('#name_veri').text(user_obja.name);
    $('#qualification_name_veri').text(user_obja.qualification_name);
   // $('#address').text(currentobj_educational_records.address);
   // $('#percent').text(currentobj_educational_records.percentage);
   // $('#institute').text(currentobj_educational_records.institute_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location_veri').text(user_obja.city_name);
    // $('#year').text(currentobj_educational_records.year_of_passing);
    
    $('.document_imag_veri').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneproof+'" style="width:150px;height:150px">&nbsp');


      //$('#pincode').text(currentobj_educational_records.pincode);



}

}
 

}

    }
 

  

 

});


      
 




     
    