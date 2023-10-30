# Battleships Gallery
This is a test task by Lesta Games. It uses their API https://vortex.korabli.su/api/graphql/glossary/.

The app has to be run on localhost, due to the API CORS restrictions.

Technologies used:
- TypeScript
- React
- GraphQL / Apollo client
- SASS

Features:
- Fetches data from the API with a GraphQL request
- Displays this data as a gallery of cards
- The gallery allows filtering by ship type, level or nation
- Clicking any card displays a lightbox with a detailed view

What I'd like to improve if I could spend more time on this project:
- Implement Redux for state management and store filter data there
- Implement virtualization for the gallery view
- Implement CSCC variables
- Improve responsive design, especially the filter selectors
- Implement scrolling for the ship details view, for cases where the description text might not fit the screen
