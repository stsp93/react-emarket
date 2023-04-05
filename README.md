# React E-commerce Shop

React App for course project defense

## Getting Started

- App uses this [REST API](https://github.com/stsp93/emarket-rest-api)
- To start development mode - `npm install` and `npm start` in the root folder
- For image upload the app requires dropbox api key stored in the root as environment variable *(.env)*         
  `REACT_APP_DROPBOX_API_KEY=<api-key-here>`

## Technologies used

- React
- React Router
- REST API
- Dropbox API

## Functionality

### 1. Header
Guest Header
![Guest Header](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Header%20guest.png)
Signed Header
![Guest Header](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Header%20signed.png)

Accessible by User and Guest
#### Features :
- Logo
- Dynamic Navigation Bar
- Search bar *(with option to select search category)*


### 2. Home Page
![HomePage](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/HomePage.png)
Accessible by User and Guest
#### Features :
- Carousel
- Category list


### 3. Results Page
![Results Page](https://github.com/stsp93/react-emarket/blob/main/screenshots/Results.png?raw=true)
Accessible by User and Guest
#### Features :
- Results list *(if any)*
- Option to set results per page
- Option to sort the results
- Pagination *(when multiple pages)*


### 4. Details Page
![Results Page](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Details.png)
Accessible by User and Guest
#### Features :
- View the item
- Switch between images *(when multiple)*
- Go back

Signed *(not owner)*
- Contact the owner

Signed *(owner)*
- Edit the listing
- Delete the listing *(Opens Confirmation Window)*      
![Confirm Window](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Confirm.png)      
*(On Yes redirects to Profile Page)*

`If a Guest try to contact the owner the Login Window will apear otherwise Send Message Window with the owner as recipient`

Guest Buttons            
![Owner Buttons](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/details%20buttons%20guest.png)

Owner Buttons       
![Owner Buttons](https://github.com/stsp93/react-emarket/blob/main/screenshots/datails%20buttons%20owner.png?raw=true)




### 5. Login Window
![Login Window](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Login.png)
Accessible by Guests in Home Page, Results Page, Details Page and 404 Page
#### Features :
- Server-Side error rendering on invalid Email/Password

`Uses SessionStorage to persist auth state`

### 6. Register Window
![Register Window](https://github.com/stsp93/react-emarket/blob/main/screenshots/Register.png?raw=true)
Accessible by Guests in Home Page, Results Page, Details Page and 404 Page
#### Features :
- Dynamic Client-Side error handling
- Server-Side error rendering

`Uses SessionStorage to persist auth state`


### 7. Profile Page
![Profile Page](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Profile.png)
Accessible by User
#### Features :
- Carousel
- Create Listing button *(opens Create Window)*
- Messages button *(Navigates to Messages Page)*
- Notification on new Message       
![New Message](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/New%20Message.png)
- Shows Users Listings *(if any)*
- Pagination *(when multiple pages)*


### 8. Create Listing Window
![Create Window](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Create.png)
Accessible by User
#### Features :
- Dynamic Client-Side error handling
- Server-Side error rendering
- Upload up to 3 images *(using Dropbox)*
- Option to review the images and remove undesired
- On Success React dynamically renders new Listing in the Profile Page


### 9. Edit Listing Window
![Edit Window](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Edit.png)
Accessible by User owner of the Listing
#### Features :
- Dynamic Client-Side error handling
- Server-Side error rendering
- Option to review the images and remove undesired
- Upload up to 3 images (using Dropbox)
- On Success React dynamically rerenders the updated info

### 10. Messages Page
![Messages Page](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Messages.png)

#### Features :
- Carousel
- Send Message button *(opens Send Message Window)*
- Back to users Listings button
- Show Messages List
- Option to reply to certain user *(opens Send Message Window with the sender as recipient)*
- Option to delete Message *(Opens Confirmation Window)*        
![Confirm Window](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/Confirm.png)      
*(On Yes React dynamically removes the message from the list)*

### 11. Send Message Window
![Messages Page](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/SendMessage.png)

#### Features :
- Dynamic Client-Side error handling
- Server error rendering on invalid recipient

### 12. Not Found Page 
![Not Found](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/404.png)

## Responsive design for Mobile/Tablet 

- Screenshots :
![Responsive 1](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/responsive/responsive1.png)
![Responsive 1](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/responsive/responsive2.png)
![Responsive 1](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/responsive/responsive3.png)
![Responsive 1](https://raw.githubusercontent.com/stsp93/react-emarket/main/screenshots/responsive/responsive4.png)

