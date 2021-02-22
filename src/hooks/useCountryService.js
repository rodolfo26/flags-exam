import { useReducer } from 'react'

const axios = require("axios")

const initialState = {
    loading: true,
    error: '',
    countries: {},
    sorting: 'name_asc',
    page: 1
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                countries: action.payload,
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: 'Something went wrong',
                countries: []
            }
        case 'LOADING': 
            return {
                ...state,
                loading: true,
                error: '',
                countries: []
            }
        case 'CHANGE_SORTING': 
            if (state.sorting == action.value) {
                return state
            }
            return {
                ...state,
                page: 1,
                sorting: action.value,
                loading: true,
                error: '',
                countries: []
            }
        case 'SCROLL': 
            return {
                ...state,
                page: state.page + 1
            }
        case 'APPEND': 
            return {
                ...state,
                countries: [...state.countries, ...action.value]
            };
        default:
            return state;
    }
}
export default function useCountryService() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const searchCountry = axios({
        url: 'https://countries-274616.ew.r.appspot.com/',
        method: 'post',
        data: {
            query: `
                {
                    Country (
                        orderBy: ${state.sorting}, first: 8, offset: ${(state.page * 8) - 8}
                    ){
                        _id
                        name
                        area
                        flag {
                            _id
                            emoji
                            svgFile
                        }
                    }
                }`
        }
    });
    const search = (s, e) => {
        searchCountry.then((response) => {
            s(response.data.data.Country);
        })
        .catch(error => {
            e();
        });
    };
    const scroll = () => {
        dispatch({ type: 'SCROLL'});
        searchCountry.then((response) => {
            dispatch({ type: 'APPEND', value: response.data.data.Country });
        })
    };
    return [
        scroll,
        search,
        state,
        dispatch
    ]
}