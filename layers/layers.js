var wms_layers = [];

var format_Areas_0 = new ol.format.GeoJSON();
var features_Areas_0 = format_Areas_0.readFeatures(json_Areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_0.addFeatures(features_Areas_0);
var lyr_Areas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_0, 
                style: style_Areas_0,
                popuplayertitle: "Areas",
                interactive: true,
    title: 'Areas<br />\
    <img src="styles/legend/Areas_0_0.png" /> ١٢٦٢٣ - ٨٧١٩٣<br />\
    <img src="styles/legend/Areas_0_1.png" /> ٨٧١٩٣ - ١٣٢٣٣٨<br />\
    <img src="styles/legend/Areas_0_2.png" /> ١٣٢٣٣٨ - ١٥١٧٨١<br />\
    <img src="styles/legend/Areas_0_3.png" /> ١٥١٧٨١ - ١٧٧٩٨٧<br />\
    <img src="styles/legend/Areas_0_4.png" /> ١٧٧٩٨٧ - ٦٢٤٨٨٩<br />'
        });

lyr_Areas_0.setVisible(true);
var layersList = [lyr_Areas_0];
lyr_Areas_0.set('fieldAliases', {'PROV_NAME_': 'PROV_NAME_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'men': 'men', 'women': 'women', 'م': 'م', 'men2': 'men2', 'women_1': 'women_1', 'area': 'area', });
lyr_Areas_0.set('fieldImages', {'PROV_NAME_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'men': 'TextEdit', 'women': 'TextEdit', 'م': 'TextEdit', 'men2': 'TextEdit', 'women_1': 'TextEdit', 'area': 'TextEdit', });
lyr_Areas_0.set('fieldLabels', {'PROV_NAME_': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'men': 'no label', 'women': 'no label', 'م': 'inline label - always visible', 'men2': 'no label', 'women_1': 'no label', 'area': 'no label', });
lyr_Areas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});