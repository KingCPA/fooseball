import React from 'react';
import brazil from './images/brazil.jpg';
import chinesetaiwanese from '.images/chinesetaiwanese.jpg';
import england from './images/england.jpg';
import italy from './images/italy.jpg';
import solvenia from './images/solvenia.jpg';
import spain from './images/spain.jpg';
import ukraine from './images/ukraine.jpg';
import welsh from './images/welsh.jpg';

export default class Flags extends React.Component {

    render() {
        return (
            <div className='flags'>
                <div className='flag-row'>
                    <Flags image={brazil} title='brazil' />
                    <Flags image={chinesetaiwanese} title='chinesetaiwanese' />
                    <Flags image={england} title='england' />
                </div>
                <div className='flag-row'>
                    <Flags image={italy} title='italy' />
                    <Flags image={solvenia} title='solvenia' />
                    <Flags image={spain} title='spain' />
                    <Flags image={ukraine} title='ukraine' />
                    <Flags image={welsh} title='welsh' />
                </div>
            </div>
        );
    }
} 