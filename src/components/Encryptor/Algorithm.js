import {store} from '../../store/store';
const Algorithm = {
    perform() {
        console.clear();
        console.log(store.getState());
        let myTestObj = store.getState();
        console.log(myTestObj.key.isActive);
        console.log(myTestObj.rawText.isActive);
        console.log(myTestObj.encryptedText.isActive);
    }
}

export default Algorithm