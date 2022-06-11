import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import musicAPI, { ArtistListProps, ArtistProps } from '../../../services/musicAPI';
import ArtistCard from './ArtistCard';

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
            })
    }

    useEffect(() => {
        loadArtist();
    }, []);

    return (
        <Row gutter={[16, 16]}>
            {artistList.map((artist, idx) => (
                <Col key={idx} xs={24}>
                    <ArtistCard data={artist} onClick={() => { }} />
                </Col>
            ))}
        </Row>
    );
}

export default ArtistListView;
