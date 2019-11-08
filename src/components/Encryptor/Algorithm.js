import {store} from '../../store/store';
const Algorithm = {
    perform() {
        console.clear();
        console.log(store.getState());
    }
}

export default Algorithm