const ENDPOINTS = {
    ELEMENTS: "https://fantasy.premierleague.com/api/elements",
} as const;


const CACHE_KEYS = {
    ELEMENTS: "aggr:elements",
}

const CACHE_TTL = {
    ELEMENTS: 60 * 2,
}


export { ENDPOINTS, CACHE_KEYS, CACHE_TTL }