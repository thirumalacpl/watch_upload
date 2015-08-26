$('#pgAddBookBookImage').on('change', function () {
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});
//check to see if we have a file
var fName = document.getElementById('pgAddBookBookImage').files[0];
if (typeof (fName) === 'undefined') fName = '';
if (Len(fName) > 0) {
//get the file name
var ofName = fName.name;
//get the file extension
var ofExt = Mid(ofName, InStrRev(ofName, '.'));
// open a file reader to upload the file to the server
var reader = new FileReader();
// once the file reader has loaded the file contents
reader.onload = function() {
// get the dataURL of the file, a base 64 decoded string
var dataURL = reader.result;
//save the file to the server
var req = Ajax("savepng.php", "POST", "file=" + ofName + "&content=" + dataURL);
if (req.status == 200) {
// return the full path of the saved file
fName = req.responseText;
$('#pgAddBookImagePreview').attr('src', dataURL);
//show a toast message that the file has been uploaded
toastr.success(ofName + ' file uploaded.', 'Library');
} else {
// return a blank file name
fName = '';
//show a toast message that the file has not been uploaded
toastr.error(ofName + ' file NOT uploaded.', 'Library');
}
//set the file name to store later
$('#pgAddBookBookImage').data('file', fName);
};
// start reading the file contents
reader.readAsDataURL(fName);
} else {
}
$.mobile.loading("hide");
});