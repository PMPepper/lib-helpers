import objectResolvePath from './resolve-path';
import objectNormalisePath from './normalise-path';

const BLANK = Object.freeze({});

//Immutably modify simple objects
//Doesn't deal with functions, symbols - only really intended for primitives, objects and arrays
export default function objectModify(baseObj, ...paths/*path, newValue*/) {
  if(paths.length % 2 !== 0) {
    throw new Error('modify requires pairs of path/newValue arguments')
  }

  const alreadyModifiedValues = {};
  const curFullPath = [];
  let obj = baseObj;

  for(let i = 0; i < paths.length; i+= 2) {
    const path = objectNormalisePath(paths[i]);
    const newValue = paths[i+1];

    if(objectResolvePath(obj, path) !== newValue) {//newValue is not the same as the current value at that path. Object(s) need to change
      if(obj === baseObj) {//create new base object
        obj = clone(baseObj);
      }

      curFullPath.length = 0;

      let curObj = obj;
      const endIndex = path.length - 1;

      path.forEach(function(curPathObj, index) {
        //TODO validation (Array must have two elements, the first a string)
        const [curPath, defaultValue] = (curPathObj instanceof Array) ? curPathObj : [curPathObj, BLANK];

        if(index !== endIndex) {
          //convert the current path to a unique string
          curFullPath.push(curPath);
          const curFullPathName = JSON.stringify(curFullPath);

          //if this value has not already been cloned...
          if(!alreadyModifiedValues.hasOwnProperty(curFullPathName)) {
            //...clone it, and record that it has been cloned
            curObj[curPath] = clone(curObj[curPath], defaultValue);
            alreadyModifiedValues[curFullPathName] = true;
          }

          //update curObj reference
          curObj = curObj[curPath];
        } else {
          //At the end of the path...
          if(typeof(curPath) === 'string' && curPath.endsWith('()') && curObj[curPath.substr(0, curPath.length - 2)] instanceof Function) {
            curObj[curPath.substr(0, curPath.length - 2)](newValue);
          } else if(newValue === undefined) {
            delete curObj[curPath]
          } else {
            curObj[curPath] = newValue;
          }
        }
      });
    }
  }

  return obj;
}

//Internal helpers

//What about things like functions, symbols etc? Not supported for now.
function clone(obj, defaultValue = BLANK) {
  switch(typeOf(obj)) {
    case 'array':
      return [...obj];
    case 'object':
      return {...obj};
    case 'undefined':
      return defaultValue ? clone(defaultValue) : defaultValue;
    default:
      return obj;
  }
}

function typeOf(obj) {
  if(obj instanceof Array) {
    return 'array';
  }

  return typeof(obj);
}
