import formatNumber from './format-number';

export default function stringFormatDataSize(bytes, format, asArray = false, culture = null) {
  format = (format === true) ? 'si' : (format === false ? 'nonSI' : format);

  if(typeof(bytes) !== 'number') {
    throw new Error('bytes must a number, value is: "'+bytes+'"');
  }

  var thresh = format === 'si' ? 1000 : 1024;
   if(Math.abs(bytes) < thresh) {
       return asArray ? [bytes, 'B'] : bytes + ' B';//this space SHOULD be an nbsp
   }
   var units = format != 'nonSI'
       ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
       : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
   var u = -1;
   do {
       bytes /= thresh;
       ++u;
   } while(Math.abs(bytes) >= thresh && u < units.length - 1);

   const mag = Math.floor(Math.log10(bytes));
   const decimalPlaces = Math.max(0, 2 - mag);

   const formatOptions = {minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces};
   const formattedNumber = formatNumber(bytes, null, culture, formatOptions);

   return asArray ? [formattedNumber, units[u]] : formattedNumber+' '+units[u];//this space SHOULD be an nbsp
}
