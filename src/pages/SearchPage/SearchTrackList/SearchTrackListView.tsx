import React, { useEffect, useState } from 'react';

import musicAPI from '../../../services/musicAPI';
import SearchTrackCard from './SearchTrackCard';
import Loading from '../../../component/Loading/Loading';
import { SearchedTrackProps } from '../../../services/models';

interface SearchTrackListViewProps {
    keyword: string
}

const SearchTrackListView = ({
    keyword
}: SearchTrackListViewProps) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [trackList, setTrackList] = useState<Array<SearchedTrackProps>>([]);
    const [page, setPage] = useState<number>(1);

    const getQuery = () => {
        return {
            track: keyword,
            page: page,
            limit: 10
        }
    }

    const loadArtist = () => {
        setLoading(true);
        musicAPI.getSearchTrack(getQuery())
            .then(response => {
                const data: Array<SearchedTrackProps> = response.data.results.trackmatches.track;
                setTrackList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        if (keyword) loadArtist();
    }, [keyword]);


    return (
        <div>
            <h2 style={{ marginTop: '50px' }}>
                Tracks Result
            </h2>
            {isLoading ?
                <Loading /> :
                <div className='custom-carrousel'>
                    {trackList.map((track, idx) => (
                        <SearchTrackCard key={idx} data={track} onClick={() => { }} />
                    ))}
                </div>}
        </div>
    );
}

export default SearchTrackListView;
