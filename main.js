// ------------------------- Coded By 0x4A4B -------------------------
function generateFog() {
    //used for id and file name
    var fog_name_input = "fog_name_input";

    // Distance

    var air_fog_start_input = "air_fog_start_input";
    var air_fog_end_input = "air_fog_end_input";
    var air_fog_color_input = "air_fog_color_input";
    var air_render_distance_type = "air_render_distance_type";

    var water_fog_start_input = "water_fog_start_input";
    var water_fog_end_input = "water_fog_end_input";
    var water_fog_color_input = "water_fog_color_input";
    var water_render_distance_type = "water_render_distance_type";

    var weather_fog_start_input = "weather_fog_start_input";
    var weather_fog_end_input = "weather_fog_end_input";
    var weather_fog_color_input = "weather_fog_color_input";
    var weather_render_distance_type = "weather_render_distance_type";

    var lava_fog_start_input = "lava_fog_start_input";
    var lava_fog_end_input = "lava_fog_end_input";
    var lava_fog_color_input = "lava_fog_color_input";
    var lava_render_distance_type = "lava_render_distance_type";

    var lava_resistance_fog_start_input = "lava_resistance_fog_start_input";
    var lava_resistance_fog_end_input = "lava_resistance_fog_end_input";
    var lava_resistance_fog_color_input = "lava_resistance_fog_color_input";
    var lava_resistance_render_distance_type = "lava_resistance_render_distance_type";

    // Volumetric

    var air_max_density = "air_max_density";
    var air_max_density_height = "air_max_density_height";
    var air_zero_density_height = "air_zero_density_height";

    var water_max_density = "water_max_density";
    var water_uniform = "water_uniform";

    var lava_max_density = "lava_max_density";
    var lava_max_density_height = "lava_max_density_height";
    var lava_zero_density_height = "lava_zero_density_height";

    var lava_resistance_max_density = "lava_resistance_max_density";
    var lava_resistance_uniform = "lava_resistance_uniform";

    // Media Coefficients 


    var air_scattering_m11 = "air_scattering_m11";
    var air_scattering_m12 = "air_scattering_m12";
    var air_scattering_m13 = "air_scattering_m13";
    // var air_scattering_m21 = "air_scattering_m21";
    // var air_scattering_m22 = "air_scattering_m22";
    // var air_scattering_m23 = "air_scattering_m23";
    // var air_scattering_m31 = "air_scattering_m31";
    // var air_scattering_m32 = "air_scattering_m32";
    // var air_scattering_m33 = "air_scattering_m33";
    var air_absorption_m11 = "air_absorption_m11";
    var air_absorption_m12 = "air_absorption_m12";
    var air_absorption_m13 = "air_absorption_m13";
    // var air_absorption_m21 = "air_absorption_m21";
    // var air_absorption_m22 = "air_absorption_m22";
    // var air_absorption_m23 = "air_absorption_m23";
    // var air_absorption_m31 = "air_absorption_m31";
    // var air_absorption_m32 = "air_absorption_m32";
    // var air_absorption_m33 = "air_absorption_m33";


    //----------------------------------

    // var water_scattering_m11 = "water_scattering_m11";
    // var water_scattering_m12 = "water_scattering_m12";
    // var water_scattering_m13 = "water_scattering_m13";
    var water_scattering_m21 = "water_scattering_m21";
    var water_scattering_m22 = "water_scattering_m22";
    var water_scattering_m23 = "water_scattering_m23";
    // var water_scattering_m31 = "water_scattering_m31";
    // var water_scattering_m32 = "water_scattering_m32";
    // var water_scattering_m33 = "water_scattering_m33";
    // var water_absorption_m11 = "water_absorption_m11";
    // var water_absorption_m12 = "water_absorption_m12";
    // var water_absorption_m13 = "water_absorption_m13";
    var water_absorption_m21 = "water_absorption_m21";
    var water_absorption_m22 = "water_absorption_m22";
    var water_absorption_m23 = "water_absorption_m23";
    // var water_absorption_m31 = "water_absorption_m21";
    // var water_absorption_m32 = "water_absorption_m22";
    // var water_absorption_m33 = "water_absorption_m23";

    // var cloud_scattering_m11 = "cloud_scattering_m11";
    // var cloud_scattering_m12 = "cloud_scattering_m12";
    // var cloud_scattering_m13 = "cloud_scattering_m13";
    // var cloud_scattering_m21 = "cloud_scattering_m21";
    // var cloud_scattering_m22 = "cloud_scattering_m22";
    // var cloud_scattering_m23 = "cloud_scattering_m23";
    var cloud_scattering_m31 = "cloud_scattering_m31";
    var cloud_scattering_m32 = "cloud_scattering_m32";
    var cloud_scattering_m33 = "cloud_scattering_m33";

    // var cloud_absorption_m11 = "cloud_absorption_m11";
    // var cloud_absorption_m12 = "cloud_absorption_m12";
    // var cloud_absorption_m13 = "cloud_absorption_m13";
    // var cloud_absorption_m21 = "cloud_absorption_m21";
    // var cloud_absorption_m22 = "cloud_absorption_m22";
    // var cloud_absorption_m23 = "cloud_absorption_m23";
    var cloud_absorption_m31 = "cloud_absorption_m31";
    var cloud_absorption_m32 = "cloud_absorption_m32";
    var cloud_absorption_m33 = "cloud_absorption_m33";



    //--------------------
    //--

    var fog_name_input = document.getElementById("fog_name_input").value;

    // Distance
    // var format_version = document.getElementById("format_version_input").value;
    var fog_name_input = document.getElementById("fog_name_input").value;
    // var suffix_mer = document.getElementById("suffix_mer_input").value;
    // var suffix = document.getElementById("suffix_input").value;

    var air_fog_start_input = document.getElementById("air_fog_start_input").value;
    var air_fog_end_input = document.getElementById("air_fog_end_input").value;
    var air_fog_color_input = document.getElementById("air_fog_color_input").value;
    var air_render_distance_type = document.getElementById("air_render_distance_type").value;

    var water_fog_start_input = document.getElementById("water_fog_start_input").value;
    var water_fog_end_input = document.getElementById("water_fog_end_input").value;
    var water_fog_color_input = document.getElementById("water_fog_color_input").value;
    var water_render_distance_type = document.getElementById("water_render_distance_type").value;

    var weather_fog_start_input = document.getElementById("weather_fog_start_input").value;
    var weather_fog_end_input = document.getElementById("weather_fog_end_input").value;
    var weather_fog_color_input = document.getElementById("weather_fog_color_input").value;
    var weather_render_distance_type = document.getElementById("weather_render_distance_type").value;

    var lava_fog_start_input = document.getElementById("lava_fog_start_input").value;
    var lava_fog_end_input = document.getElementById("lava_fog_end_input").value;
    var lava_fog_color_input = document.getElementById("lava_fog_color_input").value;
    var lava_render_distance_type = document.getElementById("lava_render_distance_type").value;

    var lava_resistance_fog_start_input = document.getElementById("lava_resistance_fog_start_input").value;
    var lava_resistance_fog_end_input = document.getElementById("lava_resistance_fog_end_input").value;
    var lava_resistance_fog_color_input = document.getElementById("lava_resistance_fog_color_input").value;
    var lava_resistance_render_distance_type = document.getElementById("lava_resistance_render_distance_type").value;
    //Volumetric
    var air_max_density = document.getElementById("air_max_density").value;
    var air_max_density_height = document.getElementById("air_max_density_height").value;
    var air_zero_density_height = document.getElementById("air_zero_density_height").value;

    var water_max_density = document.getElementById("water_max_density").value;
    var water_uniform = document.getElementById("water_uniform").value;

    var lava_max_density = document.getElementById("lava_max_density").value;
    var lava_max_density_height = document.getElementById("lava_max_density_height").value;
    var lava_zero_density_height = document.getElementById("lava_zero_density_height").value;

    var lava_resistance_max_density = document.getElementById("lava_resistance_max_density").value;
    var lava_resistance_uniform = document.getElementById("lava_resistance_uniform").value;

    // Media Coefficients
    //air
    var air_scattering_m11 = document.getElementById("air_scattering_m11").value;
    var air_scattering_m12 = document.getElementById("air_scattering_m12").value;
    var air_scattering_m13 = document.getElementById("air_scattering_m13").value;
    // var air_scattering_m21 = document.getElementById("air_scattering_m21").value;
    // var air_scattering_m22 = document.getElementById("air_scattering_m22").value;
    // var air_scattering_m23 = document.getElementById("air_scattering_m23").value;
    // var air_scattering_m31 = document.getElementById("air_scattering_m31").value;
    // var air_scattering_m32 = document.getElementById("air_scattering_m32").value;
    // var air_scattering_m33 = document.getElementById("air_scattering_m33").value;

    var air_absorption_m11 = document.getElementById("air_absorption_m11").value;
    var air_absorption_m12 = document.getElementById("air_absorption_m12").value;
    var air_absorption_m13 = document.getElementById("air_absorption_m13").value;
    // var air_absorption_m21 = document.getElementById("air_absorption_m21").value;
    // var air_absorption_m22 = document.getElementById("air_absorption_m22").value;
    // var air_absorption_m23 = document.getElementById("air_absorption_m23").value;
    // var air_absorption_m31 = document.getElementById("air_absorption_m31").value;
    // var air_absorption_m32 = document.getElementById("air_absorption_m32").value;
    // var air_absorption_m33 = document.getElementById("air_absorption_m33").value;

    //--------------------
    //water
    // var water_scattering_m11 = document.getElementById("water_scattering_m11").value;
    // var water_scattering_m12 = document.getElementById("water_scattering_m12").value;
    // var water_scattering_m13 = document.getElementById("water_scattering_m13").value;
    var water_scattering_m21 = document.getElementById("water_scattering_m21").value;
    var water_scattering_m22 = document.getElementById("water_scattering_m22").value;
    var water_scattering_m23 = document.getElementById("water_scattering_m23").value;
    // var water_scattering_m31 = document.getElementById("water_scattering_m31").value;
    // var water_scattering_m32 = document.getElementById("water_scattering_m32").value;
    // var water_scattering_m33 = document.getElementById("water_scattering_m33").value;

    // var water_absorption_m11 = document.getElementById("water_absorption_m11").value;
    // var water_absorption_m12 = document.getElementById("water_absorption_m12").value;
    // var water_absorption_m13 = document.getElementById("water_absorption_m13").value;
    var water_absorption_m21 = document.getElementById("water_absorption_m21").value;
    var water_absorption_m22 = document.getElementById("water_absorption_m22").value;
    var water_absorption_m23 = document.getElementById("water_absorption_m23").value;
    // var water_absorption_m31 = document.getElementById("water_absorption_m31").value;
    // var water_absorption_m32 = document.getElementById("water_absorption_m32").value;
    // var water_absorption_m33 = document.getElementById("water_absorption_m33").value;

    //cloud

    // var cloud_scattering_m11 = document.getElementById("cloud_scattering_m11").value;
    // var cloud_scattering_m12 = document.getElementById("cloud_scattering_m12").value;
    // var cloud_scattering_m13 = document.getElementById("cloud_scattering_m13").value;
    // var cloud_scattering_m21 = document.getElementById("cloud_scattering_m21").value;
    // var cloud_scattering_m22 = document.getElementById("cloud_scattering_m22").value;
    // var cloud_scattering_m23 = document.getElementById("cloud_scattering_m23").value;
    var cloud_scattering_m31 = document.getElementById("cloud_scattering_m31").value;
    var cloud_scattering_m32 = document.getElementById("cloud_scattering_m32").value;
    var cloud_scattering_m33 = document.getElementById("cloud_scattering_m33").value;

    // var cloud_absorption_m11 = document.getElementById("cloud_absorption_m11").value;
    // var cloud_absorption_m12 = document.getElementById("cloud_absorption_m12").value;
    // var cloud_absorption_m13 = document.getElementById("cloud_absorption_m13").value;
    // var cloud_absorption_m21 = document.getElementById("cloud_absorption_m21").value;
    // var cloud_absorption_m22 = document.getElementById("cloud_absorption_m22").value;
    // var cloud_absorption_m23 = document.getElementById("cloud_absorption_m23").value;
    var cloud_absorption_m31 = document.getElementById("cloud_absorption_m31").value;
    var cloud_absorption_m32 = document.getElementById("cloud_absorption_m32").value;
    var cloud_absorption_m33 = document.getElementById("cloud_absorption_m33").value;

    var Fog = ` {
               "format_version": "1.16.100",
               "minecraft:fog_settings": {
                 "description": {
                   "identifier": "UFG:${fog_name_input}"
                 },
                 "distance": {
                   "air": {
                     "fog_start": "${air_fog_start_input}",
                     "fog_end": "${air_fog_end_input}",
                     "fog_color": "${air_fog_color_input}",
                     "render_distance_type": "${air_render_distance_type}"        
                   },
                   "water": {
                    "fog_start": "${water_fog_start_input}",
                    "fog_end": "${water_fog_end_input}",
                    "fog_color": "${water_fog_color_input}",
                    "render_distance_type": "${water_render_distance_type}"
                   },
                   "weather": {
                    "fog_start": "${weather_fog_start_input}",
                    "fog_end": "${weather_fog_end_input}",
                    "fog_color": "${weather_fog_color_input}",
                    "render_distance_type": "${weather_render_distance_type}"
                   },
                   "lava": {
                    "fog_start": "${lava_fog_start_input}",
                    "fog_end": "${lava_fog_end_input}",
                    "fog_color": "${lava_fog_color_input}",
                    "render_distance_type": "${lava_render_distance_type}"
                   },
                   "lava_resistance": {
                    "fog_start": "${lava_resistance_fog_start_input}",
                    "fog_end": "${lava_resistance_fog_end_input}",
                    "fog_color": "${lava_resistance_fog_color_input}",
                    "render_distance_type": "${lava_resistance_render_distance_type}"
                   }
                 },
                 "volumetric": {
                   "density": {
                     "air": {
                       "max_density": "${air_max_density}",
                       "max_density_height": "${air_max_density_height}",
                       "zero_density_height": "${air_zero_density_height}"
                     },
                     "water": {
                       "max_density": "${water_max_density}",
                       "uniform": "${water_uniform}"
                     },
                     "lava": {
                       "max_density": "${lava_max_density}"
                       "max_density_height": "${lava_max_density_height}",
                       "zero_density_height": "${lava_zero_density_height}"
                     },
                     "lava_resistance": {
                       "max_density": "${lava_resistance_max_density}",
                       "uniform": "${lava_resistance_uniform}"
                     }
                   },
                   "media_coefficients": {
                     "air": {
                       "scattering": [ "${air_scattering_m11}", "${air_scattering_m12}", "${air_scattering_m13}", ],
                       "absorption": [ "${air_absorption_m11}", "${air_absorption_m12}", "${air_absorption_m13}" ]
                     },
                     "water": {
                       "scattering": [ "${water_scattering_m21}", "${water_scattering_m22}", "${water_scattering_m23}" ],
                       "absorption": [ "${water_absorption_m21}", "${water_absorption_m22}", "${water_absorption_m23}" ]
                     },
                     "cloud": {
                       "scattering": [ "${cloud_scattering_m31}", "${cloud_scattering_m32}", "${cloud_scattering_m33}" ],
                       "absorption": [ "${cloud_absorption_m31}", "${cloud_absorption_m32}", "${cloud_absorption_m33}" ]
                     }
                   }
                 }
               }
             }`;

    document.getElementById("fogTextArea").value = Fog;
}

function clearTextArea() {
    document.getElementById("fogTextArea").value = "";
}

function downloadFog() {
    var fog_name = document.getElementById("fog_name_input").value;
    var fog = document.getElementById("fogTextArea").value;

    var filename = `fog:${fog_name}.json`;

    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(fog));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



