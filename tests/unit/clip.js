module("clip");

test("clipRect", 1, function() {
    equals( jQuery("#test").css("clipRect"), "50px 50px 50px 50px", "first clip test" );
});
