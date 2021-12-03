# zendesk-ticket-viewer

### Assumptions:
  1. I  assumed that all tickets should be requested right on launch rather than lazily requesting tickets as we paginate through the app. Basically I implemented pagination from the frontend rather than the backend. I did this primarily to satisfy the project requirement of "request all the tickets from your account". There also other benefits of requesting all tickets right away such as being able to rapidly swap pages between tickets since all tickets exist on the frontend as well as reduce discrepancies that might arise due to tickets being deleted or created on the server which might cause issues with cursor based pagination. The disadvantage is that for large volumes of tickets, fetching all tickets can become expensive. In the case where the project requirements were different, an alternative design would be to use cursor based pagination to only fetch 25 tickets and then save the `next` property request url in the brower state so that I can fetch results for the next page easily.

  2. I also assumed that we are allowed to use any external dependency to complete the project. The key dependencies that I used are React, Redux, Express, Jest, Axios and Bootstrap. I chose to use external dependencies since I felt that they would make my project more readable and easier to work with and also provide scalability in case changes or improvements are needed in the future
  
### Installation instructions
  1. Make sure you have Node.js installed, most versions of Node.js should work. If yours does not work the app is confirmed to work properly on node 14.17.3
  2. Clone the project to your computer
  3. In the project root, run `npm install`
  4. `cd` into the client folder and run `npm install` again
  5. `cd` back into the root and create a folder named `config` in the project root, then create a file in config called `default.json`
  7. In `default.json`, write a json object that includes the key `"token"` with your zendesk api token as the value, and the key `"subdomain"` with your zendesk subdomain as the value. The contents of `default.json` should look like this (values are examples only, please put in real values): 
  ```
  {
      "token": "Basic abcdefg" //Your zendesk api token
      "subdomain": "zccsubdomain.zendesk.com" //Your zendesk subdomain
   }
   ```
  9. Run `npm run test` in the project root to run backend and then frontend unit tests, or use `npm run test:client` to run exclusively frontend tests and use `npm run test:server` to run exclusively backend tests
  10. In the project root, run `npm run dev` to run the project. The api server is on port 5000 and the client is on port 3000. Please ensure both ports are free to be used. 
  
 ### Usage instructions
  - The main page renders a list of all tickets, you can paginate through the tickets using the paginate tool at the top and bottom of the page. 
  - Click read more to enter the single view for a ticket
  - In the ticket single view, click go back to all tickets to return to home page and refetch tickets. 
  - Refresh the page to refetch all tickets

### Design choices
1. Fetch all tickets by using a loop in the request to continue fetching tickets from zendesk api until all tickets are fetched (see assumption 1 for reasoning). To add on to this, I use a while loop to keep requesting tickets in the case where more than 100 tickets exist to be fetched since the fetch call only returns 100 tickets. Although fetching all tickets from the server isnt a recommended approach for scaleability, I wanted to comply with the assignment requirements so I choice to design the system in that way. In assumption 1 I state alternative designs if the requirement did not exist. 
2. I chose to use react primarily for reuseable components and make DOM manipulation when paginating through tickets easy.
3. I used Axios since it automatically throws server errors which makes error handling simple.
4. I chose to us Express and Node since our server side code was simple enough to handle with an express based backend and since the frontend was built with JavaScript, it made sense to build the backend in the same language just for the sake of consistency.
5. I chose to use redux to manage state. For an application of this size, normally redux would not be needed at all. However I made this design choice with the intention of making the app scalable. If we were to add more complicated states or data to the app, having redux to manage state would play an important role in keeping the code organized and make it easy to add other components and features. Also redux provides internal performance benefits and makes code easier to debug and test so from a developer point of view it made sense implement redux. 
6. Make a single ticket request to display individual ticket details rather than using the ticket state stored locally. This made sense from a best practices point of view since it reduces the amount of data handling complexity we must implement on the frontend. Since user technology can vary, I wanted to avoid complex client side logic. Instead I used the zendesk API to fetch individual ticket details to display. This individual request would be inexpensive and could be easily handled server side which is why I chose to implement them. 
7. For my UI, in multi ticket view I display key info like Ticket subject, id, status and a border colour that represents the status (new = yellow, open = blue, solved = green etc.) In single ticket view I included all this info as well as created/ last updated time, ticket tags, ticket description and requester id. I felt that this way multi ticket view would be great for scrolling through tickets while single ticket view provided all nessecary information. 
