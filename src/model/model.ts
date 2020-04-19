
export abstract class Model {

    toJson(): Object {
        let fields = Object.entries(this)
        let jsonObj = {}
        for (let [field, value] of fields) {
            if (value instanceof Date) {
                jsonObj[field] = value.getTime();
            } else {
                jsonObj[field] = value;
            }
        }
        return jsonObj;
    }
}
