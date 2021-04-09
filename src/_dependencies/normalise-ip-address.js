const Address4 = require('ip-address').Address4;
const Address6 = require('ip-address').Address6;


export default function normaliseIPAddress(str) {
  if(!str || !(typeof(str) === 'string')) {
    throw new Error(`Invalid argument: 'str' must be a non-empty string, was '${str}'`);
  }

  str = str.trim();

  let address = new Address4(str);

  if(address.isValid()) {
    return address.correctForm();
  }

  address = new Address6(str);

  if(address.isValid()) {
    return address.canonicalForm();
  }

  throw new Error(`Invalid argument: 'str' must be a valid IPv4 or IPv6 address, was '${str}'`);
}
