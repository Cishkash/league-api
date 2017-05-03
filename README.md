# league-api
My take on a League of Legends back-end boilerplate. A robust back end api for fetching data from the League of Legends developer api.

# Setting the app up
Here is a quick overview of dependencies and set up tasks to get you going

### Dependencies
  `NodeJS` https://nodejs.org/en/
  `Yarn` https://yarnpkg.com/en/
  
### Setting up
  Clone this repo: `git clone https://github.com/Cishkash/league-api.git`
  Command line: `yarn install`
  
### Tasks
  Firstly, you will need your API development key given to you by Riot. https://developer.riotgames.com/
  Once obtained, create a new `.env` file at the application's root. Export your module with this set up:
  ```
  File: .env

  module.exports = {
    apiKey: <your key>
  }
  ```
  This file is ignored at the root of the application. If you move this file, remember to update its path in the `.gitignore`   file.
  
### Stating your back end
  Once you are set up, it's as easy as `yarn start`. The default port is at `http://localhost:3000`. By this point, you should be able to navigate there in your browser.
  
  If you'd like to ensure you can successfully access the LoL API with your development key, navigate to `http://localhost:3000/api/shards` for a list of region data from their api.
  
That's it (so far)!
