import {FILTER_DATE, FILTER_POPULAR, FILTER_ALPHABET} from '../types';

export const setDateFilter = () => ({
    type: FILTER_DATE,
})
  
export const setPopularFilter = () => ({
    type: FILTER_POPULAR
})

export const setAlphabetFilter = () => ({
    type: FILTER_ALPHABET
})

