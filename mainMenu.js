const { 
     menu, 
     pause, 
     input,
     menuMovies
} = require("./helpers/inquirer");
const { 
     saveFile,
     readFile 
} = require('./helpers/files');
const Movies = require("./models/Movies");

const mainMenu = async () => {
     const movies = new Movies();
     let option;

     const data = readFile();
     if( data ) {
          movies.loadMovies( data );
     }

     do {
          option = await menu();
          
          switch ( option ) {
               case 1:
                    // Write a movie name
                    const name = await input();
                    
                    // Create movie in the class
                    movies.createMovie( name );
               break;

               case 2:
                    // List movies
                    movies.listComplete();
               break;

               case 3:
                    // Write a movie name
                    const searchName = await input();

                    // Search a movie from json
                    movies.searchMovie( searchName );
               break;

               case 4:
                    // Show list a movies
                    const movieIdUpdated = await menuMovies( movies.listArr );

                    // Write a new movie name
                    const newName = await input();
                    
                    // Update movie list
                    movies.updateMovie( movieIdUpdated, newName );
               break;

               case 5:
                    // Show list a movies
                    const movieIdDeleted = await menuMovies( movies.listArr );

                    // Delete movie
                    movies.deleteMovie( movieIdDeleted );
               break;
          }

          // Create or save file
          saveFile( movies.listArr );

          await pause();
     } while ( option !== 0 );
}

module.exports = {
     mainMenu
}