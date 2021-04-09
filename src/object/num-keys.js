export default function objectNumKeys(obj) {
  if(!obj) {
    return 0;
  }

  let count = 0;

  for( let key in obj) {
    if(obj.hasOwnProperty(key)) {
      count++;
    }
  }

  return count;
}
