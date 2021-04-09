const Address4 = require('ip-address').Address4;
const Address6 = require('ip-address').Address6;


export default function isValidIPAddress(str, allowIPv6 = true) {
  if(!str || !(typeof(str) === 'string')) {
    return false;
  }

  str = str.trim();

  try {
    let address = new Address4(str);

    if(address.isValid()) {
      return true;
    }

    if(allowIPv6) {
      address = new Address6(str);

      if(address.isValid()) {
        return true;
      }
    }
  }
  catch(e) {
    debugger;
  }

  return false;
}

export function isInvalidIPAddress(str) {
  return !isValidIPAddress(str);
}
