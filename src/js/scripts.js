jQuery(document).ready(function() {
    
    // select2
    // $.fn.select2.defaults.set("theme", "bootstrap");
    $('.select2').select2({
        placeholder: "Select an option",
        width: '100%', 
    });
    
    // datepicker
    $('.datepicker').datepicker({
        // options
        format: 'dd/mm/yyyy',
        autoclose: true,
        clearBtn: true,
    });
    
    // imageupload
    $("#passport").fileinput({
        previewFileType: "image",
        allowedFileExtensions: ["png", "jpeg", "jpg"],
        showClose: false,
        zoomIcon: '',
        browseClass: "btn btn-success",
        browseLabel: "Browse Image",
        browseIcon: "<i class=\"glyphicon glyphicon-picture\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"glyphicon glyphicon-trash\"></i> ",
        uploadClass: "btn btn-info",
        uploadLabel: "Upload",
        uploadIcon: "<i class=\"glyphicon glyphicon-upload\"></i> "
    });
});