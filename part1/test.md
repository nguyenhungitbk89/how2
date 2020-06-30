## React interview questions

1. What is state and props in reactjs?
    - Both props and state are plain JS objects. Their changes trigger a render update
    - Props are variables passed to it by its parent component, and it is immutable.
    - State are variables, but directly initialized and managed by the component and it is mutations.

2. What is high order component? How do you use it?
    - A higher-order component (HOC) is a function that takes a component and returns a new component. HOC is the advanced technique for reusing a component logic, that converts a component into another component.
    - In Reactjs HOC is used to connect component with Redux store, Router, ...

Sample code:
    var hocData = {
    data: 'Hello world HOC!',
    }

    var MyHOC = ComposedComponent => class extends React.Component {
        componentDidMount() {
            this.setState({
                data: hocData.data
            });
        }
        render() {
            return <ComposedComponent {...this.props} {...this.state} />;
        }
    };
    class MyComponent extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.data}</h1>
                </div>
            )
        }
    }

export default MyHOC(MyComponent);

3. What is context? What are the benefits of it?
    - In Reactjs context provides a way to pass data through the component tree without having to pass props down manually at every level. it used to share data for a tree of React components.
    - Context help easily to share data between a tree of react components 

4. How to assign and change the value of state in a component?
    - We use function setSate to change state value.

5. Could you explain the life-cycle of a react component?
React component has 3 phases:
- Mounting: when a component is created
    + constructor:
    + render: 
    + componentDidMount
- Updating: when a component being updated
    + shouldComponentUpdate
    + render
    + componentDidUpdate
- Unmounting: when a component is being to destroyed
    + componentWillUnmount

6. What is fragment in react?
    It is a common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. when we want to return multiple elements in react element, we can use fragments to wrap a list of elements without add extra node to DOM
7. What is ref in react?
    - ref is the way to can access DOM element and React element
8. What is container component? What is presentational component?
    - Container components are components that handle the logic of of the app, and they are parent component of Presentational component
    - Presentational components are component that main purpose is display data

9. How to pass a function to a component?
    - you can pass a function in to component as a component props
10. What is portal?
    - Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
11. How to share state between parent component and child component? How to share state between sibling components?
    - Parent and child component:
        + use props to pass data from parent
        + use React context
        + use library to manage state at client side like Redux, Mobx
    - Sibling components:
        + use props and callback.
        + use React context
        + use library to manage state at client side like Redux, Mobx
