var map,polygon_map,routes_map;
$(document).ready(function(){

    // basic map
    map = new GMaps({
        div: '#basic_map',
        lat: -12.043333,
        lng: -77.028333,

    });


    // polygon map

        polygon_map = new GMaps({

            div: '#polygon_map',
            lat: -12.043333,
            lng: -77.028333,


        });

            var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511],	[-12.044804866577001,-77.02154422636042]];
            polygon = polygon_map.drawPolygon({
                paths: path, // pre-defined polygon shape
                strokeColor: '#BBD8E9',
                strokeOpacity: 1,
                strokeWeight: 3,
                fillColor: '#BBD8E9',
                fillOpacity: 0.6
            })
    // Routes Maps

        routes_map =  new GMaps({
            div: '#routes_map',
            lat: -12.043333,
            lng: -77.028333
            });
            routes_map.drawRoute({
                origin: [-12.044012922866312, -77.02470665341184],
                destination: [-12.090814532191756, -77.02271108990476],
                travelMode: 'driving',
                strokeColor: '#131540',
                strokeOpacity: 0.6,
                strokeWeight: 6
            });



            //Street 

            var panorama = GMaps.createPanorama({
                el: '#street_map',
                lat : 42.3455,
                lng : -71.0983,

            });

            // maps_types

            map = new GMaps({
                div: '#maps_types',
                lat: -12.043333,
                lng: -77.028333,
                mapTypeControlOptions: {
                mapTypeIds : ["hybrid", "roadmap", "satellite", "terrain", "osm"]
                }
            });
            map.addMapType("osm", {
                getTileUrl: function(coord, zoom) {
                return "https://a.tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
                },
                tileSize: new google.maps.Size(256, 256),
                name: "OpenStreetMap",
                maxZoom: 18
            });
            map.setMapTypeId("osm");
});
