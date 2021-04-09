//Based on code from https://stackoverflow.com/questions/8572826/generic-deep-diff-between-two-objects/31010495 / http://jsfiddle.net/cs5d3uwn/

import every from './every';

class Difference {
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}


export const VALUE_CREATED = 'created';
export const VALUE_UPDATED = 'updated';
export const VALUE_DELETED = 'deleted';
export const VALUE_UNCHANGED = 'unchanged';

export default function objectDiff(obj1, obj2) {
  if (isFunction(obj1) || isFunction(obj2)) {
    throw 'Invalid argument. Function given, object expected.';
  }
  if (isValue(obj1) || isValue(obj2)) {
    return new Difference(compareValues(obj1, obj2), obj1 === undefined ? obj2 : obj1);
  }

  //If this is a collection object
  var diff = isArray(obj1) && isArray(obj2) ? [] : {};

  for (var key in obj1) {
    if (isFunction(obj1[key])) {
      continue;
    }

    var value2 = undefined;
    if (obj2[key] !== undefined) {
      value2 = obj2[key];
    }

    diff[key] = objectDiff(obj1[key], value2);
  }

  for (var key in obj2) {
    if (isFunction(obj2[key]) || diff[key] !== undefined) {
      continue;
    }

    diff[key] = objectDiff(undefined, obj2[key]);
  }

  //if every value is a diff that = unchanged...
  if(every(diff, isUnchanged)) {
    return new Difference(VALUE_UNCHANGED, obj2);
  }

  return diff;

}

function compareValues(value1, value2) {
  if (value1 === value2) {
    return VALUE_UNCHANGED;
  }
  if (isDate(value1) && isDate(value2) && value1.getTime() === value2.getTime()) {
    return VALUE_UNCHANGED;
  }
  if (value1 === undefined) {
    return VALUE_CREATED;
  }
  if (value2 === undefined) {
    return VALUE_DELETED;
  }
  return VALUE_UPDATED;
}

function isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

function isArray(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
}

function isDate(x) {
  return Object.prototype.toString.call(x) === '[object Date]';
}

function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

function isValue(x) {
  return !isObject(x) && !isArray(x);
}

//helpers to process results
export function isDiff(obj) {
  return obj instanceof Difference;
}

export function isCreated(obj) {
  return isDiff(obj) && obj.type === VALUE_CREATED;
}

export function isDeleted(obj) {
  return isDiff(obj) && obj.type === VALUE_DELETED;
}

export function isUpdated(obj) {
  return isDiff(obj) && obj.type === VALUE_UPDATED;
}

export function isUnchanged(obj) {
  return isDiff(obj) && obj.type === VALUE_UNCHANGED;
}
