$(".increase").click(() => {
    $(".count").text() < 33 &&
    $(".count").text(+$(".count").text() + 1 + "")
})

$(".decrease").click(() => {
    $(".count").text() > 0 &&
    $(".count").text(+$(".count").text() - 1 + "");
})

const images = $(".images__small")
$(".images__small").click((e) => {
    $(".images__small").removeClass("selected")
    $(e.target).addClass("selected");
    
    $(".images__big").attr("src", (e.target.src).replace("-thumbnail", ""));
})