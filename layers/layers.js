var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_sumber_fix_1 = new ol.format.GeoJSON();
var features_sumber_fix_1 = format_sumber_fix_1.readFeatures(json_sumber_fix_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumber_fix_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumber_fix_1.addFeatures(features_sumber_fix_1);
var lyr_sumber_fix_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sumber_fix_1, 
                style: style_sumber_fix_1,
                interactive: true,
    title: 'sumber_fix<br />\
    <img src="styles/legend/sumber_fix_1_0.png" /> K<br />\
    <img src="styles/legend/sumber_fix_1_1.png" /> M<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_sumber_fix_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_sumber_fix_1];
lyr_sumber_fix_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nama': 'Nama', 'RT/RW': 'RT/RW', 'Pekerjaan': 'Pekerjaan', 'Jml_WC': 'Jml_WC', 'KIS': 'KIS', 'BPJS': 'BPJS', 'B_Tunai': 'B_Tunai', 'B_NonTunai': 'B_NonTunai', 'K_Ekonomi': 'K_Ekonomi', 'Gambar': 'Gambar', });
lyr_sumber_fix_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nama': 'TextEdit', 'RT/RW': 'TextEdit', 'Pekerjaan': 'TextEdit', 'Jml_WC': '', 'KIS': 'TextEdit', 'BPJS': 'TextEdit', 'B_Tunai': 'TextEdit', 'B_NonTunai': 'TextEdit', 'K_Ekonomi': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_sumber_fix_1.set('fieldLabels', {'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'RT/RW': 'inline label - visible with data', 'Pekerjaan': 'inline label - visible with data', 'Jml_WC': 'inline label - visible with data', 'KIS': 'inline label - visible with data', 'BPJS': 'inline label - visible with data', 'B_Tunai': 'inline label - visible with data', 'B_NonTunai': 'inline label - visible with data', 'K_Ekonomi': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_sumber_fix_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});