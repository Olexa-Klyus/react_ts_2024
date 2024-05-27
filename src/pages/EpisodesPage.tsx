import React from 'react';
import EpisodePagination from "../components/EpisodesContainer/EpisodePagination";
import Episodes from "../components/EpisodesContainer/Episodes";

const EpisodesPage = () => {
    return (
        <div>
            <Episodes/>
            <EpisodePagination/>
        </div>
    );
};

export default EpisodesPage;