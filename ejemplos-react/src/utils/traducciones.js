const ES = {
  'hola_mundo': 'Hola mundo'
}

const EN = {
  'hola_mundo': 'Hello world'
}

export function translate(texto, lang = 'es') {
  switch(lang) {
    case 'es':
      return ES[texto] ? ES[texto] : 'No tenemos la traducción :('
    case 'en':
      return EN[texto] ? EN[texto] : 'No tenemos la traducción :('
    default:
      return 'No tenemos ese idioma'
  }
}