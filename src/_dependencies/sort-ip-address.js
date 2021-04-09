import memoize from 'memoizee';

const Address4 = require('ip-address').Address4;
const Address6 = require('ip-address').Address6;

//will return null is not a valid IP address
export const normaliseIPAddress = memoize(function (str) {
  if(!str || !(typeof(str) === 'string')) {
    return null;
  }

  str = str.trim();

  let retVal = null;

  let address = new Address4(str);

  if(address.isValid()) {
    //convert to array of integers
    retVal = address.correctForm().split('.').map(v => +v);
  } else {
    address = new Address6(str);

    if(address.isValid()) {
      //convert to array of integers
      retVal = address.canonicalForm().split(':').map(v => parseInt(v, 16));
    }
  }

  return retVal;
}, {max: 500})

export default function compare(a, b) {
  a = normaliseIPAddress(a);
  b = normaliseIPAddress(b);

  if(a === null && b === null) {
    return 0;
  }

  if(a === null) {
    return 1;
  }

  if(b === null) {
    return -1;
  }

  return (a.length > b.length) ?
    1
    :
    ((a.length < b.length) ?
      -1
      :
      compareArrays(a, b)
    )
}

function compareArrays(a, b) {
  //compare each value in array
  for(let i = 0, l = a.length; i < l; i++) {
    if(a[i] > b[i]) {
      return 1;
    }

    if(a[i] < b[i]) {
      return -1;
    }
  }

  //If you get here, values are the same
  return 0;
}
