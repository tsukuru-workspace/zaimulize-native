import { combineReducers } from 'redux';
import { AppNavigator } from '../navigators/AppNavigator';

const homeAction = AppNavigator.router.getActionForPathAndParams('Home');
const initialNavState = AppNavigator.router.getStateForAction(
    homeAction
);

function nav(state = initialNavState, action){
    let nextState;
    switch (action.type) {
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

const AppReducer = combineReducers({
    nav
});

export default AppReducer;