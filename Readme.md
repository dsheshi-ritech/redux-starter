## Middleware

## Pipeline

dispatch -> root reducer -> child reducer

-store
-next
-action

- Dispatch functions

//Add logic to store
store.dispatch(() => {
// Call an API
// When promise is resolved => dispatch()
// If promise is rejected => dispatch()
})

## Thunk , middleware that dispatches functions

Automaticly with toolkit
or manually install library: redux-thunk
