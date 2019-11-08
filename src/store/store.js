import { createStore, combineReducers } from "redux";

//-------* Constants-types
const PROVIDE_KEY = "PROVIDE_KEY";
const PROVIDE_RAW_TEXT = "PROVIDE_RAW_TEXT";
const PROVIDE_ENCRYPTED_TEXT = "PROVIDE_ENCRYPTED_TEXT";

//-------* Action creators (people)
const provideKey = key => {
  return {
    // This is the action (form)
    type: PROVIDE_KEY,
    payload: {
      key: key
    }
  };
};

const provideRawText = rawText => {
  return {
    // This is the action (form)
    type: PROVIDE_RAW_TEXT,
    payload: {
      rawText: rawText
    }
  };
};

const provideEncryptedText = encryptedText => {
  return {
    // This is the action (form)
    type: PROVIDE_ENCRYPTED_TEXT,
    payload: {
      encryptedText: encryptedText
    }
  };
};

//-------* Reducers (departments)

const key = (listOfKeys = [], action) => {
  if (action.type === PROVIDE_KEY) {
    return [...listOfKeys, action.payload];
  } else {
    return listOfKeys;
  }
};

const rawText= (listOfRawTexts = [], action) => {
  if (action.type === PROVIDE_RAW_TEXT) {
    return [...listOfRawTexts, action.payload];
  } else {
    return listOfRawTexts;
  }
};

const encryptedText= (listOfEncryptedTexts = [], action) => {
  if (action.type === PROVIDE_ENCRYPTED_TEXT) {
    return [...listOfEncryptedTexts, action.payload];
  } else {
    return listOfEncryptedTexts;
  }
};

//-------* Binding reducers into single unit
const allReducers = combineReducers({
  key: key,
  rawText: rawText,
  encryptedText: encryptedText
});

//-------* Creating Store
const store = createStore(allReducers);

//dispatch function belongs to store object
//dispatch function takes that form and automatically
//sends it to every department
// store.dispatch(createPolicy("Alex"));
// store.dispatch(createClaim("Alex", 100));
// store.dispatch(deletePolicy("Alex"));
//getState() lets us to access final database, it's current state
// console.log(store.getState());
export default store;
