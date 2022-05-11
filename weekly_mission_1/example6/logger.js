<<<<<<< HEAD
class Logger {
    constructor (name) {
      this.count = 0
      this.name = name
    }
  
    log (message) {
      this.count++
      console.log('[' + this.name + '] ' + message)
    }
  }
  
  module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
=======
class Logger {
    constructor (name) {
      this.count = 0
      this.name = name
    }
  
    log (message) {
      this.count++
      console.log('[' + this.name + '] ' + message)
    }
  }
  
  module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
>>>>>>> e36a4fc5e21d62b27350b57eff39fd1d3414d8a3
  module.exports.Logger = Logger // Clase