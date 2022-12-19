import * as React from 'react';
import Search from './components/nav/Search';

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
    state = {}
    render() {
        return (
            <>
                <Search />
            </>
        );
    }
}

export default App;