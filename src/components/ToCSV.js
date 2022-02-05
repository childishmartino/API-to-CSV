import React from 'react';
import { Button } from 'react-bootstrap'
import { searchCharacters } from '../utils/API';

const ToCSV = () => {
    return (
        <Button className='mt-3' onClick={searchCharacters} variant='info'>Download CSV of StarWars Characters</Button>
    )
}

export default ToCSV;