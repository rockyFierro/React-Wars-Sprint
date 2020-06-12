# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS is a library used to create interactive user interfaces... really cool looking graphic comonents that are quick to react to user input. I have trouble saying it solves problems because it's a tool - and every tool should be used for specific problems. This one in particular lets developers code faster than using vanilla javascipt by using components. It helps us craete reusable constructs that we can use to build a site with, more than that it lets us build interactive components. We can write less code and save time switching between files by using JSX.

1. Describe component state.
    states are really cool, they act a lot like props but can be synced with the component or an object in the component to render/update only when needed - quickly changing the component and allowing it to... react.
1. Describe props.
    Props are properties, they look a lot like html attributes but you can pass javascript through them when you are using JSX and that makes life a lot easier.
1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
    something that effects something outside of its scope - they can be synced with hooks like useEffect to change a state or a prop when the user has done something to trigger the object they are synced with - if i add a sideEffect to sync with a button the user can use the button and that will cause the sideEffect to fire - with something that submits a form, or makes an object move 5 pixels to the right, or whatever the side effect is.
