import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import musicAPI, { ArtistListProps, ArtistProps } from '../../../services/musicAPI';
import { numberWithCommas } from '../../../utils/utlis';

interface ArtistCardProps {
    data: ArtistProps
    onClick: () => void
}

const ArtistCard = ({
    data,
    onClick
}: ArtistCardProps) => {

    return (
        <Col xs={24}>
            <Card onClick={() => { onClick() }}>
                <h2>{data.name}</h2>
                <h3>Playcount: {numberWithCommas(data.playcount)}</h3>
                <h3>Listener: {numberWithCommas(data.listeners)}</h3>
            </Card>
        </Col>
    )
}

const ArtistListView = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [artistList, setArtistList] = useState<Array<ArtistProps>>([]);

    const loadArtist = () => {
        setLoading(true);
        musicAPI.getTopArtisList()
            .then(response => {
                const data: ArtistListProps = response.data.artists;
                setArtistList(data.artist);
            })
    }

    useEffect(() => {
        loadArtist();
    }, []);

    return (
        <Row gutter={[16, 16]} style={{ padding: "20px" }}>
            {artistList.map((artist, idx) => (
                <ArtistCard key={idx} data={artist} onClick={() => { }} />
            ))}
        </Row>
    );
}

export default ArtistListView;
