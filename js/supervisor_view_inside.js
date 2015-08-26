		$(document).on('pageshow', '#supervisor_view_inside', function(){  
//alert("supervisor_view_inside");

      $(document).off('click', '#new_verification_inside').on('click', '#new_verification_inside', function() {

  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#dashboard_inside').on('click', '#dashboard_inside', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

        $(document).off('click', '#new_inside_inpro').on('click', '#new_inside_inpro', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

          $(document).off('click', '#new_inside_verified').on('click', '#new_inside_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_verified_list'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#super_view_inside_signout').on('click', '#super_view_inside_signout', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      //alert("success");
$('.document_imag').empty();
$('#percent').empty();
$('#select').empty();
//$('#name').empty();
assignValues();


 

function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
      user_obja = JSON.parse(sessionStorage.getItem("currentobj"));
       currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid"));
        //alert( currentobja_addressid.user_id + 'address no');
       currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_records"));
       //alert( currentobj_educational_records.user_id+'education no');
        //currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records"));
         addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

         currentobj_employment_records =  JSON.parse(sessionStorage.getItem("currentobj_employment_records"));
         //alert(currentobj_employment_records.user_id+'employment');

     employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

        superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

       var qualification_id = user_obja.qualification_id;
       //alert(qualification_id);
       var verification_user_id = user_obja.verification_user_id;


var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

for(a=0;a<superArray_array.length;a++){
      super_obja = superArray_array[a];
//alert(super_obja.First_Name);
//alert(super_obja.city_name);
$("#supervisor_name_newlistq").text(super_obja.First_Name);
$("#city_name_newlistq").text(super_obja.city_name);
    }

   
    
  
  
     

     
     
     
     
 
  
    
 var select='<div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><span>Select Status</span><select id="status_val"><option value="New">Select Status</option><option value="Inprogress">Inprogress</option> </select></div></div></div></div>' 
//var select=' <div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button" class=""><span>Select Status</span><select id="status_val"> <option value="New">Select Status</option><option value="Inprogress">Inprogress</option> </select></div></div></div></div>'
//var select=' <div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button"><select id="status_val"><option value="New">Select Status</option> <option value="Inprogress">Inprogress</option></select></div></div></div></div>'
$('#select').append(select);

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

   $('#name').text(user_obja.name);
    $('#percent').text('SALARY'+currentobj_employment_records.employee_final_salary);
     //$('#address').text(currentobj_educational_records.address);
    $('#qualification_name').text(user_obja.qualification_name);
    $('#institute').text(currentobj_employment_records.employer_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location').text(user_obja.city_name);

 
    
    $('.document_imag').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


      $('#pincode').text(currentobj_employment_records.employer_zipcode);

}

}
 
 }


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){

//alert("if educatio_obj");
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

   $('#name').text(user_obja.name);
    $('#percent').text(currentobj_educational_records.percentage+'%');
     //$('#address').text(currentobj_educational_records.address);
    $('#qualification_name').text(user_obja.qualification_name);
    $('#institute').text(currentobj_educational_records.institute_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location').text(user_obja.city_name);

 
    
    $('.document_imag').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


      $('#pincode').text(currentobj_educational_records.pincode);

}

}
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert("if addressid");
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
//alert(oneproof+"oneimg after if proof");
//alert(user_obja.name.document_name);
   $('#name').text(user_obja.name);
    $('#qualification_name').text(user_obja.qualification_name);

    $('#institute').text(user_obja.qualification_name);
   
    $('#location').text(user_obja.city_name);
 
    
    $('.document_imag').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneproof+'" style="width:150px;height:150px">&nbsp');


      $('#pincode').text(user_obja.pincode);



}

}
 
 }

$(document).off('click', '#inprogress').on('click', '#inprogress', function() { 
   var status_val=document.getElementById('status_val').value;
    var remark=document.getElementById('remark').value;
    //alert(region_num);

$.ajax({url: "http://staging.eimpressive.com/slimrestapi-watch/supervisor_status_to_inprogress.php?status_val="+status_val+"&verification_user_id="+verification_user_id+"&remark="+remark+"&qualification_id="+qualification_id+"&region_num="+region_num,
    data:$('#update_to_inprogress').serialize(),
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


      
 




     
    