import React from 'react';

import CustomImg from '../../../component/CustomImg/CustomImg';
import { ArtistProps } from '../../../services/models';

interface SearchArtistCardProps {
    data: ArtistProps
    onClick: () => void
}

const SearchArtistCard = ({
    data,
    onClick
}: SearchArtistCardProps) => {

    return (
        <a
            className='shadow'
            href={data.url}
            target="_blank"
            style={{width : 480}}
            onClick={() => {onClick()}}
        >
            <CustomImg alt="artist image" src={data.image[2]['#text']} />
            <div className='p-3'>
                {data.name}
            </div>
        </a>
    )
}

export default SearchArtistCard;
