function DrinkingWater() {
    this.dw_data = null;
    this.xAxis_start = 2010;
    this.jurisdictionNames = {
        "All": "All",
        "IL": "IL",
        "IN": "IN",
        "MI": "MI",
        "MN": "MN",
        "NY": "NY",
        "OH": "OH",
        "PA": "PA",
        "WI": "WI",
        "EPA": "EPA",
    };
    this.metrics = {
        "Arsenic": {
            name: "Arsenic rule",
                unit: "number of violations per year"
        },
        "Disinfectants & Disinfection Byproducts": {
            name: "Disinfectants and Disinfection Byproducts Rule Family",
                unit: "number of violations per year"
        },
        "Microbials": {
            name: "Microbials Rule Family",
                unit: "number of violations per year"
        },
        "Nitrates": {
            name: "Nitrates Rule",
                unit: "number of violations per year"
        },
        "Other Inorganic Chemicals": {
            name: "Inorganic Chemicals Rule",
                unit: "number of violations per year"
        },
        "Radionuclides": {
            name: "Radionuclides Rule",
                unit: "number of violations per year"
        },
        "VOCs or SOCs": {
            name: "Volatile Organic Chemicals and Synthetic Organic Chemicals Rules",
                unit: "number of violations per year"
        },
 
    };
    this.units = {
    };


    this.init = function(data){
        this.dw_data = data;
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
    
        this.getJurisdictionData = function (jurisdictionName, ruleName) {
            var vals = $.grep(this.dw_data, function (element, index) {
                return element.State == (jurisdictionName)&& n.Rule===ruleName;
            });
        };

/*
    this.getJurisdictionData = function (jurisdictionName) {
        var vals = $(this.dw_data).filter(function(i, n) {
            return n.State===(jurisdictionName) 
        });

        return vals.map(function (v){
            return vals[v].data
        } );
    };

*/
}
