function ErieStat() {
    this.es_data = null;
    this.xAxis_start = 2008;
    this.watershedNames = {
        "Cattaraugus": "Cattaraugus Creek",
        "Cuyahoga": "Cuyahoga River",
        "Detroit": "Detroit River (U.S.)",
        "Grand": "Grand River-OH",
        "Grand (Ontario)": "Grand (Ontario) River",
        // "Huron": "Huron River",
        "Huron": "Huron River-OH",
        "Leamington": "Leamington Tributaries",
        "Maumee": "Maumee River",
        "Raisin": "River Raisin",
        "Portage": "Portage River",
        "Sandusky": "Sandusky River",
        "Thames": "Thames River",
        "Cedar-Toussaint": "Cedar-Toussaint",
        "Vermilion": "Vermilion River"
    };
    this.metrics = {
        "TP_L": {
            name: "Annual TP Loading",
                unit: "metric tons per year"
        },
        "SRP_L": {
            name: "Annual SRP Loading",
                unit: "metric tons per year"
        },
        "TP_FWMC": {
            name: "Annual TP FWMC",
                unit: "milligrams / liter per year"
        },
        "SRP_FWMC": {
            name: "Annual SRP FWMC",
                unit: "milligrams / liter per year"
        },
        "Discharge": {
            name: "Annual Discharge",
                unit: "million cubic meters per year"
        },
        "TP_L_S": {
            name: "Spring TP Loading",
                unit: "metric tons March through July"
        },
        "SRP_L_S": {
            name: "Spring SRP Loading",
                unit: "metric tons March through July"
        },
        "TP_FWMS_S": {
            name: "Spring TP FWMC",
                unit: "milligrams / liter March through July"
        },
        "SRP_FWMC_S": {
            name: "Spring SRP FWMC",
                unit: "milligrams / liter March through July"
        },
        "Discharge_S": {
            name: "Spring Discharge",
                unit: "million cubic meters March through July"
        },
        "AnnPercentReduction": {
            name: "Annual TP Percent Reduction",
                unit: "relative to 2008 baseline"
        },
        "AnnPercentReduction5Y": {
            name: "5 Year Average of Annual TP Percent Reduction",
                unit: "relative to 2008 baseline"
        },
    };
    this.units = {
    };
    this.targets = {
        "Cattaraugus River": {
            "Annual TP Loading": null,
            "Annual TP Percent Reduction": null,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Cedar-Toussaint": {
            "Annual TP Loading": null,
            "Annual TP Percent Reduction": null,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Cuyahoga River": {
            "Annual TP Loading": 271,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Detroit River (U.S.)": {
            "Annual TP Loading": 756,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Grand River-OH": {
            "Annual TP Loading": 99,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Grand (Ontario) River": {
            "Annual TP Loading": null,
            "Annual TP Percent Reduction": null,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Huron River-OH": {
            "Annual TP Loading": 123,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Leamington Tributaries": {
            "Annual TP Loading": null,
            "Annual TP Percent Reduction": null,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Maumee River": {
            "Annual TP Loading": 2287,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": 860,
            "Spring SRP Loading": 186,
            "Spring TP FWMC": 0.23,
            "Spring SRP FWMC": 0.05
        },
        "Portage River": {
            "Annual TP Loading": 215,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": 0.27,
            "Spring SRP FWMC": 0.05
        },
        "River Raisin": {
            "Annual TP Loading": 157,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": 50,
            "Spring SRP Loading": null,
            "Spring TP FWMC": 0.09,
            "Spring SRP FWMC": null
        },
        "Sandusky River": {
            "Annual TP Loading": 660,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": 230,
            "Spring SRP Loading": 43,
            "Spring TP FWMC": 0.23,
            "Spring SRP FWMC": 0.05
        },
        "Thames River": {
            "Annual TP Loading": null,
            "Annual TP Percent Reduction": null,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        },
        "Vermilion River": {
            "Annual TP Loading": 121,
            "Annual TP Percent Reduction": 40,
            "Spring TP Loading": null,
            "Spring SRP Loading": null,
            "Spring TP FWMC": null,
            "Spring SRP FWMC": null
        }
    };

    this.intro_SRP = "<p><h2>Click on the watershed of interest to see available data.</h2></p><p>The U.S. and Canada set phosphorus reduction goals (40 percent of 2008 loads) for eight priority tributary watersheds for both total and soluble reactive phosphorus (SRP) during March-July. SRP refers to phosphorus that is in a dissolved state and is of particular interest because it is the easiest form of phosphorus for algae to use to fuel growth.</p><p>The targets for these tributaries are expressed in terms of the flow weighted mean concentration (FWMC) – which is a way to normalize the load for flow. This is important because much of the load is delivered during storm events. It means that efforts to reduce the load must also include efforts to reduce the amount of flow (runoff). FWMC also provides an important backstop and relative measure of whether phosphorus control efforts are actually having an impact. For example, in a dry year the load may be low due to less runoff, but the FWMC will still be high if the proportion of phosphorus in that runoff is high.</p><p>The calculation of spring load requires high frequency flow and water quality monitoring, which is now in place for all nearshore priority tributaries. Not all tributaries had monitoring in place going back to 2008.</p>";
    this.intro_TP = "<p><h2>Click on the watershed of interest to see available data.</h2></p><p>The U.S. and Canada agreed to limit the total phosphorus (TP) load to Lake Erie’s central basin, which includes inputs from the St. Clair-Detroit River corridor, to 6,000 Metric Tons per year (MTA) annually. This was based on modeling of the hypoxic (low oxygen) zone in the lake. The modeling indicated that 6,000 MTA is the maximum load that would result in an acceptable dissolved oxygen concentration of at least 2 milligrams per liter in the bottom waters during the summer stratified period. This means that during the warmest months of the year, oxygen in Lake Erie’s water would be high enough to reduce the “dead zone” that has been cause for concern in recent years.</p><p>Ten priority watersheds were identified and assigned a target to reduce annual total phosphorus loads to 40 percent of the 2008 load, by water year (October-September). With the exception of the Detroit River connecting channel, these loads are estimated at the mouth of the tributary, using three pieces of information: 1) water quality monitoring data collected at the most downstream stream gage for the river; 2) reported data for point source dischargers beyond this point; an 3) an estimate for the unmonitored area beyond the gage, using a simple ratio for unit-area load. The Detroit River is not monitored directly; instead the load is computed as a sum of upstream tributary loadings and point source dischargers.</p>";
    this.intro_FWMC = "<p>The flow-weighted mean concentration (FWMC) adjusts phosphorus loads to normalize for tributary flow, which enables year-by-year comparisons that are not confounded by changes in flow. Click on the watershed of interest to see available data.</p>";

    this.narratives = {
        "Cattaraugus River": "",
            "Cuyahoga River": "The Cuyahoga River watershed is located in northeastern Ohio. It drains a total of 812 square miles (2,103 km<sup>2</sup>) and flows through all or part of six counties. Major municipalities partially or fully in the watershed include Cleveland and some of its suburbs, Akron, Kent and Cuyahoga Falls. ",
            "Detroit River (U.S.)": "The Detroit River flows for 32 miles (52 km) from Lake St. Clair to Lake Erie as a strait in the Great Lakes system and forms part of the border between Canada and the U.S.",
            "Grand River-OH": "The Grand River watershed is located in northeastern Ohio. It drains a total of 707 square miles (1,831 km<sup>2</sup>) and flows through all or part of five counties. Major municipalities partially or fully in the watershed include Orwell, Roaming Shores, Jefferson, West Farmington, Chardon and Painesville. The watershed is a mixture of forest, agricultural land uses such as cultivated crops and pasture and hay lands, and urban land uses. ",
            "Grand (Ontario) River": "",
            "Huron River-OH": "The Huron River watershed is located on the south shore of Lake Erie between Toledo and Cleveland, in Huron, Erie, Seneca, Richland and Crawford counties.  The Huron River is 59.7 miles (96 km) long and the watershed covers 403 square miles (1,044 km<sup>2</sup>).  Land use is primarily dedicated to agricultural activities with approximately 74 percent cropland, 15 percent woodland, and 3 to 11 percent urban and other land uses.",
            "Leamington Tributaries": "",//"The Leamington Tributaries are located in the southeastern area of the Essex Region in the municipalities of Leamington and Kingsville and drain directly to Lake Erie. Collectively the tributaries drain an area of approximately 70 km<sup>2</sup> (43 sq. mi), which is characterized by a high density of greenhouses, as well as row crop agriculture, specialty crops and residential areas.",
            "Maumee River": "The Maumee River watershed is located primarily in northwestern Ohio, with the western and northern boundaries extending into portions of Indiana and Michigan. The Maumee River watershed drains a total of 6,568 square miles (17,011 km<sup>2</sup>), 5,024 (13,012) of which are in Ohio. Major municipalities in the watershed include Toledo, Fort Wayne, Defiance, Findlay, Lima, Van Wert, Napoleon and Perrysburg. The watershed is predominantly comprised of cultivated crops with some urban development, hay and pasture lands, and forest.",
            "River Raisin": "The River Raisin is a river in southeastern Michigan that flows into Lake Erie. The area is an agricultural and industrial center. The river flows for almost 150 miles (241 km), draining an area of 1,072 square miles (2,780 km<sup>2</sup>) in the Michigan counties of Lenawee, Washtenaw, Jackson, Hillsdale, a portion of Fulton County, Ohio. The mouth of the river is located in Monroe County, Michigan.",
            "Portage River": "The Portage River is located in northwestern Ohio and drains 585 square miles (1515 km<sup>2</sup>). The Portage River flows into Lake Erie at Port Clinton in Ottawa County. The watershed is distributed across Ottawa, Sandusky, Hancock and Wood counties with a small portion in Seneca County. Land use in the watershed is comprised predominantly of 78 percent cultivated cropland, 11 percent developed land and 5 percent forest.",
            "Sandusky River": "The Sandusky River and Sandusky Bay watersheds are located in northwestern Ohio. They drain a total of 1,828 square miles (4,734 km<sup>2</sup>) and flow through all or part of 12 counties. Major municipalities in the watershed include Sandusky, Fremont, Tiffin, Bucyrus and Upper Sandusky. The watersheds are predominantly comprised of cultivated crops with some areas of urban development and pasture and hay lands. Wetlands are located in the northern portion of the watersheds.",
            "Thames River": "<i>*Provisional Data</i><br><br>The Thames River is 280 km (174 miles) long, draining approximately 5,800 km<sup>2</sup> (2,239 sq. mi.) of Southwestern Ontario to Lake St. Clair. The watershed is primarily (approximately 80 percent) agricultural, but also contains cities and towns such as London, Woodstock, Chatham, as well as numerous smaller urban areas, with a total population of approximately 600,000 people.",
            "Cedar-Toussaint": "The Toussaint River watershed is a 143 square-mile (371 km<sup>2</sup>) watershed in northwest Ohio. The Toussaint’s watershed is a flat glacial lake plain that was historically a vast forested marshland. Today, the drainage basin consists of highly productive agricultural land. Within the lower reach of the river, there are two significant protected natural areas.",
            "Vermilion River": "The Vermilion River watershed is located in northern Ohio, west of Cleveland.  It drains 269 square miles (697 km<sup>2</sup>) and flows through parts of five counties.  Land use in the watershed is predominantly comprised of cultivated crops with pockets of pasture and hay lands, urban development and forest.  Municipalities include Vermilion, New London, Greenwich and Wakeman."
    };

    this.init = function(data){
        this.es_data = data;
        Highcharts.setOptions({
            lang: {
                numericSymbols: null,
                thousandsSep: ',',
                // viewData: null
            }
        });
        Highcharts.Chart.prototype.viewData = function () {
            if (!this.insertedTable) {
                var div = document.createElement('div');
                div.className = 'highcharts-data-table';
                // Insert after the chart container
                this.renderTo.parentNode.insertBefore(div, this.renderTo.nextSibling);
                div.innerHTML = this.getTable();
                this.insertedTable = true;
                var date_str = new Date().getTime().toString();
                var rand_str = Math.floor(Math.random() * (1000000)).toString();
                this.insertedTableID = 'div_' + date_str + rand_str;
                div.id = this.insertedTableID;
            }
            else {
                $('#' + this.insertedTableID).toggle();
            }
        };
    };

    this.getWatershedData = function (watershedName, metricName) {
        var vals = $(this.es_data).filter(function(i, n) {
            return n.River===(watershedName)&& n.Fraction===metricName /*&& n.Value !== ""*/ // n.River===w_name
        });
        vals.sort(function(a, b){
            return (a.Year > b.Year) ? 1 : ((a.Year < b.Year) ? -1 : 0);
        });

        return vals.map(function (v){
            return vals[v].Value
        } );
    };

    this.buildNarratives = function (w_name) {
        $("#narrative-caption").text(w_name + " Watershed");
        var n = this.narratives[w_name];
        if(n != ""){
            $("#narrative-content").html(n);
            return true;
        }else{
            $("#narrative-content").html("<p style='font-style: italic'>* Content under development for " + w_name + " watershed.</p>");
            return false;
        }
    };
}
