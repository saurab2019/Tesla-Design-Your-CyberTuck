var content1 = 1;
var content2 = 0;
var content3 = 0;
var content4 = 0;
var buyNow = 0;
$(document).ready(function () {
    if (buyNow == 0) {
        $(".purchase").hide();
        buyNow = 1;
    }

    $(".buy").click(function () {
        if (buyNow == 1) {
            $(".purchase").slideDown();
            $(".buy").hide();
        }
    });

    $(".buy").mouseenter(function () {
        $(".buy h3").css("color", "black");
        $(".buy").css("color", "#a5a5a5");
    });
    $(".buy").mouseleave(function () {
        $(".buy h3").css("color", "white");
    });

});

$(document).ready(function () {
    // hovering event
    $("#content0").mouseenter(function () {
        $("#content0 .item h4").css("color", "white");
    });
    $("#content0").mouseleave(function () {
        $("#content0 .item h4").css("color", "#a5a5a5");
    });
    $("#content1").mouseenter(function () {
        $("#content1 .item h4").css("color", "white");
    });
    $("#content1").mouseleave(function () {
        if (content1 == 0)
            $("#content1 .item h4").css("color", "#a5a5a5");
    });
    $("#content1").mouseenter(function () {
        $("#content1 .item h4").css("color", "white");
    });
    $("#content1").mouseleave(function () {
        if (content1 == 0)
            $("#content1 .item h4").css("color", "#a5a5a5");
    });

    $("#content2").mouseenter(function () {
        $("#content2 .item h4").css("color", "white");
    });
    $("#content2").mouseleave(function () {
        if (content2 == 0)
            $("#content2 .item h4").css("color", "#a5a5a5");
    });

    $("#content3").mouseenter(function () {
        $("#content3 .item h4").css("color", "white");
    });
    $("#content3").mouseleave(function () {
        if (content3 == 0)
            $("#content3 .item h4").css("color", "#a5a5a5");
    });

    $("#content4 .item").mouseenter(function () {
        $("#content4 .item h4").css("color", "white");
    });
    $("#content4 .item").mouseleave(function () {
        if (content4 == 0)
            $("#content4 .item h4").css("color", "#a5a5a5");
    });

    // clicking event 
    $("#content1").click(function () {
        $("#content1 .item h4").css("color", "white");
        $("#content2 .item h4").css("color", "#a5a5a5");
        $("#content3 .item h4").css("color", "#a5a5a5");
        $("#content1 .line").css({ boxShadow: "1px 1px 3px white", borderColor: "white", boxShadow: "-1px -1px 3px white", });
        $("#content2 .line").css({ boxShadow: "none", borderColor: "#a5a5a5" });
        $("#content3 .line").css({ boxShadow: "none", borderColor: "#a5a5a5" });
        $(".equipment .specs .range h3 span").html("250+");
        $(".equipment .specs .capacity h3 span").html("7,500+");
        $(".equipment .specs .speed h3 span").html('<i class="fas fa-less-than"></i> 6.5');
        content1 = 1;
        content2 = 0;
        content3 = 0;
    });

    $("#content2").click(function () {
        $("#content2 .item h4").css("color", "white");
        $("#content1 .item h4").css("color", "#a5a5a5");
        $("#content3 .item h4").css("color", "#a5a5a5");
        $("#content2 .line").css({ boxShadow: "1px 1px 3px white", borderColor: "white", boxShadow: "-1px -1px 3px white", });
        $("#content1 .line").css({ boxShadow: "none", borderColor: "#a5a5a5" });
        $("#content3 .line").css({ boxShadow: "none", borderColor: "#a5a5a5" });
        $(".equipment .specs .range h3 span").html("300+");
        $(".equipment .specs .capacity h3 span").html("10,000+");
        $(".equipment .specs .speed h3 span").html('<i class="fas fa-less-than"></i> 4.5');
        content1 = 0;
        content2 = 1;
        content3 = 0;
    });

    $("#content3").click(function () {
        $("#content3 .item h4").css("color", "white");
        $("#content2 .item h4").css("color", "#a5a5a5");
        $("#content1 .item h4").css("color", "#a5a5a5");
        $("#content3 .line").css({ boxShadow: "1px 1px 3px white", borderColor: "white", boxShadow: "-1px -1px 3px white", });
        $("#content2 .line").css({ boxShadow: "none", borderColor: "#a5a5a5" });
        $("#content1 .line").css({ boxShadow: "none", borderColor: "#a5a5a5" });
        $(".equipment .specs .range h3 span").html("500+");
        $(".equipment .specs .capacity h3 span").html("14,000+");
        $(".equipment .specs .speed h3 span").html('<i class="fas fa-less-than"></i> 2.9');
        content1 = 0;
        content2 = 0;
        content3 = 1;
    });

    $("#content4 .item").click(function () {
        if (content4 == 0) {
            $("#content4 .item #self").animate({ opacity: '0' }, 400, function () {
                $(this).html('<i class="fas fa-minus"></i> FULL SELF-DRIVING ADDED').animate({ 'opacity': 1 }, 400);
            });

            $("#content4 .item h4").css("color", "white");
            $("#content4 .line").css({ boxShadow: "1px 1px 3px white", borderColor: "white", boxShadow: "-1px -1px 3px white", });
            content4 = 1;
        }
        else {
            $("#content4 .item #self").animate({ opacity: '0' }, 400, function () {
                $(this).html('<i class="fas fa-plus"></i> FULL SELF-DRIVING ADDED').animate({ 'opacity': 1 }, 400);
            });
            $("#content4 .item h4").css("color", "#a5a5a5");
            $("#content4 .line").css({ boxShadow: "none", borderColor: "#a5a5a5" });
            content4 = 0;
        }
    });

});

// Form related functions
$(document).ready(function () {
    var curr_yr = new Date().getFullYear();
    $("#exp_year").attr({ min: curr_yr });
});


$(document).ready(function () {
    $(".purchase input").blur(function () {
        if ($(this).prop('required') && $(this).val() == "") {
            $(this).css("border-color", "red");
        }
        else {
            $(this).css("border-color", "white");
        }
    });
});
// Model selection 

var image = 1;
var truck1 = 0;
var truck2 = 0;
var truck3 = 0;
var truck4 = 0;
var flag = 0;
var flag1 = 0;
var isbig = 1;
$(document).ready(function () {
    if ($(window).width() >= 955) {
        $(".main").css({ "background": "black url(./Images/cybertruck1.png)", "background-size": "calc(150vw - 435px)", "background-position": "calc(20px - 25vw) 50%", "background-repeat": "no-repeat" });
        flag1 = 1;
    }
    else {
        $(".main").css({ "background-image": "none" });
        $(".main .equipment").before('<img id ="image" src = "./Images/cybertruck1.png" alt="CyberTruck">');
        flag = 1;
        isbig = 0;
    }
});
$(window).resize(function () {
        if (flag1 == 0 && $(window).width() >= 955) {

            if ($(".main img").length > 0) {
                $(".main img").remove();
            }
            if (image == 1) {
                $(".main").css({ "background": "black url(./Images/cybertruck1.png)", "background-size": "calc(150vw - 435px)", "background-position": "calc(20px - 25vw) 50%", "background-repeat": "no-repeat" });
            }
            else if (truck1 == 1) {
                $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck2.jpg)", "background-size": "cover", "background-blend-mode": "darken", "background-position": "center" });

            }
            else if (truck2 == 1) {
                $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck5.jpg)", "background-size": "cover", "background-blend-mode": "darken", "background-position": "center" });

            }
            else if (truck3 == 1) {
                $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck6.jpg)", "background-size": "cover", "background-blend-mode": "darken", "background-position": "center" });
            }
            else {
                $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck7.jpg)", "background-size": "cover", "background-blend-mode": "darken", "background-position": "center" });
            }
            flag1 = 1;
            flag = 0;
            isbig = 1;
        }
        else if (flag ==0 && $(window).width() < 955) {
           
                console.log("hi");
                $(".main").css({ "background-image": "none" });
                if (image == 1) {
                    $(".main .equipment").before('<img id ="image" src = "./Images/cybertruck1.png" alt="CyberTruck">');
                }
                else if (truck1 == 1) {
                    $(".main .equipment").before('<img id ="image" src = "./Images/cybertruck2.jpg" alt="CyberTruck">');
        
                }
                else if (truck2 == 1) {
                    $(".main .equipment").before('<img id ="image" src = "./Images/cybertruck5.jpg" alt="CyberTruck">');
                }
                else if (truck3 == 1) {
                    $(".main .equipment").before('<img id ="image" src = "./Images/cybertruck6.jpg" alt="CyberTruck">');
                }
                else {
                    $(".main .equipment").before('<img id ="image" src = "./Images/cybertruck7.jpg" alt="CyberTruck">');
                }
                flag = 1;
                flag1 = 0;
                isbig = 0;
            }
});
$(document).ready(function () {
    $("#truck1").click(function () {
        if (isbig == 1) {
            $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck2.jpg)", "background-size": "cover", "background-position": "center","background-blend-mode": "darken" });
        }
        else {
            $(".main img").attr("src", "./Images/cybertruck2.jpg");
        }
        image = 0;
        truck1 = 1;
        truck2 = 0;
        truck3 = 0;
        truck4 = 0;
    });
    $("#truck2").click(function () {
        if (isbig == 1) {
            $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck5.jpg)", "background-size": "cover", "background-position": "center" });
            console.log(isbig);
        }
        else {
            $(".main img").attr("src", "./Images/cybertruck5.jpg");
        }
        image = 0;
        truck1 = 0;
        truck2 = 1;
        truck3 = 0;
        truck4 = 0;
    });
    $("#truck3").click(function () {
        if (isbig == 1) {
            $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck6.jpg)", "background-size": "cover", "background-position": "center","background-blend-mode": "darken" });

        }
        else {
            $(".main img").attr("src", "./Images/cybertruck6.jpg");
        }
        image = 0;
        truck1 = 0;
        truck2 = 0;
        truck3 = 1;
        truck4 = 0;
    });
    $("#truck4").click(function () {
        if (isbig == 1) {
            $(".main").css({ "background": "rgba(14, 14, 14, 0.438) url(./Images/cybertruck7.jpg)", "background-size": "cover", "background-position": "center","background-blend-mode": "darken" });
            console.log(isbig);
        }
        else {
            $(".main img").attr("src", "./Images/cybertruck7.jpg");
        }
        image = 0;
        truck1 = 0;
        truck2 = 0;
        truck3 = 0;
        truck4 = 1;
    });
});
