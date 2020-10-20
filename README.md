# CONFID-19
## Description
This is a app who compiles certain info about coronavirus, developed for the Portuguese case.
## User Stories
- **Splash** As a anon I can see a page containing general info about Coronavirus in Portugal, and I can access to other areas clicking one of two buttons - See Worldwide Situation or - Go to my personal area.
- **See Worldwide Situation** As a anon I can see the worldwide situation of Coronavirus - Number of Infections - Number of Deaths, I can also search for another contry to see the situation there.
- **Go to my personal area** I will have to choose between the options - Login or Create Account.  
- **Create Account:** As an anon I can sign up in the platform so that I can login when I want it to.
- **Login:** As a user I can login to the platform so that I can see my personal area
- **Logout:** As a user I can logout from the platform so no one else can use it
- **My Personal Area** AS a user I can see the number of infections in my city on the last 24 hours, I can also regist my feelings during the pandemic season.
- **Regist your Feelings** As a user I can add a feeling, or delete a old feeling.
- **List of Feelings** As a user I want to see the feelings I already wrote. 
- **404** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault. 
## Backlog
Splash-Page:
- Choose between ENG/PT mode

Covid News:
- see a list of reliable news about Coronavirus and be able to share it of Facebook, than I know that I'm sharing "Non Fake News"

My Personal Area:
- see my "Corona Status"
- click on "update your status"
- click on get advices

Update your status:
- click on the Symptoms I feeling or click - Without Symptoms

Get Advice:
- Read advices
- Be able to call to SNS-24 directly from the app


# Client
## Routes
| Path | Component | Permissions | Behavior | 
|------|--------|--| -------|
| `/` | SplashPage| public <Route> | Home page|
| `/auth/signup` | SignupPage| anon only <AnonRoute> | signup form, link to login, navigate to homepage after signup, validate terms & conditions|
| `/auth/login` | LoginPage | anon only <AnonRoute> |login form, link to signup, navigate to homepage after login |
| `/auth/logout` | n/a| anon only | navigate to homepage after logout, expire session |
| `/countries` | CountriesList | public | shows all countries, search countries by name
| `/countries/:id` | CountriesDetail | public | one countrie, show one country detail
| `/feelings` | FeelingsCreatePage | user only | creates a new feeling
| `/feelings/:id` | FeelingDetailPage | user | see entire feeling, 
| `/feelings/:id` | na | user only | delete feelings
| `/profile/me` | ProfilePageComponent | user only | my details
| `**` | NotFoundPageComponent | public | 
## Components
- Header1
- Header2
- Footer1
- Footer2
- HomePage
- CountriesList
- GlobalNumbers
- SearchBar
- Authpage
- LoginPage
- SignupPage
- DataProtection
- Private
- UserPage
- InputFeeling
- ListFeelings
## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- User Service
  - user.profile()
  - user.feelings()
  - user.edit()


# Server
## Models
User model
```javascript
{
    username: {type: String, required: true, unique: true}, 
    city: {type: String, required:true}, 
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true}
}
```
Feelings
```javascript
{
    title: {type: String, required: true},
    description: {type: String, required: true} 
}
```

## API Endpoints (backend routes)
| HTTP Method | URL | Request Body | Success status | Error Status | Description |
| ----------- | --- | ------------ | -------------- | ------------ | ----------- |
| GET | `/auth/profile` |   | 200 | 404 | Check if user is logged in and return profile page |
| POST | `/auth/signup` | {username, city, email, password} | 201 | 404 | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST | `/auth/login` | {username,password} | 200 | 401| Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST | `/auth/logout` |   | 204 | 400 | Logs out the user |
| GET | `/feelings` |   | 200 | 400 | Get all my feelings |
| POST | `/feelings` | { title, description} | 201 | 400 | Create and save a new feeling |
| DELETE | `/feelings/:id` |   | 204 | 400 | Delete feelings from my list |    
| GET | `/epidemic_evolution/infecteds`|   | 200 | 400 | Show data related with the last 24h infection |
| GET | `/epidemic_evolution/country/infecteds`|   | 200 | 400 | Show data related with the last 24h infection |
| GET | `/epidemic_evolution/country/city/infecteds`|   | 200 | 400 | Show data related with the last 24h infection |
| GET | `/epidemic_evolution/deaths`|   | 200 | 400 | Show data related with the last 24h deaths|
| GET | `/epidemic_evolution/country/deaths`|   | 200 | 400 | Show data related with the last 24h deaths|
| GET | `/epidemic_evolution/country/city/deaths`|   | 200 | 400 | Show data related with the last 24h deaths|


## Links
### Trello/Kanban
[Link to your trello board](https://trello.com/b/qZdONyAK/confid-19)
### Figma
[Link to the Wireframes](https://www.figma.com/file/CloqECqoNGFQ1hSqa4VMwK/CONFID-19?node-id=0%3A1)
### Git
The url to your repository and to your deployed project
[Client repository Link](https://github.com/nuno-pacheco/confid-19)
[Server repository Link](http://github.com)
[Deploy Link](http://heroku.com)
### Slides
The url to your presentation slides
[Slides Link](http://slides.com)
The url to the product development
[Slides Link](https://docs.google.com/presentation/d/1fq_3l5_D9tjGaVz7lBsI3YACSJFa8WDyRbB3ybXnjVc/edit#slide=id.g9c512a804b_0_1)