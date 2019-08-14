This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run the project

1. Clone the repo to your local machine
2. You will have to supply a .env file in the root of the project, with the url to upload the pdf - this is in the task description. The endpoint should have the key 'REACT_APP_S3_BUCKET_ENDPOINT'.
3. Run ' npm install' to install the required dependencies.
4. Run 'npm start', this command runs the app in the development mode
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### About the application

The application attempts to replicate the functionality of the company login page.

The application uses create-react-app for ease of development and  semantic-ui-react as the component framework. I had not used semantic-ui before and was interested in trying it out. Overall I think the layout, responsiveness and look of the framework components is very good. However, I did not realise the framework did not have a datepicker component and had to use a third party datepicker.

Routing within the app is taken care of by reach-router which is very easy too implement and has some nice a11y features.

I implemented styled-components for additional styling as it is my favourite way of styling React applications.

I took advantage of the latest version of React to use Hooks whenever I could, this includes using useReducer and useCointext hooks to implement a simple app state management solution.

The application is by no means finished , I need to remove magic strinbgs for labels and so on into the src.utils/copy file as demonstrated within the application. I also need to build out the user details preview page at present it ony loads the user sign in PDF. Tests and other none requirements were also left out as wre most a11y considerations, due to time considerations.

I hope you like what I have domne and would be happy to discuss any aspects of my approach if you wish.
