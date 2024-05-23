import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {characterService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../store";
import Character from "./Character";

const Characters = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);

    useEffect(() => {
        characterService.getAll(page).then(({data}) => dispatch(charactersActions.setResponce(data)))
    }, [page]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;