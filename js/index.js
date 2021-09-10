$(function(){
    var totalW=0;
    $('#myTab li').each(function (i,obj) {
        totalW+=$(obj).width();
    })
    $('#myTab').width(totalW)
})