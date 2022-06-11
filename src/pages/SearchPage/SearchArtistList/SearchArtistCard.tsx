import React from 'react';
import { Card, Col, Row } from 'antd';
import { ArtistProps } from '../../../services/musicAPI';
import CustomImg from '../../../component/CustomImg/CustomImg';

const { Meta } = Card;

interface SearchArtistCardProps {
    data: ArtistProps
    onClick: () => void
}

const SearchArtistCard = ({
    data,
    onClick
}: SearchArtistCardProps) => {

    return (
        <div
            style={{width : 480}}
            onClick={() => {onClick()}}
        >
            <CustomImg alt="artist image" src={data.image[2]['#text']} />
            <div>
                {data.name}
            </div>
        </div>
    )
}

export default SearchArtistCard;
