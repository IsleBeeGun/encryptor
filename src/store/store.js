import { createStore, combineReducers } from "redux";

//-------* Constants-types
const PROVIDE_KEY = "PROVIDE_KEY";
const PROVIDE_RAW_TEXT = "PROVIDE_RAW_TEXT";
const PROVIDE_ENCRYPTED_TEXT = "PROVIDE_ENCRYPTED_TEXT";
const PROVIDE_TASK = "PROVIDE_TASK";

//-------* Action creators (people)
export const provideKey = key => {
  return {
    // This is the action (form)
    type: PROVIDE_KEY,
    payload: {
      key: key,
      isActive: true
    }
  };
};

export const provideRawText = rawText => {
  return {
    // This is the action (form)
    type: PROVIDE_RAW_TEXT,
    payload: {
      rawText: rawText,
      isActive: true
    }
  };
};

export const provideEncryptedText = encryptedText => {
  return {
    // This is the action (form)
    type: PROVIDE_ENCRYPTED_TEXT,
    payload: {
      encryptedText: encryptedText,
      isActive: true
    }
  };
};

export const provideTask = task => {
  return {
    // This is the action (form)
    type: PROVIDE_TASK,
    payload: {
      task: task
    }
  };
};

//-------* Reducers (departments)

const key = (listOfKeys = [{ key: "", isActive: false }], action) => {
  if (action.type === PROVIDE_KEY) {
    return [...listOfKeys, action.payload];
  } else {
    listOfKeys = [
      ...listOfKeys,
      { key: listOfKeys[listOfKeys.length - 1].key, isActive: false }
    ]; // I guess here (and below) I screw inmutability
    return listOfKeys;
  }
};

const rawText = (
  listOfRawTexts = [{ rawText: "", isActive: false }],
  action
) => {
  if (action.type === PROVIDE_RAW_TEXT) {
    return [...listOfRawTexts, action.payload];
  } else {
    listOfRawTexts = [
      ...listOfRawTexts,
      {
        rawText: listOfRawTexts[listOfRawTexts.length - 1].rawText,
        isActive: false
      }
    ];
    return listOfRawTexts;
  }
};

const encryptedText = (
  listOfEncryptedTexts = [{ encryptedText: "", isActive: false }],
  action
) => {
  if (action.type === PROVIDE_ENCRYPTED_TEXT) {
    return [...listOfEncryptedTexts, action.payload];
  } else {
    listOfEncryptedTexts = [
      ...listOfEncryptedTexts,
      {
        encryptedText:
          listOfEncryptedTexts[listOfEncryptedTexts.length - 1].encryptedText,
        isActive: false
      }
    ];
    return listOfEncryptedTexts;
  }
};

const task = (listOfTasks = [{ task: "encrypt" }], action) => {
  // Here I've decided not to update state
  if (action.type === PROVIDE_TASK) {
    return [...listOfTasks, action.payload];
  } else {
    return listOfTasks;
  }
};

//-------* Binding reducers into single unit
const allReducers = combineReducers({
  key: key,
  rawText: rawText,
  encryptedText: encryptedText,
  task: task
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
