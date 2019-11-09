import { store } from "../../store/store";
const Algorithm = {
  perform() {
    console.clear();
    // console.log(store.getState());
    let state = store.getState();
    console.log(`Key field: ${state.key[state.key.length - 1].isActive}`);
    console.log(`Raw text field: ${state.rawText[state.rawText.length - 1].isActive}`);
    console.log(`Encrypted field: ${state.encryptedText[state.encryptedText.length - 1].isActive}`);
    console.log(`Current task: ${state.task[state.task.length - 1].task}`);
    console.log(store.getState());
  }
};

export default Algorithm;
