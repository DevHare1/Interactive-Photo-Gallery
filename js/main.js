//Search Bar Function

$("#search").keyup(function() {
    let currentQuery= $("#search").val().toLowerCase();
    $(".gallery img").filter(function() {
        let currentKeyword= $(this).attr("alt").toLowerCase();
        if(currentKeyword.indexOf(currentQuery) >= 0) {
            $(this).parent().show();
        } else{
            $(this).parent().hide();
        }
    });
});
