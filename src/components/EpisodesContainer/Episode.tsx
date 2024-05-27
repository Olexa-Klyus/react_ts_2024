import React from 'react';

const Episode = ({episode}) => {
    const {id, name, episode: chapter} = episode;
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>chapter : {chapter}</div>
        </div>
    );
};

export default Episode;