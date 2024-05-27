import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import episode from "./Episode";
import Episode from "./Episode";
import {episodesActions} from "../../store";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {

    const {episodes} = useSelector(state => state.episodes);

    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page]);

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export default Episodes;