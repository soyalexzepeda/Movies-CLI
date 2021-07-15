const Movie = require("./Movie");

class Movies {
     _list = {}

     constructor() {
          this._list = {}
     }

     get listArr() {
          const movies = [];
          Object.keys( this._list ).forEach( key => {
               const movie = this._list[key];
               movies.push(movie);
          });

          return movies;
     }

     createMovie( name = '' ) {
          console.log();
          const movie = new Movie( name );
          this._list[movie.id] = movie;
          console.log( `Movie created successfully`.green );
     }

     loadMovies( movies = [] ) {
          movies.forEach( movie => {
               this._list[movie.id] = movie;
          });
     }

     listComplete() {
          console.log();
          this.listArr.forEach( ( values, index ) => {                    
               const message = `${`${ index + 1 }`.green}. ${ values.name }`;
               console.log( message );
          });   
     }

     searchMovie( name = '' ) {
          console.log();
          const match = this.listArr.find( value => value.name === name );
          if ( !match ) return console.log( `No results found`.red );
          console.log( match );
     }

     updateMovie( id = '', name = '' ) {
          console.log();
          const match = this.listArr.find( value => value.id === id );
          match.name = name;
          console.log( `Movie updated successfully`.green );
     }

     deleteMovie( id = '' ) {
          console.log();
          if( this._list[id] ) {
               delete this._list[id];
               console.log( `Movie deleted successfully`.green );
          }
     }
}

module.exports = Movies;