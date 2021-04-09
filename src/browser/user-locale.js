const browserUserLocale = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);

export default browserUserLocale;
