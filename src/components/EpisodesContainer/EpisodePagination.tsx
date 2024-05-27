import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodePagination = () => {
    const {prev, next} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams({page: '1'});

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get("page") - 1}`);
            return prev
        })
    }
    const nextPage = () => {
        setQuery(next => {
            next.set('page', `${+next.get("page") +1}`);
            return next
        })
    }

    return (
        <div>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export default EpisodePagination;