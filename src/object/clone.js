
//deep clones an object/array. Will not handle classes etc, just intended for built in JS objects and array and simple props (including dates)
//also will not handle string props on arrays.
//This funs is not trying to be all things, just handle the basics and be fast.
export default function objectClone(obj) {
  if(obj === null || obj === undefined || isNaN(obj)) {
    return obj;
  }

  switch(typeof(obj)) {
    case 'undefined':
    case 'number':
    case 'bigint':
    case 'string':
    case 'symbol':
      return obj;
    case 'function':
      throw new Error('clone method does not handle functions');
    case 'object':
      if(obj instanceof Date) {
        return new Date(obj);
      } else if(obj instanceof Array) {
        //clone array - will only iterate regular props
        return obj.map(objectClone);
      } else {
        //assume basic object
        const keys = Object.keys(obj);
        const cloned = {};

        for(let i = 0; i < keys.length; i++) {
          const key = keys[i];

          cloned[key] = objectClone(obj[key]);
        }

        return cloned;
      }
    default:
      throw new Error(`Unknown property type: ${typeof(obj)}`);
  }
}
