import React from 'react';
import Episode from "../components/EpisodesContainer/Episode";
import EpisodePagination from "../components/EpisodesContainer/EpisodePagination";

const EpisodesPage = () => {
    return (
        <div>
            <Episode/>
            <EpisodePagination/>
        </div>
    );
};

export default EpisodesPage;