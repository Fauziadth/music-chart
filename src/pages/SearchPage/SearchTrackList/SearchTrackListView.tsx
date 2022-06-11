import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import musicAPI, { SearchedTrackProps } from '../../../services/musicAPI';
import SearchArtistCard from './SearchTrackCard';
import SearchTrackCard from './SearchTrackCard';

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
            <h2 style={{marginTop : '50px'}}>
                Tracks Result
            </h2>
            <div className='custom-carrousel'>
                {trackList.map((track, idx) => (
                    <SearchTrackCard key={idx} data={track} onClick={() => { }} />
                ))}
            </div>
        </div>
    );
}

export default SearchTrackListView;
