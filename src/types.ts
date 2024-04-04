export interface Hotel {
    id:                      number;
    propertyTypeId:          number;
    propertyType:            boolean;
    name:                    string;
    description:             string;
    code:                    string;
    baseRoom:                string;
    gradeId:                 number;
    gradeSort:               number;
    locationId:              number;
    accomTypeId:             number;
    viewId:                  number;
    kitchenId:               number;
    liftDistanceId:          number;
    villageCentreDistanceId: number;
    bathrooms:               number;
    standardPax:             number;
    maximumPax:              number;
    soldSeparately:          boolean;
    upgradedFacilities:      boolean;
    amenities:               { [key: string]: boolean };
    bedConfigurations:       number[];
    status:                  string;
    floorArea:               number;
    online:                  boolean;
    images:                  any[];
}
