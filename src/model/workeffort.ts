import {Model} from "./model";

export class WorkEffort extends Model{

    "workEffortId": string;
    "workEffortTypeId": string;
    "revisionNumber": number;
    "_ENTITY_NAME_": string;
    "_DELEGATOR_NAME_": string;
    "quantityToProduce": number;
    "estimatedStartDate": null;
    "createdTxStamp": number;
    "lastUpdatedTxStamp": Date = new Date();
    "priority": number;
    "currentStatusId": string;
    "estimatedMilliSeconds": number;
    "actualCompletionDate": number;
    "description": string;
    "workEffortName": string;
    "actualStartDate": number;
    "quantityProduced": number;
    "facilityId": string;
    "estimatedSetupMillis": number;
    "percentComplete": number
}