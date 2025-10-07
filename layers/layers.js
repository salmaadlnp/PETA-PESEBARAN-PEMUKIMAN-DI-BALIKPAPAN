var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Buffered_1 = new ol.format.GeoJSON();
var features_Buffered_1 = format_Buffered_1.readFeatures(json_Buffered_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_1.addFeatures(features_Buffered_1);
var lyr_Buffered_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_1, 
                style: style_Buffered_1,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_1.png" /> Buffered'
            });
var format_Dissolved_2 = new ol.format.GeoJSON();
var features_Dissolved_2 = format_Dissolved_2.readFeatures(json_Dissolved_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_2.addFeatures(features_Dissolved_2);
var lyr_Dissolved_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolved_2, 
                style: style_Dissolved_2,
                popuplayertitle: 'Dissolved',
                interactive: true,
                title: '<img src="styles/legend/Dissolved_2.png" /> Dissolved'
            });
var format_ADMINISTRASI_AR_KABKOTA_3 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_KABKOTA_3 = format_ADMINISTRASI_AR_KABKOTA_3.readFeatures(json_ADMINISTRASI_AR_KABKOTA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_KABKOTA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_KABKOTA_3.addFeatures(features_ADMINISTRASI_AR_KABKOTA_3);
var lyr_ADMINISTRASI_AR_KABKOTA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_KABKOTA_3, 
                style: style_ADMINISTRASI_AR_KABKOTA_3,
                popuplayertitle: 'ADMINISTRASI_AR_KABKOTA',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_AR_KABKOTA_3.png" /> ADMINISTRASI_AR_KABKOTA'
            });
var format_Union_4 = new ol.format.GeoJSON();
var features_Union_4 = format_Union_4.readFeatures(json_Union_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Union_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Union_4.addFeatures(features_Union_4);
var lyr_Union_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Union_4, 
                style: style_Union_4,
                popuplayertitle: 'Union',
                interactive: true,
                title: '<img src="styles/legend/Union_4.png" /> Union'
            });
var format_Union_5 = new ol.format.GeoJSON();
var features_Union_5 = format_Union_5.readFeatures(json_Union_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Union_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Union_5.addFeatures(features_Union_5);
var lyr_Union_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Union_5, 
                style: style_Union_5,
                popuplayertitle: 'Union',
                interactive: true,
                title: '<img src="styles/legend/Union_5.png" /> Union'
            });
var format_Merged_6 = new ol.format.GeoJSON();
var features_Merged_6 = format_Merged_6.readFeatures(json_Merged_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_6.addFeatures(features_Merged_6);
var lyr_Merged_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merged_6, 
                style: style_Merged_6,
                popuplayertitle: 'Merged',
                interactive: true,
                title: '<img src="styles/legend/Merged_6.png" /> Merged'
            });
var format_Buffered_7 = new ol.format.GeoJSON();
var features_Buffered_7 = format_Buffered_7.readFeatures(json_Buffered_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_7.addFeatures(features_Buffered_7);
var lyr_Buffered_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_7, 
                style: style_Buffered_7,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_7.png" /> Buffered'
            });
var format_ADMINISTRASI_AR_KABKOTA_8 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_KABKOTA_8 = format_ADMINISTRASI_AR_KABKOTA_8.readFeatures(json_ADMINISTRASI_AR_KABKOTA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_KABKOTA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_KABKOTA_8.addFeatures(features_ADMINISTRASI_AR_KABKOTA_8);
var lyr_ADMINISTRASI_AR_KABKOTA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_KABKOTA_8, 
                style: style_ADMINISTRASI_AR_KABKOTA_8,
                popuplayertitle: 'ADMINISTRASI_AR_KABKOTA',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_AR_KABKOTA_8.png" /> ADMINISTRASI_AR_KABKOTA'
            });
var format_Sungai_UTMsungai_ar_50k_9 = new ol.format.GeoJSON();
var features_Sungai_UTMsungai_ar_50k_9 = format_Sungai_UTMsungai_ar_50k_9.readFeatures(json_Sungai_UTMsungai_ar_50k_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_UTMsungai_ar_50k_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_UTMsungai_ar_50k_9.addFeatures(features_Sungai_UTMsungai_ar_50k_9);
var lyr_Sungai_UTMsungai_ar_50k_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_UTMsungai_ar_50k_9, 
                style: style_Sungai_UTMsungai_ar_50k_9,
                popuplayertitle: 'Sungai_UTM — sungai_ar_50k',
                interactive: true,
                title: '<img src="styles/legend/Sungai_UTMsungai_ar_50k_9.png" /> Sungai_UTM — sungai_ar_50k'
            });
var format_ADMINISTRASI_AR_KECAMATAN_10 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_KECAMATAN_10 = format_ADMINISTRASI_AR_KECAMATAN_10.readFeatures(json_ADMINISTRASI_AR_KECAMATAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_KECAMATAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_KECAMATAN_10.addFeatures(features_ADMINISTRASI_AR_KECAMATAN_10);
var lyr_ADMINISTRASI_AR_KECAMATAN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_KECAMATAN_10, 
                style: style_ADMINISTRASI_AR_KECAMATAN_10,
                popuplayertitle: 'ADMINISTRASI_AR_KECAMATAN',
                interactive: true,
    title: 'ADMINISTRASI_AR_KECAMATAN<br />\
    <img src="styles/legend/ADMINISTRASI_AR_KECAMATAN_10_0.png" /> Penajam<br />\
    <img src="styles/legend/ADMINISTRASI_AR_KECAMATAN_10_1.png" /> Samboja Barat<br />\
    <img src="styles/legend/ADMINISTRASI_AR_KECAMATAN_10_2.png" /> Sepaku<br />\
    <img src="styles/legend/ADMINISTRASI_AR_KECAMATAN_10_3.png" /> <br />' });
var format_ADMINISTRASI_AR_DESAKEL_11 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_DESAKEL_11 = format_ADMINISTRASI_AR_DESAKEL_11.readFeatures(json_ADMINISTRASI_AR_DESAKEL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_DESAKEL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_DESAKEL_11.addFeatures(features_ADMINISTRASI_AR_DESAKEL_11);
var lyr_ADMINISTRASI_AR_DESAKEL_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_DESAKEL_11, 
                style: style_ADMINISTRASI_AR_DESAKEL_11,
                popuplayertitle: 'ADMINISTRASI_AR_DESAKEL',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_AR_DESAKEL_11.png" /> ADMINISTRASI_AR_DESAKEL'
            });
var format_PERUMAHAN_PT_50K_12 = new ol.format.GeoJSON();
var features_PERUMAHAN_PT_50K_12 = format_PERUMAHAN_PT_50K_12.readFeatures(json_PERUMAHAN_PT_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERUMAHAN_PT_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERUMAHAN_PT_50K_12.addFeatures(features_PERUMAHAN_PT_50K_12);
var lyr_PERUMAHAN_PT_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERUMAHAN_PT_50K_12, 
                style: style_PERUMAHAN_PT_50K_12,
                popuplayertitle: 'PERUMAHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PERUMAHAN_PT_50K_12.png" /> PERUMAHAN_PT_50K'
            });
var format_JALAN_LN_50K_13 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_13 = format_JALAN_LN_50K_13.readFeatures(json_JALAN_LN_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_13.addFeatures(features_JALAN_LN_50K_13);
var lyr_JALAN_LN_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_13,
maxResolution:140022.3307613098,
 
                style: style_JALAN_LN_50K_13,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_13.png" /> JALAN_LN_50K'
            });
var format_PERMUKIMAN_AR_50K_14 = new ol.format.GeoJSON();
var features_PERMUKIMAN_AR_50K_14 = format_PERMUKIMAN_AR_50K_14.readFeatures(json_PERMUKIMAN_AR_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERMUKIMAN_AR_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERMUKIMAN_AR_50K_14.addFeatures(features_PERMUKIMAN_AR_50K_14);
var lyr_PERMUKIMAN_AR_50K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERMUKIMAN_AR_50K_14, 
                style: style_PERMUKIMAN_AR_50K_14,
                popuplayertitle: 'PERMUKIMAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/PERMUKIMAN_AR_50K_14.png" /> PERMUKIMAN_AR_50K'
            });
var format_PERUMAHAN_AR_50K_15 = new ol.format.GeoJSON();
var features_PERUMAHAN_AR_50K_15 = format_PERUMAHAN_AR_50K_15.readFeatures(json_PERUMAHAN_AR_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERUMAHAN_AR_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERUMAHAN_AR_50K_15.addFeatures(features_PERUMAHAN_AR_50K_15);
var lyr_PERUMAHAN_AR_50K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERUMAHAN_AR_50K_15, 
                style: style_PERUMAHAN_AR_50K_15,
                popuplayertitle: 'PERUMAHAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/PERUMAHAN_AR_50K_15.png" /> PERUMAHAN_AR_50K'
            });
var format_EMPANG_AR_50K_16 = new ol.format.GeoJSON();
var features_EMPANG_AR_50K_16 = format_EMPANG_AR_50K_16.readFeatures(json_EMPANG_AR_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMPANG_AR_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMPANG_AR_50K_16.addFeatures(features_EMPANG_AR_50K_16);
var lyr_EMPANG_AR_50K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMPANG_AR_50K_16, 
                style: style_EMPANG_AR_50K_16,
                popuplayertitle: 'EMPANG_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/EMPANG_AR_50K_16.png" /> EMPANG_AR_50K'
            });
var format_SUNGAI_AR_50K_17 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_17 = format_SUNGAI_AR_50K_17.readFeatures(json_SUNGAI_AR_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_17.addFeatures(features_SUNGAI_AR_50K_17);
var lyr_SUNGAI_AR_50K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_50K_17, 
                style: style_SUNGAI_AR_50K_17,
                popuplayertitle: 'SUNGAI_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_50K_17.png" /> SUNGAI_AR_50K'
            });
var format_DANAU_AR_50K_18 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_18 = format_DANAU_AR_50K_18.readFeatures(json_DANAU_AR_50K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_50K_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_18.addFeatures(features_DANAU_AR_50K_18);
var lyr_DANAU_AR_50K_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_AR_50K_18, 
                style: style_DANAU_AR_50K_18,
                popuplayertitle: 'DANAU_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_18.png" /> DANAU_AR_50K'
            });
var format_Clipped_19 = new ol.format.GeoJSON();
var features_Clipped_19 = format_Clipped_19.readFeatures(json_Clipped_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_19.addFeatures(features_Clipped_19);
var lyr_Clipped_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_19, 
                style: style_Clipped_19,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_19.png" /> Clipped'
            });
var format_GARISPANTAI_LN_50K_20 = new ol.format.GeoJSON();
var features_GARISPANTAI_LN_50K_20 = format_GARISPANTAI_LN_50K_20.readFeatures(json_GARISPANTAI_LN_50K_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISPANTAI_LN_50K_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISPANTAI_LN_50K_20.addFeatures(features_GARISPANTAI_LN_50K_20);
var lyr_GARISPANTAI_LN_50K_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARISPANTAI_LN_50K_20, 
                style: style_GARISPANTAI_LN_50K_20,
                popuplayertitle: 'GARISPANTAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/GARISPANTAI_LN_50K_20.png" /> GARISPANTAI_LN_50K'
            });
var format_JEMBATAN_PT_50K_21 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_50K_21 = format_JEMBATAN_PT_50K_21.readFeatures(json_JEMBATAN_PT_50K_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_50K_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_50K_21.addFeatures(features_JEMBATAN_PT_50K_21);
var lyr_JEMBATAN_PT_50K_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_50K_21, 
                style: style_JEMBATAN_PT_50K_21,
                popuplayertitle: 'JEMBATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_50K_21.png" /> JEMBATAN_PT_50K'
            });
var format_ADMINISTRASI_LN_KABKOTA_22 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_KABKOTA_22 = format_ADMINISTRASI_LN_KABKOTA_22.readFeatures(json_ADMINISTRASI_LN_KABKOTA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_KABKOTA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_KABKOTA_22.addFeatures(features_ADMINISTRASI_LN_KABKOTA_22);
var lyr_ADMINISTRASI_LN_KABKOTA_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_KABKOTA_22, 
                style: style_ADMINISTRASI_LN_KABKOTA_22,
                popuplayertitle: 'ADMINISTRASI_LN_KABKOTA',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_KABKOTA_22.png" /> ADMINISTRASI_LN_KABKOTA'
            });
var format_SUNGAI_LN_50K_23 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_23 = format_SUNGAI_LN_50K_23.readFeatures(json_SUNGAI_LN_50K_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_23.addFeatures(features_SUNGAI_LN_50K_23);
var lyr_SUNGAI_LN_50K_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_23, 
                style: style_SUNGAI_LN_50K_23,
                popuplayertitle: 'SUNGAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_23.png" /> SUNGAI_LN_50K'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Buffered_1.setVisible(true);lyr_Dissolved_2.setVisible(true);lyr_ADMINISTRASI_AR_KABKOTA_3.setVisible(true);lyr_Union_4.setVisible(true);lyr_Union_5.setVisible(true);lyr_Merged_6.setVisible(true);lyr_Buffered_7.setVisible(true);lyr_ADMINISTRASI_AR_KABKOTA_8.setVisible(true);lyr_Sungai_UTMsungai_ar_50k_9.setVisible(true);lyr_ADMINISTRASI_AR_KECAMATAN_10.setVisible(true);lyr_ADMINISTRASI_AR_DESAKEL_11.setVisible(true);lyr_PERUMAHAN_PT_50K_12.setVisible(true);lyr_JALAN_LN_50K_13.setVisible(true);lyr_PERMUKIMAN_AR_50K_14.setVisible(true);lyr_PERUMAHAN_AR_50K_15.setVisible(true);lyr_EMPANG_AR_50K_16.setVisible(true);lyr_SUNGAI_AR_50K_17.setVisible(true);lyr_DANAU_AR_50K_18.setVisible(true);lyr_Clipped_19.setVisible(true);lyr_GARISPANTAI_LN_50K_20.setVisible(true);lyr_JEMBATAN_PT_50K_21.setVisible(true);lyr_ADMINISTRASI_LN_KABKOTA_22.setVisible(true);lyr_SUNGAI_LN_50K_23.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Buffered_1,lyr_Dissolved_2,lyr_ADMINISTRASI_AR_KABKOTA_3,lyr_Union_4,lyr_Union_5,lyr_Merged_6,lyr_Buffered_7,lyr_ADMINISTRASI_AR_KABKOTA_8,lyr_Sungai_UTMsungai_ar_50k_9,lyr_ADMINISTRASI_AR_KECAMATAN_10,lyr_ADMINISTRASI_AR_DESAKEL_11,lyr_PERUMAHAN_PT_50K_12,lyr_JALAN_LN_50K_13,lyr_PERMUKIMAN_AR_50K_14,lyr_PERUMAHAN_AR_50K_15,lyr_EMPANG_AR_50K_16,lyr_SUNGAI_AR_50K_17,lyr_DANAU_AR_50K_18,lyr_Clipped_19,lyr_GARISPANTAI_LN_50K_20,lyr_JEMBATAN_PT_50K_21,lyr_ADMINISTRASI_LN_KABKOTA_22,lyr_SUNGAI_LN_50K_23];
lyr_Buffered_1.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Dissolved_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_AR_KABKOTA_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'Luas': 'Luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Union_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NAMOBJ_2': 'NAMOBJ_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'METADATA_2': 'METADATA_2', 'SRS_ID_2': 'SRS_ID_2', 'JKK': 'JKK', 'JMLHUNI': 'JMLHUNI', 'JUNIT': 'JUNIT', 'STHUNI': 'STHUNI', 'STSKTN': 'STSKTN', 'JNSPRM': 'JNSPRM', 'BTKPRM': 'BTKPRM', 'THNOBJ': 'THNOBJ', 'SHAPE_Leng_2': 'SHAPE_Leng_2', 'SHAPE_Area_2': 'SHAPE_Area_2', });
lyr_Union_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JKK': 'JKK', 'JMLHUNI': 'JMLHUNI', 'JUNIT': 'JUNIT', 'STHUNI': 'STHUNI', 'STSKTN': 'STSKTN', 'JNSPRM': 'JNSPRM', 'BTKPRM': 'BTKPRM', 'THNOBJ': 'THNOBJ', 'fid': 'fid', 'NAMOBJ_2': 'NAMOBJ_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'METADATA_2': 'METADATA_2', 'SRS_ID_2': 'SRS_ID_2', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Merged_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JKK': 'JKK', 'JMLHUNI': 'JMLHUNI', 'JUNIT': 'JUNIT', 'STHUNI': 'STHUNI', 'STSKTN': 'STSKTN', 'JNSPRM': 'JNSPRM', 'BTKPRM': 'BTKPRM', 'THNOBJ': 'THNOBJ', 'layer': 'layer', 'path': 'path', });
lyr_Buffered_7.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_AR_KABKOTA_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'Luas': 'Luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_UTMsungai_ar_50k_9.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_AR_KECAMATAN_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_AR_DESAKEL_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PERUMAHAN_PT_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JKK': 'JKK', 'JMLHUNI': 'JMLHUNI', 'JUNIT': 'JUNIT', 'STHUNI': 'STHUNI', 'STSKTN': 'STSKTN', 'JNSPRM': 'JNSPRM', 'BTKPRM': 'BTKPRM', 'THNOBJ': 'THNOBJ', });
lyr_JALAN_LN_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PERMUKIMAN_AR_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PERUMAHAN_AR_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JKK': 'JKK', 'JMLHUNI': 'JMLHUNI', 'JUNIT': 'JUNIT', 'STHUNI': 'STHUNI', 'STSKTN': 'STSKTN', 'JNSPRM': 'JNSPRM', 'BTKPRM': 'BTKPRM', 'THNOBJ': 'THNOBJ', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_EMPANG_AR_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'UKRSGI': 'UKRSGI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_AR_50K_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'CRH': 'CRH', 'FNGAIR': 'FNGAIR', 'OTODAN': 'OTODAN', 'QUAAR': 'QUAAR', 'SDN': 'SDN', 'TIPTYP': 'TIPTYP', 'VLCSDN': 'VLCSDN', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'KPTS': 'KPTS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Clipped_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_GARISPANTAI_LN_50K_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'DTMVER': 'DTMVER', 'ELEVAS': 'ELEVAS', 'KARGPN': 'KARGPN', 'TIPGPN': 'TIPGPN', 'KODGPN': 'KODGPN', 'THNSBDATA': 'THNSBDATA', 'SBDATA': 'SBDATA', 'SKL': 'SKL', 'THNPBL': 'THNPBL', 'KET': 'KET', 'Shape_Leng': 'Shape_Leng', });
lyr_JEMBATAN_PT_50K_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'AYUJMB': 'AYUJMB', 'BTSJMB': 'BTSJMB', 'DEKJMB': 'DEKJMB', 'FGSJMB': 'FGSJMB', 'JMLBTG': 'JMLBTG', 'KDBBWH': 'KDBBWH', 'KDBGAT': 'KDBGAT', 'KDLNTI': 'KDLNTI', 'KDUJMB': 'KDUJMB', 'LBRJMB': 'LBRJMB', 'LBRTRT': 'LBRTRT', 'MATJMB': 'MATJMB', 'TBGNAT': 'TBGNAT', 'TGRNBS': 'TGRNBS', 'THNPBN': 'THNPBN', 'TIPJMB': 'TIPJMB', 'TONJMB': 'TONJMB', 'STRJMB': 'STRJMB', 'TGGJMB': 'TGGJMB', });
lyr_ADMINISTRASI_LN_KABKOTA_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'KARKTR': 'KARKTR', 'KLBADM': 'KLBADM', 'PJGBTS': 'PJGBTS', 'STSBTS': 'STSBTS', 'TIPLOK': 'TIPLOK', 'TIPTBT': 'TIPTBT', 'UUPP': 'UUPP', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'RuleID': 'RuleID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_50K_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Buffered_1.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'UKRSGI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Dissolved_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASI_AR_KABKOTA_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'Luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Union_4.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'UKRSGI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'NAMOBJ_2': 'TextEdit', 'FCODE_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'METADATA_2': 'TextEdit', 'SRS_ID_2': 'TextEdit', 'JKK': 'TextEdit', 'JMLHUNI': 'TextEdit', 'JUNIT': 'TextEdit', 'STHUNI': 'TextEdit', 'STSKTN': 'TextEdit', 'JNSPRM': 'TextEdit', 'BTKPRM': 'TextEdit', 'THNOBJ': 'TextEdit', 'SHAPE_Leng_2': 'TextEdit', 'SHAPE_Area_2': 'TextEdit', });
lyr_Union_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'JKK': '', 'JMLHUNI': '', 'JUNIT': '', 'STHUNI': '', 'STSKTN': '', 'JNSPRM': '', 'BTKPRM': '', 'THNOBJ': '', 'fid': '', 'NAMOBJ_2': '', 'FCODE_2': '', 'REMARK_2': '', 'METADATA_2': '', 'SRS_ID_2': '', 'ADATGL': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'UKRSGI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Merged_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'JKK': '', 'JMLHUNI': '', 'JUNIT': '', 'STHUNI': '', 'STSKTN': '', 'JNSPRM': '', 'BTKPRM': '', 'THNOBJ': '', 'layer': '', 'path': '', });
lyr_Buffered_7.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'UKRSGI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASI_AR_KABKOTA_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'Luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sungai_UTMsungai_ar_50k_9.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'UKRSGI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASI_AR_KECAMATAN_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_AR_DESAKEL_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PERUMAHAN_PT_50K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JKK': 'TextEdit', 'JMLHUNI': 'TextEdit', 'JUNIT': 'TextEdit', 'STHUNI': 'TextEdit', 'STSKTN': 'TextEdit', 'JNSPRM': 'TextEdit', 'BTKPRM': 'TextEdit', 'THNOBJ': 'TextEdit', });
lyr_JALAN_LN_50K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'DateTime', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PERMUKIMAN_AR_50K_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PERUMAHAN_AR_50K_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JKK': 'TextEdit', 'JMLHUNI': 'TextEdit', 'JUNIT': 'TextEdit', 'STHUNI': 'TextEdit', 'STSKTN': 'TextEdit', 'JNSPRM': 'TextEdit', 'BTKPRM': 'TextEdit', 'THNOBJ': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_EMPANG_AR_50K_16.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_AR_50K_17.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'UKRSGI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_DANAU_AR_50K_18.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'CRH': 'TextEdit', 'FNGAIR': 'TextEdit', 'OTODAN': 'TextEdit', 'QUAAR': 'TextEdit', 'SDN': 'TextEdit', 'TIPTYP': 'TextEdit', 'VLCSDN': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'KPTS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Clipped_19.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ADATGL': '', 'DMAX': '', 'FNGAIR': '', 'JNSSNG': '', 'KLSSNG': '', 'LTKSGI': '', 'NAMWS': '', 'STATUS': '', 'UKRSGI': '', 'WMAX': '', 'DBTMXS': '', 'NAMDAS': '', 'SHAPE_Leng': '', });
lyr_GARISPANTAI_LN_50K_20.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'DTMVER': 'TextEdit', 'ELEVAS': 'TextEdit', 'KARGPN': 'TextEdit', 'TIPGPN': 'Range', 'KODGPN': 'TextEdit', 'THNSBDATA': 'TextEdit', 'SBDATA': 'Range', 'SKL': 'Range', 'THNPBL': 'TextEdit', 'KET': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_JEMBATAN_PT_50K_21.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'AYUJMB': 'TextEdit', 'BTSJMB': 'TextEdit', 'DEKJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'JMLBTG': 'TextEdit', 'KDBBWH': 'TextEdit', 'KDBGAT': 'TextEdit', 'KDLNTI': 'TextEdit', 'KDUJMB': 'TextEdit', 'LBRJMB': 'TextEdit', 'LBRTRT': 'TextEdit', 'MATJMB': 'TextEdit', 'TBGNAT': 'TextEdit', 'TGRNBS': 'TextEdit', 'THNPBN': 'TextEdit', 'TIPJMB': 'TextEdit', 'TONJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'TGGJMB': 'TextEdit', });
lyr_ADMINISTRASI_LN_KABKOTA_22.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'KARKTR': 'Range', 'KLBADM': 'Range', 'PJGBTS': 'TextEdit', 'STSBTS': 'Range', 'TIPLOK': 'Range', 'TIPTBT': 'Range', 'UUPP': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'RuleID': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_50K_23.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'DMAX': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Buffered_1.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADATGL': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'UKRSGI': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Dissolved_2.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ADMINISTRASI_AR_KABKOTA_3.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'Luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Union_4.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADATGL': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'UKRSGI': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'NAMOBJ_2': 'hidden field', 'FCODE_2': 'hidden field', 'REMARK_2': 'hidden field', 'METADATA_2': 'hidden field', 'SRS_ID_2': 'hidden field', 'JKK': 'hidden field', 'JMLHUNI': 'hidden field', 'JUNIT': 'hidden field', 'STHUNI': 'hidden field', 'STSKTN': 'hidden field', 'JNSPRM': 'hidden field', 'BTKPRM': 'hidden field', 'THNOBJ': 'hidden field', 'SHAPE_Leng_2': 'hidden field', 'SHAPE_Area_2': 'hidden field', });
lyr_Union_5.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'JKK': 'hidden field', 'JMLHUNI': 'hidden field', 'JUNIT': 'hidden field', 'STHUNI': 'hidden field', 'STSKTN': 'hidden field', 'JNSPRM': 'hidden field', 'BTKPRM': 'hidden field', 'THNOBJ': 'hidden field', 'fid': 'hidden field', 'NAMOBJ_2': 'hidden field', 'FCODE_2': 'hidden field', 'REMARK_2': 'hidden field', 'METADATA_2': 'hidden field', 'SRS_ID_2': 'hidden field', 'ADATGL': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'UKRSGI': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Merged_6.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'JKK': 'hidden field', 'JMLHUNI': 'hidden field', 'JUNIT': 'hidden field', 'STHUNI': 'hidden field', 'STSKTN': 'hidden field', 'JNSPRM': 'hidden field', 'BTKPRM': 'hidden field', 'THNOBJ': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Buffered_7.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADATGL': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'UKRSGI': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ADMINISTRASI_AR_KABKOTA_8.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'Luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Sungai_UTMsungai_ar_50k_9.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADATGL': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'UKRSGI': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ADMINISTRASI_AR_KECAMATAN_10.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ADMINISTRASI_AR_DESAKEL_11.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'luas': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_PERUMAHAN_PT_50K_12.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'JKK': 'hidden field', 'JMLHUNI': 'hidden field', 'JUNIT': 'hidden field', 'STHUNI': 'hidden field', 'STSKTN': 'hidden field', 'JNSPRM': 'hidden field', 'BTKPRM': 'hidden field', 'THNOBJ': 'hidden field', });
lyr_JALAN_LN_50K_13.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ARHRJL': 'hidden field', 'AUTRJL': 'hidden field', 'FGSRJL': 'hidden field', 'JARRJL': 'hidden field', 'JPARJL': 'hidden field', 'KLLRJL': 'hidden field', 'KONRJL': 'hidden field', 'KPMSTR': 'hidden field', 'LKONOF': 'hidden field', 'LKSBSP': 'hidden field', 'LKSRTA': 'hidden field', 'LLHRRT': 'hidden field', 'LOCRJL': 'hidden field', 'LBRBHJ': 'hidden field', 'LBRJLN': 'hidden field', 'MATRJL': 'hidden field', 'MEDRJL': 'hidden field', 'SPCRJL': 'hidden field', 'STARJL': 'hidden field', 'TOLRJL': 'hidden field', 'UTKRJL': 'hidden field', 'VLCPRT': 'hidden field', 'WLYRJL': 'hidden field', 'TGL_SK': 'hidden field', 'JLNLYG': 'hidden field', 'KLSRJL': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_PERMUKIMAN_AR_50K_14.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_PERUMAHAN_AR_50K_15.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'JKK': 'hidden field', 'JMLHUNI': 'hidden field', 'JUNIT': 'hidden field', 'STHUNI': 'hidden field', 'STSKTN': 'hidden field', 'JNSPRM': 'hidden field', 'BTKPRM': 'hidden field', 'THNOBJ': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_EMPANG_AR_50K_16.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_SUNGAI_AR_50K_17.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADATGL': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'UKRSGI': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_DANAU_AR_50K_18.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'CRH': 'hidden field', 'FNGAIR': 'hidden field', 'OTODAN': 'hidden field', 'QUAAR': 'hidden field', 'SDN': 'hidden field', 'TIPTYP': 'hidden field', 'VLCSDN': 'hidden field', 'VOLTAP': 'hidden field', 'DTA': 'hidden field', 'KPTS': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Clipped_19.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADATGL': 'hidden field', 'DMAX': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'NAMWS': 'hidden field', 'STATUS': 'hidden field', 'UKRSGI': 'hidden field', 'WMAX': 'hidden field', 'DBTMXS': 'hidden field', 'NAMDAS': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_GARISPANTAI_LN_50K_20.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'DTMVER': 'hidden field', 'ELEVAS': 'hidden field', 'KARGPN': 'hidden field', 'TIPGPN': 'hidden field', 'KODGPN': 'hidden field', 'THNSBDATA': 'hidden field', 'SBDATA': 'hidden field', 'SKL': 'hidden field', 'THNPBL': 'hidden field', 'KET': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_JEMBATAN_PT_50K_21.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'AYUJMB': 'hidden field', 'BTSJMB': 'hidden field', 'DEKJMB': 'hidden field', 'FGSJMB': 'hidden field', 'JMLBTG': 'hidden field', 'KDBBWH': 'hidden field', 'KDBGAT': 'hidden field', 'KDLNTI': 'hidden field', 'KDUJMB': 'hidden field', 'LBRJMB': 'hidden field', 'LBRTRT': 'hidden field', 'MATJMB': 'hidden field', 'TBGNAT': 'hidden field', 'TGRNBS': 'hidden field', 'THNPBN': 'hidden field', 'TIPJMB': 'hidden field', 'TONJMB': 'hidden field', 'STRJMB': 'hidden field', 'TGGJMB': 'hidden field', });
lyr_ADMINISTRASI_LN_KABKOTA_22.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADMIN1': 'hidden field', 'ADMIN2': 'hidden field', 'KARKTR': 'hidden field', 'KLBADM': 'hidden field', 'PJGBTS': 'hidden field', 'STSBTS': 'hidden field', 'TIPLOK': 'hidden field', 'TIPTBT': 'hidden field', 'UUPP': 'hidden field', 'WADKC1': 'hidden field', 'WADKC2': 'hidden field', 'WAKBK1': 'hidden field', 'WAKBK2': 'hidden field', 'WAKLD1': 'hidden field', 'WAKLD2': 'hidden field', 'WAPRO1': 'hidden field', 'WAPRO2': 'hidden field', 'RuleID': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_SUNGAI_LN_50K_23.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ADATGL': 'hidden field', 'DMAX': 'hidden field', 'FNGAIR': 'hidden field', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'LTKSGI': 'hidden field', 'NAMWS': 'hidden field', 'STATUS': 'inline label - always visible', 'UKRSGI': 'hidden field', 'WMAX': 'hidden field', 'DBTMXS': 'hidden field', 'NAMDAS': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_SUNGAI_LN_50K_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});