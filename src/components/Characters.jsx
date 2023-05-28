import React, { useState, useEffect, useReducer } from 'react'
import './styles.css';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state 
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  },[])

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite })
  }

  return (  
    <>
      <div className='flex flex-col items-center w-80 h-40 border rounded-lg p-2 mb-4 overflow-y-scroll'>
        <p className='font-medium text-center text-lg mb-1'>Favorites</p>
        {favorites.favorites.map(favorite => (
          <li key={favorite.id} className='list-none'>
            {favorite.name}
          </li>
        ))}
      </div>
      <div className='grid gap-4 grid-cols-4  max-w-screen-lg'>
        {characters.map(character => (
          <div 
            key={character.id}
            className='w-full h-27 border border-black dark:border-gray-600 rounded-lg flex flex-col'
          >
            <figure>
              <img className='rounded-t-lg' src={character.image} alt={character.name} />
            </figure>
            <div className='p-2'>
              <p>
                <span className='Title'>Name: </span>
                <span className='Name'>{character.name}</span>
              </p>
              <p>
                <span className='Title'>Status: </span>
                <span className='Name'>{character.status}</span>
              </p>
              <p>
                <span className='Title'>Species: </span>
                <span className='Name'>{character.species}</span>
              </p>
              <p className={ character.type ? 'block' : 'hidden' }>
                <span className='Title'>Type: </span>
                <span className='Name'>{character.type}</span>
              </p>
              <p>
                <span className='Title'>Gender: </span>
                <span className='Name'>{character.gender}</span>
              </p>
            </div>
            <button
              key={character.id}
              className='flex flex-col justify-end text-center p-1 border rounded-lg mx-auto mt-auto mb-2 transition-opacity duration-300 hover:opacity-50'
              type='button'
              onClick={() => handleClick(character)}
            >
              Add To Favorites
            </button>
          </div>
        ))}      
      </div>
    </>
  )
}

export default Characters
