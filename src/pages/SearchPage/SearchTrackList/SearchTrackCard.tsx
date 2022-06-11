import React from 'react';
import { SearchedTrackProps } from '../../../services/musicAPI';
import CustomImg from '../../../component/CustomImg/CustomImg';

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
            <CustomImg alt="track image" src={data.image[2]['#text']} />
            <div> {data.name} </div>
            <small> {data.artist} </small>
        </div>
    )
}

export default SearchTrackCard;
