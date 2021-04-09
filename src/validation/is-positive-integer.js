

export default function validationIsPositiveInteger(value) {
  if(value === null) {
    return false;
  }

  value = +value;//force to numeric

  return Number.isInteger(value) && value >= 0;
}
