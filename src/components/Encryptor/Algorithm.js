import { store } from "../../store/store";
const Algorithm = {
  perform() {
    console.clear();
    // console.log(store.getState());
    let state = store.getState();
    console.log(`Key field: ${state.key[state.key.length - 1].isActive}`);
    console.log(`Raw text field: ${state.rawText[state.rawText.length - 1].isActive}`);
    console.log(`Encrypted field: ${state.encryptedText[state.encryptedText.length - 1].isActive}`);
  }
};

export default Algorithm;
