### **ref**

`ref` is a way to create a reference to a DOM element or a class component instance. When you create a ref using React.createRef(), it gives you an object that has a current property. This property can be assigned to a DOM element or component, allowing you to directly access it.

Here's a simple example where we focus on an input field:
```jsx
    import React from 'react';

    class SimpleRefExample extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    };

    render() {
        return (
        <div>
            <input ref={this.inputRef} type="text" />
            <button onClick={this.focusInput}>Focus the input</button>
        </div>
        );
    }
    }

    export default SimpleRefExample;
```

In this example:

- We create a ref using React.createRef().
- We attach this ref to an input element.
- When the button is clicked, the input field is focused programmatically.


### **useRef**
`useRef` is a hook that serves a similar purpose but is used in functional components. It returns a mutable ref object which persists for the full lifetime of the component.

Complex Example:
Now let’s consider a more complex example where we use useRef to manage both a DOM reference and a mutable value.

```jsx
    import React, { useRef, useEffect } from 'react';

    const ComplexUseRefExample = () => {
    const inputRef = useRef(null);
    const countRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
        countRef.current += 1; // increment the count
        console.log('Count:', countRef.current);
        }, 1000);

        return () => clearInterval(interval); // clean up the interval on unmount
    }, []);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button onClick={focusInput}>Focus the input</button>
        <p>Count: {countRef.current}</p>
        </div>
    );
    };

    export default ComplexUseRefExample;
```

In this example:

- We use useRef to create two refs: inputRef for the input element and countRef to store a count value.
- Inside a useEffect, we set up an interval that increments countRef.current every second. Since countRef is a mutable reference, it retains its value across re-renders without causing a re-render when updated.
- The button allows focusing on the input field as in the previous example.

**Summary**
- ref is used in class components to directly interact with DOM elements or class component instances.
- useRef is used in functional components, offering a way to manage mutable values and DOM references that persist across renders.
- Both ref and useRef help bypass React's state management when you need direct access to the DOM or to keep mutable values.