# **Redux-thunk-loading-middleware**

A open-source written for redux thunk, which handle your loading process

## Problem?

Whenever you start a new project with redux thunk, the loading handler always take a lot of time, also it make your code to be huge. With my experience working with this problem, I decide to publish my code as open-source for using and also for others to contribute

## Installation

```
    npm install --save redux-thunk-loading-middleware
```

## API Document

### 1. Loading Middleware

This is the middleware to handle loading process, be careful to put it before thunk:

```
    import { createStore, applyMiddleware, compose } from 'redux';
    import thunk from 'redux-thunk';
    import { loadingMiddleware } from 'redux-thunk-loading-middleware';

    const store = createStore(
     	reducers,
    	applyMiddleware(loadingMiddleware, thunk),
    );
```

### 2. Loading Reducer

This is the reducer handler to work with dispatching from middleware, also store your loading state

```
	import { combineReducers } from 'redux';
    import { loadingReducer } from 'redux-thunk-loading-middleware';

  	export default combineReducers({
  		loading: loadingReducer,
  	});
```

## Examples

### 1. Redux action example

Because of using middleware, your function need to set type inside prototype as below

```
   const FETCH_COUPON = 'FETCH_COUPON';

   export const fetchCoupon = () => {
   	// set loading type, which is used in selector
   	callWithDispatch.type = FETCH_COUPON;
   	async function callWithDispatch(dispatch) {
   		try {
   			/*
   			* async action
   			*/
   			return true;
   		} catch (error) {
   			console.log(error);
   			return false;
   		}
   	}
   	return callWithDispatch;
   };
```

### 2. Selector example

```
  const isFetchingCoupon = (state) => state.loading[FETCH_COUPON]

  // map state to props
  const mapStateToProps = (state) => ({
  	loading: isFetchingCoupon(state)
  })
```

## Community Sites

This part is building, if you have any ideas or issues, you can contact in this Github repository

## License

MIT
