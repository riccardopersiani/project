var app = angular.module('App');

app.controller('BestPathCtrl', ['$rootScope', '$scope', "leafletData", '$routeParams', '$location', 'MinPathProvider', 'GeocodingService',
    function ($rootScope, $scope, leafletData, $routeParams, $location, MinPathProvider, GeocodingService) {

        // initialize the map
        this.center = {
            lat: 45.064,
            lng: 7.681,
            zoom: 13
        };
        this.defaults = {
            scrollWheelZoom: false
        };
        this.markers = {};
        this.events = {
            map: {
                enable: ['zoomstart', 'drag', 'click', 'mousemove'],
                logic: 'emit'
            }
        };
        this.legend = {
            position: 'bottomleft',
            colors: ['#0064c8', '#ff6400'],
            labels: ['Walk', 'Bus']
        };
        this.tiles = {
            name: 'MapBox',
            url: '//api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
            type: 'xyz'
        };

        // handle user adding a marker
        $scope.$on("leafletDirectiveMap.click", (event, args) => {
            // check how many markers are there on the map
            if (Object.keys(this.markers).length < 2) {
                // decide if this is the source (first marker) or the destination (second marker)
                var key = this.markers['source'] == undefined ? 'source' : 'destination';
                var leafEvent = args.leafletEvent;
                // build the marker
                this.markers[key] = {
                    lat: leafEvent.latlng.lat,
                    lng: leafEvent.latlng.lng,
                    message: key,
                    draggable: true
                };
                // update the search form
                GeocodingService.reverseGeocode(leafEvent.latlng.lat, leafEvent.latlng.lng).then((result) => {
                    this[key + 'Str'] = result.formatted_address;
                });

            }
        });

        this.removeMarkers = () => {
            this.markers = {};
            this.geojson = [];
            this.sourceStr = '';
            this.destinationStr = '';
        }

        // use the service to get the suggested path
        this.findPath = () => {
            var source = this.markers['source'];
            var destination = this.markers['destination'];
            if (source && destination) {
                MinPathProvider.getMinPathBetween(source, destination, true).then((result) => {
                    this.geojson = result.geojson;
                    this.markers = result.markers;
                    leafletData.getMap().then(function (map) {
                        map.fitBounds(result.latlngs);
                    });
                });
            }
        }

        // key is 'source' or 'destination'
        this.geocode = (key) => {
            GeocodingService.getLocationFromString(this[key + 'Str']).then((result) => {
                this.markers[key] = result.geometry.location;
            });
        };

        // key is 'source' or 'destination'
        this.geolocate = (key) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.markers[key] = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    GeocodingService.reverseGeocode(this.markers[key].lat, this.markers[key].lng).then((result) => {
                        this[key + 'Str'] = result.formatted_address;
                    });
                }, (error) => {
                    $rootScope.$emit('error', { message: "You denied access to geolocation " });
                });
            }
        };
    }
]);
