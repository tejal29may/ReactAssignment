## Hosted Link : https://65ea2224a246ac67fd49fc3e--starlit-rabanadas-0186d6.netlify.app/

1. **State Management in the `App` Component**:
   - Created state variables in the `App` component to manage the list of products in the cart and the total sum.
   - Utilized the `useState` hook to initialize and update these state variables.
2. **Passing State-Modifying Functions as Props**:

   - Passed down the `updateCart` function as a prop to the `ProductList` component.
   - This function allows child components to update the state of the cart in the `App` component.

3. **Rendering Product Components**:

   - Created a list of products in the `ProductList` component.
   - Mapped over this list and rendered individual `Product` components, passing each product and the `updateCart` function as props.

4. **Interacting with State in Product Components**:

   - Implemented functionality in the `Product` component to interact with the state in the `App` component.
   - For example, when a user changes the quantity of a product, the `Product` component calls the `updateCart` function passed down from `App` to update the state accordingly.

5. **Displaying Total Sum**:
   - Calculated the total sum of the products in the cart in the `App` component.
   - Displayed this total sum in the `App` component's render method, providing users with real-time feedback on their cart's total cost.

Overall, by employing the lifting state up pattern, I've centralized the management of shared state in the `App` component and facilitated communication between different parts of My React application. This approach promotes better organization, reusability, and maintainability of My codebase.
