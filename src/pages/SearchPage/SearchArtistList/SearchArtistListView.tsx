import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import musicAPI, { ArtistProps } from '../../../services/musicAPI';
import ArtistCard from '../../Home/ArtistListView/ArtistCard';
import SearchArtistCard from './SearchArtistCard';

interface SearchArtistListViewProps {
    keyword : string
}

const SearchArtistListView = ({
    keyword
} : SearchArtistListViewProps) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [artistList, setArtistList] = useState<Array<ArtistProps>>([]);
    const [page, setPage] = useState<number>(1);

    const getQuery = () => {
        return {
            artist: keyword,
            page: page,
            limit: 10
        }
    }

    const loadArtist = () => {
        setLoading(true);
        musicAPI.getSearchArtist(getQuery())
            .then(response => {
                const data : Array<ArtistProps> = response.data.results.artistmatches.artist;
                setArtistList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        if (keyword) loadArtist();
    }, [keyword]);

    return (
        <div>
            <h2 style={{marginTop : '50px'}}>
                Artist Result
            </h2>
            <div className='custom-carrousel'>
                {artistList.map((artist, idx) => (
                        <SearchArtistCard key={idx} data={artist} onClick={() => { }} />
                ))}
            </div>
        </div>
    );
}

export default SearchArtistListView;
