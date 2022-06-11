import axios from "axios";
import { LASTFM_BASE } from "../constant";
import { convertQuery } from "../utils/utlis";

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

export interface ArtistListProps{
    artist: Array<ArtistProps>,
    "@attr": ListProps
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

export interface TrackListProps{
    track: Array<TrackProps>,
    "@attr": ListProps
}

const musicAPI = {
    
    getTopArtisList: (query : Object) => {
        const api = "chart.gettopartists"

        return axios.get(`${LASTFM_BASE}&method=${api}${convertQuery(query)}`)
    },
    getTopTrackList: (query : Object) => {
        const api = "chart.gettoptracks"

        return axios.get(`${LASTFM_BASE}&method=${api}${convertQuery(query)}`)
    },
}

export default musicAPI;