# zendesk-ticket-viewer

### Assumptions:
  1. I assumed that we are allowed to use any external dependency to complete the project. The key dependencies that I used are React, Redux, Express, Jest, Axios and Bootstrap. I chose to use external dependencies since I felt that they would make my project more readable and easier to work with and also provide scalability in case changes or improvements are needed in the future

  2. I also assumed that all tickets should be request in a singular request rather than lazily requesting tickets as they are needed. The project requirements stated that all tickets should be requested and displayed so I decided to make my request return all tickets rather than just the paginated response tickets. I also decided to re-request tickets every time the main page is reloaded or visited in order to ensure that the current tickets being displayed are as up to date as possible. This however does make the page load somewhat slowly but I think that for a ticketing app its more important to be up to date than fast. 
  
### Installation instructions
  1. Make sure you have Node.js installed, most versions of Node.js should work. If yours does not work the app is confirmed to work properly on node 14.17.3
  2. Clone the project to your computer
  3. In the project root, run `npm install`
  4. `cd` into the client folder and run `npm install` again
  5. `cd` back into the root
  6. Run `npm run test` to run backend and then frontend unit tests, use `npm run test:client` to run exclusively frontend tests and use `npm run test:server` to run exclusively backend tests
  7. In the project root, run `npm run dev` to run the project. The api server is on port 5000 and the client is on port 3000. Please ensure both ports are free to be used. 
  8. Use the app however you wish!
  
 ### Usage instructions
  - The main page renders a list of all tickets, you can paginate through the tickets using the paginate tool at the top and bottom of the page. 
  - Click read more to enter the single view for a ticket
  - In the ticket single view, click go back to all tickets to return to home page and refetch tickets. 
