import { store } from "../../store/store";
const Algorithm = {
  perform() {
    console.clear();
    // console.log(store.getState());
    let state = store.getState();
    console.log(state);
    console.log(`Key field: ${state.key[state.key.length - 1].isActive}`);
    console.log(`Raw text field: ${state.rawText[state.rawText.length - 1].isActive}`);
    console.log(`Encrypted field: ${state.encryptedText[state.encryptedText.length - 1].isActive}`);
    console.log(`Current task: ${state.task[state.task.length - 1].task}`);
    
    console.log(`%c${state.key[state.key.length - 1].key}`,'color: white; background-color: orange');
    console.log(`%c${state.rawText[state.rawText.length - 1].rawText}`,'color: white; background-color: green');
    console.log(`%c${state.encryptedText[state.encryptedText.length - 1].encryptedText}`,'color: white; background-color: red');

    console.log(this.encrypt(state.key[state.key.length - 1].key, state.rawText[state.rawText.length - 1].rawText));
  },
  encrypt(key, text) {
    if (key===undefined) {    // This code here should be fixed
      key = 'password';
    }
    if (text===undefined) {
      text = '_';
    }
    let secret = this.keyToSecret(key);
    let arrayOfNumbers = this.textToArrayOfNumbers(text);
    let encryptedArrayOfNumbers = [];
    for (let i=0; i < arrayOfNumbers.length; i++) {
      while (i < arrayOfNumbers.length) {
        for (let j=0; j < secret.length; j++) {
          encryptedArrayOfNumbers.push( parseInt(arrayOfNumbers[i]) + parseInt(secret[j]));
        }
        i++;
      }
    }
    let encryptedText = this.arrayOfNumbersToText(encryptedArrayOfNumbers);
    return encryptedText;
  },
  decrypt(key, text) {

  },
  keyToSecret(key) {
    // Logic here is that we apply subkey to each sybol of key
    let subkey = Math.pow(key.length, 2); 
    let secret =[];
    for (let i=0; i < key.length; i++) {
        secret.push(parseInt(key.charCodeAt(i))+subkey);
    }
    return secret;
  },
  textToArrayOfNumbers(text) {
    let arrayOfNumbers = [];
    for (let i=0; i < text.length; i++) {
      arrayOfNumbers.push(parseInt(text.charCodeAt(i)));
    }
    return arrayOfNumbers;
  },
  arrayOfNumbersToText(arrayOfNumbers) {
    let text = '';
    for (let i=0; i < arrayOfNumbers.length; i++) {
      text += String.fromCharCode(arrayOfNumbers[i]);
    }
    return text;
  }
};

export default Algorithm;
