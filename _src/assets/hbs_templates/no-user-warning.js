define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"wedge-2x\"></div>\n<div class=\"infobox\" ng-class=\"{'hidden': settings.has_admins}\">\n	<i class=\"fa fa-exclamation-triangle\"></i>\n	<span>Eh, there are no admin users. Add some by running <br><br><code>enduro addadmin &#60;usr&#62; &#60;pass&#62;</code><br><br> in the console.</span>\n</div>";
},"useData":true}); });