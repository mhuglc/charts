# README.md
## data.json 
The data source for ErieStat pilot. When updating the data, please make sure the following four required fields are included:
1. River

    This is how a watershed/river name is displayed on the visualization. It is defined as `watershedNames` in `ErieStat.js`.

2. Year

    Numerical values.

3. Fraction

    This is an abbreviation for metrics. Please use the following lookup table for details. This lookup is defined as `metrics` in `ErieStat.js`.

        "TP_L": "Annual TP Loading"
        "SRP_L": "Annual SRP Loading"
        "TP_FWMC":"Annual TP FWMC"
        "SRP_FWMC": "Annual SRP FWMC"
        "Discharge": "Annual Discharge"
        "TP_L_S": "Spring TP Loading"
        "SRP_L_S": "Spring SRP Loading"
        "TP_FWMS_S": "Spring TP FWMC"
        "SRP_FWMC_S": "Spring SRP FWMC"
        "Discharge_S": "Spring Discharge"

4. Value
    Numerical values
    
The Source field is not used for visualization purpose, but kept for reference. 

## ErieStat_data.json
We intend to use the ErieStat_data.json instead. This may be in effect for the next release.

## Nitrate_data.json 
For SWI Nutrient goal.

## OIT json files
Source data for the AIS Organisms in Trade dashboard based in PowerBI
