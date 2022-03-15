// let DarkMode =
// {
//     isDark : true
// };

var isDark = true;


$(".btn-container").click(function() {
    if($('.img-container-sun').contents('active'))
    {
        setTimeout(function () {
            $('.img-container-moon').toggleClass('active');   
            $('.img-container-sun').toggleClass('active');  
        }, 300); 
    }
    
    $("#page").toggleClass('light');
    if($("#page").hasClass('light'))
    {
        isDark = false;
    }
    else
    {
        isDark = true;
    }
    $(".groups").toggleClass('light');
    $("a").toggleClass('light');
    $("item-group").toggleClass('light');
    console.log(isDark);
    return isDark;
}); 

export var isDark = isDark;




