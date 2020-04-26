import {Model} from "./model";

export class PartyAndPerson extends Model {

    yearsWithEmployer: number;
    lastName: string;
    occupation: string;
    gender: string;
    employmentStatusEnumId: string;
    socialSecurityNumber: string;
    _ENTITY_NAME_ =	"PartyAndPerson"
    description: string;
    // existingCustomer	null
    partyTypeId	= "PERSON";
    lastModifiedByUserLogin: Date = new Date();
    dataSourceId: string;
    maritalStatusEnumId: string;
    preferredCurrencyUomId: string;
    nickname: string;
    partyId: string;
    memberId: string;
    height: number;
    passportNumber: string;
    comments: string;
    lastModifiedDate: Date = new Date();
    monthsWithEmployer: number;
    weight: number;
    birthDate: Date;
    firstName: string;
    createdDate: Date = new Date()
    statusId = "PARTY_ENABLED";
    cardId: string;
    middleName: string;
    personalTitle: string;
    deceasedDate: Date = new Date()
    totalYearsWorkExperience: number;

}
