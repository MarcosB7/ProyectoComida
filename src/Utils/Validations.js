//aqui no se hace export default, ya que van a ir mas de 1 funcion que se pueden usar
//desde otros componentes
export function validateEmail(email) {
  //funcion regular para controlar el email
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  //devuelve false incorrecto, true correcto
}
