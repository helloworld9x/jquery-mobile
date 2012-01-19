//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Utility methods for enabling and disabling user scaling (pinch zoom)
//>>label: zoomhandling

define( [ "jquery", "jquery.mobile.core" ], function( $ ) {
//>>excludeEnd("jqmBuildExclude");
( function( $ ) {
	var	meta = $( "meta[name=viewport]" ),
        initialContent = meta.attr( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10";
	
	$.mobile.zoom = $.extend( {}, {
		enabled: true,
		disable: function() {
	        meta.attr( "content", disabledZoom );
	        $.mobile.zoom.enabled = false;
		},
		enable: function() {
	        meta.attr( "content", enabledZoom );
	        $.mobile.zoom.enabled = true;
		}
	});

}( jQuery ));
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");
