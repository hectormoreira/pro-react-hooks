import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import '../styles/Characters.css'
import Search from './Search';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);

    const handleClick = (favorite) => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    // const filteredUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })
    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    return (
        <div className="Characters">
            <h3>Favoritos</h3>
            <div className="characters-container">
                {favorites.favorites.map(favorite => (
                    <div className="item-card" key={favorite.id}>
                        <img className="item-card__img" src={favorite.image} alt={favorite.name} />
                        <h2 className="item-card__name">{favorite.name}</h2>
                    </div>
                ))}
            </div>
            <hr />
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <hr />
            <div className="characters-container">
                {filteredUsers.map(character => (
                    <div className="item-card" key={character.id}>
                        <img className="item-card__img" src={character.image} alt={character.name} />
                        <h2 className="item-card__name">{character.name}</h2>
                        <h3 className="item-card__origin">{character.origin.name}</h3>
                        <button className="btn item-card__btnFavorite" onClick={() => handleClick(character)}>Agregar a favorito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;