import { Provider } from 'react-redux'

import { QuestionBox } from "./components/QuestionBox";
import {Results} from "./components/Results";
import {store} from "./redux/store";
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <QuestionBox/>
                <Results />
            </div>
        </Provider>
    );
}

export default App;
