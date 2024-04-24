import React from 'react';
import './App.css';
import { CardResult } from './Components/CardResult/CardResult.tsx';
import { CardForm } from './Components/Form/Form.tsx';

function App() {
    return (
        <div className="App">
            <h1 className='title'>
                {'Payment Information'}
            </h1>
            <CardForm/>
            <CardResult/>
        </div>
    );
}

export default App;
