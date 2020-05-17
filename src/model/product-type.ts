import {Model} from "./model";

export class ProductType extends Model {
    lastUpdatedStamp: Date;
    isPhysical: boolean;
    parentTypeId: string;
    isDigital: boolean;
    hasTable: boolean;
    createdTxStamp: Date;
    createdStamp: Date;
    description: string;
    lastUpdatedTxStamp: Date;
    productTypeId: string;
    _ENTITY_NAME_ = 'ProductType'
}
