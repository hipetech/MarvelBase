import React from 'react';
import './App.scss';
import NavigationBar from './components/navigationBar/navigationBar';
import {Route, Routes} from 'react-router-dom';
import CharacterPage from './pages/characterPage';
import ComicsPage from './pages/comicsPage';

function App() {
    return (
        <>
            <div className="contentBox">
                <Routes>
                    <Route path={'/'} element={<NavigationBar />}>
                        <Route path={'/'} element={<CharacterPage />} />
                        <Route path={'comics'} element={<ComicsPage />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
