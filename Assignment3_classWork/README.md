
##Hosted Link For Home page : https://react-assignment-vyru.vercel.app/
##Hosted Link for quotes Page : http://localhost:5173/quotes

##Overview



1. React: React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage their state efficiently. React uses a virtual DOM to improve performance by minimizing direct manipulation of the actual DOM.

2. **Props: Props (short for properties) are a way to pass data from parent to child components in React. They are read-only and help to make components more reusable and modular. Props are passed as attributes to the child component in JSX and accessed within the child component via `this.props` (for class components) or directly as arguments (for functional components).

3. Routes: Routes are used for navigation in a React application. They map specific URLs to different components, allowing users to navigate between different parts of the application. React Router is a popular library for handling routing in React applications. It allows you to define routes using components such as `BrowserRouter`, `Route`, and `Switch`.

Now, let's see how you've used these concepts to create your pages:

1. Home Page You've created a Home Page component using React. This component likely contains the main content that you want to display when users first visit your website. You may have used HTML elements like `<div>`, `<h1>`, `<p>`, etc., along with any necessary CSS for styling.

2. Quotes Page Similarly, you've created a Quotes Page component using React. This component probably displays a collection of quotes,by using the map over the array which conatins the collection of quotes. Like the Home Page, you've likely used HTML elements and CSS to structure and style the page.

3. Routes You've set up routes using React Router to navigate between these pages. This involves defining routes for each page/component and mapping them to specific URLs. For example, you might have a route for the Home Page ("/") and another for the Quotes Page ("/quotes"). When a user navigates to these URLs, the corresponding components are rendered.

4. Connecting Pages By setting up routes, you've connected the Home Page and Quotes Page in your application. Users can now navigate between these pages using links or programmatic navigation (e.g., clicking a button). React Router takes care of rendering the appropriate component based on the current URL.

Overall, you've leveraged the power of React to create modular, reusable components for your Home Page and Quotes Page, and you've used React Router to enable navigation between these pages in your application. This approach helps to keep your code organized, maintainable, and scalable as your application grows.
