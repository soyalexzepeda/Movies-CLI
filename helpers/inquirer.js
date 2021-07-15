require('colors');
const inquirer = require('inquirer');

const menu = async () => {
     console.clear();
     console.log(`====================`.green);
     console.log(`     Movies app     `);
     console.log(`====================\n`.green);

     const questions = [
          {
               type: 'list',
               name: 'option',
               message: 'What would you do like to do?',
               choices: [
                    {
                         value: 1,
                         name: `${'1.'.green} Create a movie`
                    },
                    {
                         value: 2,
                         name: `${'2.'.green} Show movie's list`
                    },
                    {
                         value: 3,
                         name: `${'3.'.green} Search a movie`
                    },
                    {
                         value: 4,
                         name: `${'4.'.green} Update movies`
                    },
                    {
                         value: 5,
                         name: `${'5.'.green} Delete movies`
                    },
                    {
                         value: 0,
                         name: `${'0.'.green} Exit`
                    }
               ]
          }
     ];

     const { option } = await inquirer.prompt( questions );

     return option;
}

const pause = async () => {
     console.log();

     const question = [
          {
               type: 'input',
               name: 'key',
               message: `Press ${'ENTER'.green} key to continue`
          }
     ];

     await inquirer.prompt( question );
}

const input = async () => {
     console.log();

     const question = [
          {
               type: 'input',
               name: 'name',
               message: 'Write some movie name:',
               validate: ( name ) => {
                    if( !name ) {
                         return `You cannot let empty input`
                    }

                    return true;
               }
          }
     ];

     const { name } = await inquirer.prompt( question );

     return name;
}

const menuMovies = async ( movies = [] ) => {
     console.log();
     
     const choices = movies.map( ( movie, index ) => ({
          value: movie.id,
          name: `${`${index + 1}`.green}. ${movie.name}`
     }));

     const questions = [
          {
               type: 'list',
               name: 'id',
               message: 'Select one choice from movies',
               choices
          }
     ];

     const { id } = await inquirer.prompt( questions );

     return id;
}

module.exports = {
     menu,
     pause,
     input,
     menuMovies
}