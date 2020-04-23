import {Model} from "./model";

export class PartyAndContactMech extends Model{
    tnContactNumber: string
    _ENTITY_NAME_ = "PartyAndContactMech";
    contactMechTypeId: string = "EMAIL_ADDRESS";
    createdByUserLogin: string
    paAddress2: string
    paAddress1: string
    contactMechId: string
    partyTypeId: string
    infoString: string
    paHouseNumber: string
    preferredCurrencyUomId: string
    partyId: string
    monthsWithContactMech: number
    fromDate: Date = new Date();
    statusId = "PARTY_ENABLED";
    paPostalCode: string
    paCityGeoId: string
    description: string
    tnCountryCode: string
    roleTypeId: string
    comments: string
    lastModifiedDate: Date = new Date()
    verified: string
    paCity: string
    createdDate: Date = new Date()
    paPostalCodeExt: string
    paHouseNumberExt: string
    faZipFile: string
}
