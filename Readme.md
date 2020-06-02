## Store global state

1. Easier to implement

## Store all state

1. Unified data access
2. Cacheability
3. Easier debugging
4. More testable code

Exceptions(Form state) - Not saving form state in store
Because:

- Temporary values
- Too many dispatches (performance penalty, harder debugging)

## The more state on the store, the more can get out of Redux

If other components dont need the data, beter to store it locally in components(Forms)

Objects vs arrays
Objects -> Faster lookup but dont perserve order (fast lookup case)
Arrays -> iteration, but can be sorted (arranged data case)
Combined case: return 2 types of data (id array or, object )

## Normalization

We should not have dublicated data in store, we have to maintain consistency
(Flat data)
//Library for data normalization: paularmstrong/normalizr

## Selectors

Query data from store
Problem! => Returns different objects every time we query (it can be expansive in resources)

## Memoization

Technique for optimizing expensive functions
We cashe input and output to memorize function behavior
//Library for memoization: reselect
