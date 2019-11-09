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

    let test = '';
    for (let i=0; i < state.key[state.key.length - 1].key.length; i++ ) {
        test += state.key[state.key.length - 1].key.charCodeAt(i) + ',';
    }
    console.log(`%c${test}`,'color: white; background-color: black');
  }
};

export default Algorithm;
