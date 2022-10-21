/* 
Deep dive into useRef()
** useRef()
    - Returns an object.
    - The object has a property 'current' that we acces like an object.
    - The returned object will persist (do not being changed) for the full lifetime of the component.
    - Accepts one argument, which is the value to initialize the property current in the returned object.

** useRef() vs useState()
    - useRef() is persisted between renders, but useState() does not.
    - useRef() doesn't cause a component to re-render when changed, but useState() does.
    - The reference update is synchronous, while the state update is asynchronous and trigers a re-render.

** Use cases of useRef()
    - The storage that is persisted accross component renders. For example, with refs, we can store the previous value of a state variable.






*/