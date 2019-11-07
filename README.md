# User Login App
small vuejs user login app.

### Test user
email : test@test.com 
password: string

### Run Project:
 - install dependencies   
   `npm run install` 
 - Dev Env - localhost:8080
    `npm run serve` 
 - Build - builds the project under /dist folder.
    `npm run build`
    
-----
### TO DO's:

- Add loading visualisation on ajax requests
- Proper Error msg notifications of failed request
- Responsive UI.
- The UUID and the token are not stored in the localStorage, I don't know how long the token is valid, so the login is invalidated on reload.
  This token and uuid is stored in the VueX store, these are only available during a single session.
- The User edit page is a separate page. If the page is navigated using the browsers navigation then the session breaks and you have to login again.
  This can be resolved if the tokens and UUID are stored in localStorage and then on load of the page it can send a login request.

-----
### NOTE:
- I had this repo for personal project, due to lack of time I decided to revamp this (wasn't a very efficient idea) so you might see some old code that isn't related to this project.
- I copied the header navigation HTML and some styles from the HBL page and Patched them together. (Sounds cheap, but hey this means I can implement mockups pretty well (*_^))
