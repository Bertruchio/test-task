import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)


const uniqueIds = new Set();

function decodeFields(encoded, translations) {
    const decoded = encoded.map(item => {
      const decodedItem = {...item};
      for (const key in decodedItem) {
        if (key.endsWith('Id') && !['_groupId', 'service', 'formatSize', 'ca', 'groupId'].includes(key)) {
            if (item[key] !== null) {
                uniqueIds.add(item[key]);
            }
            const translation = translations[decodedItem[key]];
            if (translation !== undefined) {
                decodedItem[key] = translation;
            }
        }
      }
      return decodedItem;
    });
    
    return decoded;
}
  
const decoded = decodeFields(encoded, translations);

console.log(decoded);

console.log("Unique IDs:", Array.from(uniqueIds));