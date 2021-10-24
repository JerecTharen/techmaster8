
module.exports = class NullHelper{
    static GetIsNully(val){
        return val === null || val === undefined;
    }
    static GetIsEmpty(val){
        if(this.GetIsNully(val))
            return true;
        else
            switch(typeof(val)){
                case typeof({}):
                    return Object.keys(val).length === 0
                case typeof([]):
                    return val.length === 0;
                default:
                    throw new Error('Not a valid argument');
            }
    }
};