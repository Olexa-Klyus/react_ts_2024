import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {characrersActions} from "../../store";
import Character from "./Character";

const Characters = () => {
    const {ids} = useParams();
    console.log(ids)
    const dispatch = useDispatch();

    const {characters} = useSelector(state => state.characters)
    console.log(characters)

    useEffect(() => {
        dispatch(characrersActions.getAll({ids}))
    }, [ids])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;