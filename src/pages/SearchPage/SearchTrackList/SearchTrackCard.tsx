import React from 'react';
import { Card, Col, Row } from 'antd';
import { SearchedTrackProps } from '../../../services/musicAPI';

interface SearchArtistCardProps {
    data: SearchedTrackProps
    onClick: () => void
}

const SearchTrackCard = ({
    data,
    onClick
}: SearchArtistCardProps) => {

    return (
        <div
            style={{ width: 480 }}
            onClick={() => { onClick() }}
        >
            <img alt="track image" src={data.image[2]['#text']} />
            <div> {data.name} </div>
            <small> {data.artist} </small>
        </div>
    )
}

export default SearchTrackCard;
