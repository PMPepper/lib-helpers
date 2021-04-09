import deepCompare from './deep-compare';


export default function objectConditionalMerge(base, ...objs) {
  let newObj = base;
  const deep = objs[objs.length-1] === true ?
    objs.pop()
    :
    false;

  for(let i = 0; i < objs.length; i++) {
    const curObj = objs[i];
    const keys = Object.keys(curObj);

    for(let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const value = curObj[key];

      if(deep ? !deepCompare(newObj[key], value) : newObj[key] !== value) {
        if(newObj === base) {//only create newObj if it is needed
          newObj = {...base};
        }

        newObj[key] = value;
      }
    }
  }

  return newObj;
}
