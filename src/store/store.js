import { createStore, combineReducers } from "redux";

//-------* Constants-types
const PROVIDE_KEY = "PROVIDE_KEY";
const PROVIDE_RAW_TEXT = "PROVIDE_RAW_TEXT";
const PROVIDE_ENCRYPTED_TEXT = "PROVIDE_ENCRYPTED_TEXT";
const PROVIDE_RAW_TEXT_FROM_ALGORITHM = "PROVIDE_RAW_TEXT_FROM_ALGORITHM";
const PROVIDE_ENCRYPTED_TEXT_FROM_ALGORITHM = "PROVIDE_ENCRYPTED_TEXT_FROM_ALGORITHM";

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

export const provideRawTextFromAlgorithm = rawText => {
  return {
    // This is the action (form)
    type: PROVIDE_RAW_TEXT_FROM_ALGORITHM,
    payload: {
      rawText: rawText,
      isActive: false
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

export const provideEncryptedTextFromAlgorithm = encryptedText => {
  return {
    // This is the action (form)
    type: PROVIDE_ENCRYPTED_TEXT_FROM_ALGORITHM,
    payload: {
      encryptedText: encryptedText,
      isActive: false
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
  if ((action.type === PROVIDE_RAW_TEXT)||(action.type === PROVIDE_RAW_TEXT_FROM_ALGORITHM)) {
    return [...listOfRawTexts, action.payload];
  } else if (action.type === PROVIDE_ENCRYPTED_TEXT_FROM_ALGORITHM) {
    listOfRawTexts = [
      ...listOfRawTexts,
      {
        rawText: listOfRawTexts[listOfRawTexts.length - 1].rawText,
        isActive: true
      }
    ];
    return listOfRawTexts;
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
  if ((action.type === PROVIDE_ENCRYPTED_TEXT)||(action.type === PROVIDE_ENCRYPTED_TEXT_FROM_ALGORITHM)) {
    return [...listOfEncryptedTexts, action.payload];
  } else if (action.type === PROVIDE_RAW_TEXT_FROM_ALGORITHM) {
    listOfEncryptedTexts = [
      ...listOfEncryptedTexts,
      {
        encryptedText:
          listOfEncryptedTexts[listOfEncryptedTexts.length - 1].encryptedText,
        isActive: true
      }
    ];
    return listOfEncryptedTexts;
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


//-------* Binding reducers into single unit
const allReducers = combineReducers({
  key: key,
  rawText: rawText,
  encryptedText: encryptedText,
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
