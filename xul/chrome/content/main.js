var parserUtils = Components.classes["@mozilla.org/parserutils;1"]
                            .getService(Components.interfaces.nsIParserUtils);

var kunstrukt = function () {
    var kuntainer = document.getElementById("kuntainer");
    kuntainer.appendChild(parserUtils.parseFragment(
        '<strong><em>Foo!</em></strong>', 0, false, null, kuntainer));
}
