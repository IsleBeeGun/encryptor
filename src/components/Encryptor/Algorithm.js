import { store } from "../../store/store";
const Algorithm = {
  perform() {
    console.clear();
    console.log(store.getState());
    let state = store.getState();
    console.log(state.key[state.key.length - 1].isActive);
    console.log(state.rawText[state.rawText.length - 1].isActive);
    console.log(state.encryptedText[state.encryptedText.length - 1].isActive);
  }
};

export default Algorithm;
