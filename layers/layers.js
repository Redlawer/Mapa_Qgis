var wms_layers = [];

var format_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0 = new ol.format.GeoJSON();
var features_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0 = format_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.readFeatures(json_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.addFeatures(features_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0);
var lyr_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0, 
                style: style_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0,
                interactive: true,
                title: '<img src="styles/legend/LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.png" /> LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);
var layersList = [lyr_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0,lyr_OpenStreetMap_1];
lyr_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.set('fieldAliases', {'CCDD': 'CCDD', 'NOMBDEP': 'NOMBDEP', 'CCPP': 'CCPP', 'NOMBPROV': 'NOMBPROV', 'CCDI': 'CCDI', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', 'UBIGEO': 'UBIGEO', 'IDPROV': 'IDPROV', 'CODIGO': 'CODIGO', 'CNT_CCPP': 'CNT_CCPP', 'DESCRIPCIO': 'DESCRIPCIO', 'DESCARGAR': 'DESCARGAR', 'WHATSAPP': 'WHATSAPP', 'CONTACTO': 'CONTACTO', });
lyr_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.set('fieldImages', {'CCDD': '', 'NOMBDEP': '', 'CCPP': '', 'NOMBPROV': '', 'CCDI': '', 'NOMBDIST': '', 'CAPITAL': '', 'UBIGEO': '', 'IDPROV': '', 'CODIGO': '', 'CNT_CCPP': '', 'DESCRIPCIO': '', 'DESCARGAR': '', 'WHATSAPP': '', 'CONTACTO': '', });
lyr_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.set('fieldLabels', {'CCDD': 'inline label', 'NOMBDEP': 'inline label', 'CCPP': 'inline label', 'NOMBPROV': 'inline label', 'CCDI': 'inline label', 'NOMBDIST': 'inline label', 'CAPITAL': 'inline label', 'UBIGEO': 'inline label', 'IDPROV': 'inline label', 'CODIGO': 'inline label', 'CNT_CCPP': 'inline label', 'DESCRIPCIO': 'inline label', 'DESCARGAR': 'inline label', 'WHATSAPP': 'inline label', 'CONTACTO': 'inline label', });
lyr_LIMITE_DISTRITAL_2020_INEI_geogpsperu_juansuyo_931381206_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});