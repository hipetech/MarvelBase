import React from 'react';
import './App.scss';
import NavigationBar from './components/navigationBar/navigationBar';
import {Route, Routes} from 'react-router-dom';
import CharacterPage from './pages/characterPage';
import ComicsPage from './pages/comicsPage';
import ItemPage from './pages/itemPage';
function App() {
    return (
        <>
            <div className="contentBox" >
                <Routes>
                    <Route path={'/'} element={<NavigationBar />}>
                        <Route path={'/'} element={<CharacterPage />} />
                        <Route path={'/comics'} element={<ComicsPage />} />
                        <Route path={'/character'}>
                            <Route path={':characterId'} element={<ItemPage />}/>
                        </Route>
                        <Route path={'/comic'}>
                            <Route path={':comicId'} element={<ItemPage />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
