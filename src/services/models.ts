
interface ImageProps {
    "#text": string,
    "size": string
}

interface ListProps {
    "page": number,
    "perPage": number,
    "totalPages": number,
    "total": number,
}

export interface ArtistProps {
    name: string,
    playcount: string,
    listeners: string,
    mbid: string,
    url: string,
    streamable: string,
    image: Array<ImageProps>
}

export interface ArtistListProps {
    artist: Array<ArtistProps>,
    "@attr": ListProps
}

export interface DetailedArtistProps {
    name: string,
    mbid: string,
    url: string,
    image: Array<ImageProps>,
    streamable: string,
    ontour: string,
    stats: {
        listeners: string,
        playcount: string
    },
    tags : {
        tag : Array<TagProps>
    },
    bio : {
        published : string,
        summary : string,
        content : string,
    }
}

interface TagProps {
    name : string,
    url : string,
}

export interface TrackProps {
    name: string,
    duration: string,
    playcount: string,
    listeners: string,
    mbid: string,
    url: string,
    streamable: {
        "#text": string,
        fulltrack: string
    },
    artist: {
        name: string,
        mbid: string,
        url: string
    },
    image: Array<ImageProps>
}

export interface TrackListProps {
    track: Array<TrackProps>,
    "@attr": ListProps
}

export interface SearchedTrackProps {
    name: string,
    artist: string,
    url: string,
    streamable: string,
    listeners: string,
    image: Array<ImageProps>
    mbid: string
}