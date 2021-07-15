const { v4: uuidv4 } = require('uuid');

class Movie {
     id = uuidv4();
     name = '';

     constructor( name ) {
          this.name = name;
     }     
}

module.exports = Movie;