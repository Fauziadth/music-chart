import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import musicAPI from '../../../services/musicAPI';
import ArtistCard from './ArtistCard';
import Loading from '../../../component/Loading/Loading';
import { ArtistListProps, ArtistProps } from '../../../services/models';

const ArtistListView = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [artistList, setArtistList] = useState<Array<ArtistProps>>([]);
    const [page, setPage] = useState<number>(1);

    const getQuery = () => {
        return {
            page: page,
            limit: 10
        }
    }

    const loadArtist = () => {
        setLoading(true);
        musicAPI.getTopArtisList(getQuery())
            .then(response => {
                const data: ArtistListProps = response.data.artists;
                setArtistList(data.artist);
                setLoading(false);
            })
    }

    useEffect(() => {
        loadArtist();
    }, []);

    if (isLoading) return (<Loading/>)

    return (
        <List
            size="large"
            bordered
            dataSource={artistList}
            renderItem={artist => <ArtistCard data={artist} onClick={() => { }} />}
        />
    );
}

export default ArtistListView;
