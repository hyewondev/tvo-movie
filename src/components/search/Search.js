import { FaSearch } from 'react-icons/fa';
import {useState} from "react";

function Search(props) {
    const [term, setTerm] = useState('');

    function handleKeyPress(event) {
        if(event.key === 'Enter') {
            sendTerm(event);
        }
    }

    function sendTerm(event) {
        props.setTerm(term);
        event.preventDefault();
    }

    function handleTerm(event) {
        setTerm(event.target.value);
        event.preventDefault();
    }

    return (
        <header className="fixed w-full top-0 bg-mv-main text-white py-7 shadow-lg">
            <div className="skip-to-main">
                <a href="#main-content">Skip to main content</a>
            </div>
            <div className="container mx-auto font-md space-x-4 px-3">
                <div className="flex">
                    <div className="flex-1 text-3xl">
                        Movies
                    </div>
                    <div className="flex-2 flex items-center">
                        <div className="flex">
                            <input className="px-2 py-1 rounded-sm text-gray-800 text-sm w-48 sm:w-64 md:w-96"
                                   type="text" id="edit-search" name="search" onChange={ handleTerm } onKeyPress={ handleKeyPress }
                                   maxLength="50" required="required" aria-required="true" autoComplete="off"
                                   focusable="true" aria-labelledby="search-label search-label-sm"
                            />
                        </div>
                        <div className="flex pl-2">
                            <button data-selector="edit-submit"
                                    className="text-white text-xl" type="submit"
                                    id="search-submit" name="search-submit" value="Search"
                                    onClick={ sendTerm }
                                    aria-label="search button"
                            >
                                <FaSearch focusable='false' title="search button" />
                            </button>
                        </div>
                        <div className="absolute bottom-3 text-sm pl-1">
                            <label id="search-label" className="hidden sm:block">What are you looking for? (ex: world, home)</label>
                            <label id="search-label-sm" className="block sm:hidden">Keyword (ex: world, home)</label>
                        </div>

                    </div>
                </div>

            </div>
        </header>
    )
}

export default Search;