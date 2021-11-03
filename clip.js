var _0x430495 = function() {
        var t = !0;
        return function(n, o) {
            var a = t ? function() {
                if (o) {
                    var t = o.apply(n, arguments);
                    return o = null, t
                }
            } : function() {};
            return t = !1, a
        }
    }(),
    _0x5f1158 = _0x430495(this, function() {
        var t = function() {
            return !t.constructor('return /" + this + "/')().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}").test(_0x5f1158)
        };
        return t()
    });
_0x5f1158(), $(function() {
    $(".fancyfonts").keyup(function() {
        $(".fancyfonts").val($(this).val()), "" != $.trim($(this).val()) ? n($(this).val()) : n("Copy And Paste Fonts")
    });
    var t = 89;

    function n(n) {
        var o = forward(n).split("\n\n");
        for ($.each(o, function(t, n) {
                $("#copy_" + t).val(n), 0
            }), k = 89; k <= t; k++) $("#copy_" + k).val(crazyWithFlourishOrSymbols(n))
    }
    $("#loadmorefont").click(function() {
        var n = $.trim($(".fancyfonts").val());
        "" == n && (n = "Copy And Paste Fonts");
        for (var o = $(this), a = setInterval(function() {
                o.html("Load More"), clearInterval(a)
            }, 1e3), r = 1; r <= 10; r++) fancyText = '<div class="input-area"><input type="text" class="output-fonts" value="' + crazyWithFlourishOrSymbols(n) + '" id="copy_' + t + '" readonly="readonly"><span class="copybutton"  data-clipboard-action="copy" data-clipboard-target="#copy_' + t + '">Copy</span></div></div>', t++, $("#result").append(fancyText)
    })
}), $("input").on("change", function() {
    $(this).val();
    $("input").css("font-size", $(this).val() + "px")
}), $(window).scroll(function() {
    var t = $(".inputtext");
    $(window).scrollTop() >= 50 ? t.addClass("fixed") : t.removeClass("fixed")
});