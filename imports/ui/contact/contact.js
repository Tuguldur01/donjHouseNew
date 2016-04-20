import "./contact.html";

Template.contact.onRendered(function() {
  GoogleMaps.load();
});

Template.contact.helpers({
  contactMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(47.914568, 106.800996),
        zoom: 15,
      };
    }
  }
});

Template.contact.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('contactMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
