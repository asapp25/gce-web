// JavaScript for displaying a KML file as a layer on a generic Google Map with zoom in/out controls
// 
// input arguments:
//    urlKML = URL of a KML document (string)
//    latCenter = center latitude (float)
//    lonCenter = center longitude (float)
//    initZoom = initial zoom level (integer)
//    showControls = option to display scaleControl and overviewMapControl (boolean)
//
// JS library requirements:
//    keydragzoom209_packed.js
//    https://maps.googleapis.com/maps/api/js?sensor=false&amp;key=AIzaSyCqH4-Pbtkn_Xv0RfKuqfB5FRZnWAcNA0g
//
// by Wade Sheldon
//
// last revised 29-Apr-2013

// Declare global variables for map object and KML layer
var map;
var kmlLayer = null;

// Define primary loadmap function with all controls
function loadmap(urlKML,latCenter,lonCenter,initZoom,showControls) {

	//define map options
	var myOptions = {
		center: new google.maps.LatLng(latCenter,lonCenter),
		zoom: initZoom,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		streetViewControl: false,
		mapTypeControl: true,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		panControl: true,
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
		scaleControl: showControls,
		scaleControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		overviewMapControl: showControls,
		overviewMapControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_RIGHT,
			opened: showControls
		}
	};
	
	//initialize map with options
	map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);
	
	// enable drag/zoom control if showControls = true
	if (showControls) {
		map.enableKeyDragZoom({
		  visualEnabled: true,
		  visualPosition: google.maps.ControlPosition.LEFT_CENTER,
		  visualPositionOffset: new google.maps.Size(35, 60),
		  visualPositionIndex: null,
		  visualSprite: "https://maps.gstatic.com/mapfiles/ftr/controls/dragzoom_btn.png",
		  visualSize: new google.maps.Size(20, 20),
		  visualTips: {
			off: "Turn on",
			on: "Turn off"
		  }
		});
	}
	
	// add KML overlay if specified
	if (urlKML.length > 0) {
		kmlLayer = new google.maps.KmlLayer({
			url : urlKML, 
			map: map, 
			preserveViewport : true 
		});
	}
	
	//google.maps.event.addListener(map,'click',function(event) {
	//  document.getElementById('latlng').value = event.latLng.lat() + ', ' + event.latLng.lng()
	//})
	
	//google.maps.event.addListener(map,'mousemove',function(event) {
	//  document.getElementById('latspan').innerHTML = event.latLng.lat()
	//  document.getElementById('lngspan').innerHTML = event.latLng.lng()
	//});
 
}
