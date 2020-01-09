# User Login App
small vuejs user login app.

### Test user
email : test@test.com 
password: string

### Run Project:
 - `npm run install` Install dependencies.
 - `npm run serve` Runs Dev Env on localhost:8080.
 - `npm run build` Builds the project under /dist folder.
    
-----
### TO DO's: ( WORK IN PROGRESS )

- Add loading visualisation on ajax requests
- Proper Error msg notifications of failed request
- Responsive UI.
- The UUID and the token are not stored in the localStorage, I don't know how long the token is valid, so the login is invalidated on reload.
  This token and uuid is stored in the VueX store, these are only available during a single session.
- The User edit page is a separate page. If the page is navigated using the browsers navigation then the session breaks and you have to login again.
  This can be resolved if the tokens and UUID are stored in localStorage and then on load of the page it can send a login request.
