# Answers

1.  What is React JS and what problems does it try and solve?

  - React is a JavaScript library created by Facebook that is designed to make creating User Interfaces more efficient and easier. It lets a developer abstract different parts of their app into components, which makes it easier to reuse and remix code throughout the app.

1.  What does it mean to _think_ in react?

    - To think in React, a developer needs to understand their app from a component level. What are the most basic parts of my app, and how can I make sure that they are only tasked to do the thing they're meant to do? It also means understanding the data flow model of React, which is like a waterfall. Data moves down from ancestors to children. It also means being able to understand the difference between static and dynamic data, and how to effetively utilize props or state depending on the type of data that is being taken in.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  - A Class, or Stateful, component is a class that extends React.Component and has the capability of having local state. State is mutable through the use of setState, and so makes it the tool to use when dynamic data needs to be manipulated in the app. A Functional component simply returns JSX without manipulating any data, and takes only props as arguments, in comparison to Class components which take props and have the ability to use state.

1. Describe state.
  - State is a way to store data local to a specific class component. It is technically immutable, and can only be changed by using the setState method of the component. State is best used to manipulate dynamic data, for example, to change something that renders to the screen depending on user input. A class component can pass its state down to child elements as props.

1. Describe props.
  - Props are immutable data that is passed into a class or functional component by its ancestor. Props is usually best used for static data that won't change through the lifetime of the app.
