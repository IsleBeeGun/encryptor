import { createStore, combineReducers } from "redux";

//-------* Constants-types
const PROVIDE_KEY = "PROVIDE_KEY";
const PROVIDE_RAW_TEXT = "PROVIDE_RAW_TEXT";
const PROVIDE_ENCRYPTED_TEXT = "PROVIDE_ENCRYPTED_TEXT";

//-------* Action creators (people)
export const provideKey = key => {
  return {
    // This is the action (form)
    type: PROVIDE_KEY,
    payload: {
      key: key,
    }
  };
};

export const provideRawText = rawText => {
  return {
    // This is the action (form)
    type: PROVIDE_RAW_TEXT,
    payload: {
      rawText: rawText,
    }
  };
};

export const provideEncryptedText = encryptedText => {
  return {
    // This is the action (form)
    type: PROVIDE_ENCRYPTED_TEXT,
    payload: {
      encryptedText: encryptedText,
    }
  };
};

//-------* Reducers (departments)

const key = (listOfKeys, action) => {
  if (action.type === PROVIDE_KEY) {
    action.payload = {isActive:true};
    return [...listOfKeys, action.payload];
  } else {
    action.payload = {isActive:false};
    return [...listOfKeys, action.payload]
  }
};

const rawText = (listOfRawTexts, action) => {
  if (action.type === PROVIDE_RAW_TEXT) {
    action.payload = {isActive:true};
    return [...listOfRawTexts, action.payload];
  } else {
    action.payload = {isActive:false};
    return [...listOfRawTexts, action.payload];
  }
};

const encryptedText = (listOfEncryptedTexts, action) => {
  if (action.type === PROVIDE_ENCRYPTED_TEXT) {
    action.payload = {isActive:true};
    return [...listOfEncryptedTexts, action.payload];
  } else {
    action.payload = {isActive:false};
    return [...listOfEncryptedTexts, action.payload];
  }
};

//-------* Binding reducers into single unit
const allReducers = combineReducers({
  key: key,
  rawText: rawText,
  encryptedText: encryptedText
});

//-------* Creating Store
export const store = createStore(allReducers);

//dispatch function belongs to store object
//dispatch function takes that form and automatically
//sends it to every department
// store.dispatch(createPolicy("Alex"));
// store.dispatch(createClaim("Alex", 100));
// store.dispatch(deletePolicy("Alex"));
//getState() lets us to access final database, it's current state
// console.log(store.getState());
