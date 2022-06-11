import axios from "axios";
import { LASTFM_BASE } from "../constant";

export interface ArtistProps {
    name: string,
    playcount: string,
    listeners: string,
    mbid: string,
    url: string,
    streamable: string,
    image: Array<ImageProps>
}

interface ImageProps {
  "#text": string,
  "size": string
}

export interface ArtistListProps{
    artist: Array<ArtistProps>,
    "@attr": ListProps
}

interface ListProps {
    "page": number,
    "perPage": number,
    "totalPages": number,
    "total": number,
}

const musicAPI = {
    
    getTopArtisList: (query? : string) => {
        const api = "chart.gettopartists"
        return axios.get(`${LASTFM_BASE}&method=${api}${query || ""}`)
    },
}

export default musicAPI;