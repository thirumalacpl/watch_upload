$(document).on('pagecreate', '#pageone', function(){ 
    //alert("hidash");
    if(sessionStorage.getItem("logged_in")=="1"){
          $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false }); 
    }
$(document).off('click', '#submit').on('click', '#submit', function() { 
    if($('#username').val().length > 0 && $('#password').val().length > 0){
        console.log($('#check-watchuser').serialize());
        $.ajax({url: 'http://staging.eimpressive.com/slimrestapi-watch/watchindex.php',
            data:$('#check-watchuser').serialize(),
            type: 'post',                   
            async: 'true',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function() {
$('body').addClass('ui-loading');
},
complete: function() {
},
success: function (result) {
    console.log(result);
    var pas=result[0];
    //alert(pas == [object Object]);
           if(pas == ''){
    alert('username or password entered is invalid');
    $.mobile.changePage($('#pageone'), { transition: "slide", changeHash: true, reverse: false });
    return false; 
}
    if(result[0]){
      
        sessionStorage.setItem("logged_in","1");
        sessionStorage.setItem("regionArray",JSON.stringify(result[0]));
        sessionStorage.setItem("supervisor_view_new_veri_array",JSON.stringify(result[1]));
        sessionStorage.setItem("addressid_records_array",JSON.stringify(result[2]));
        sessionStorage.setItem("educational_records_array",JSON.stringify(result[3]));
        sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[4]));
        sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[5]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[6]));
        sessionStorage.setItem("employment_records_array",JSON.stringify(result[7]));
        sessionStorage.setItem("activity_log_details_array",JSON.stringify(result[8]));
        sessionStorage.setItem("supervisor_view_inprogress_veri_array_array",JSON.stringify(result[9]));
        sessionStorage.setItem("supervisor_view_verified_array",JSON.stringify(result[10]));
        sessionStorage.setItem("multiple_documents_array",JSON.stringify(result[11]));

        $.mobile.loading().hide();
        $(".ui-icon-loading").hide();
         $.mobile.changePage($('#dashboard'), { transition: "slide", changeHash: true, reverse: false }); 
  

    }else {
        $.mobile.loading().hide();
        alert("username or password entered is invalid");	
        
    }
    return false;
},
error: function (request,error) {
    console.log(error);
    console.log(request);              
alert('Network error has occurred please try again!');
}
}); 
 
}
});
});

