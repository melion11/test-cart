import {Route, Routes} from 'react-router-dom';
import {Layout} from '../layout/layout';
import {Home} from '../components/home/home';
import {Cart} from '../components/cart/cart';
import './App.css'

function App() {
    return (
        <div className="App">
            <Routes>
              <Route path={'/'} element={<Layout/>} >
                    <Route index element={<Home/>} />
                    <Route path={'/cart'} element={<Cart/>}/>
              </Route>
            </Routes>
        </div>
    );
}

export default App;
