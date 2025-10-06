require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/WMSLayer",
  "esri/widgets/LayerList",
  "esri/widgets/Legend"
], function(Map, MapView, WMSLayer, LayerList, Legend) {

  var map = new Map({
    basemap: "osm"
  });

  var wmsLayer = new WMSLayer({
    url: "http://geoportal-petroperu.publicvm.com/geoserver/LIMITES_ADMINISTRATIVOS/wms",
    title:"Departamentos",
    sublayers: [{
      name: "Departamentos",
      listMode:"hide",
    }]
  });
  map.add(wmsLayer);

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-75.0152, -9.1899],
    zoom: 5
  });

  var layerList = new LayerList({
    view: view
  });
  view.ui.add(layerList, "top-right");

  var legend = new Legend({
    view: view
  });
  view.ui.add(legend, "bottom-right");
});
