import { createStore, combineReducers } from 'redux';

//-------* Action creators (people)
const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    // This is the form
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

const createPolicy = name => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: 20
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

//-------* Reducers (departments)

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  } else {
    return oldListOfClaims;
  }
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  } else {
    return bagOfMoney;
  }
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(policy => policy != action.payload.name);
  } else {
    return listOfPolicies;
  }
};

//-------* Binding reducers into single unit
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

//-------* Creating Store
const store = createStore(ourDepartments);

//dispatch function belongs to store object
//dispatch function takes that form and automatically
//sends it to every department
// store.dispatch(createPolicy("Alex"));
// store.dispatch(createClaim("Alex", 100));
// store.dispatch(deletePolicy("Alex"));
//getState() lets us to access final database, it's current state
// console.log(store.getState());
export default store;