import React, { useState } from 'react';
import { ApolloProvider } from "@apollo/client";
import client from "./client";

import Search from './components/search/Search';
import List from './components/movie/List';
import Message from './components/message/Message';

function App() {
    const [term, setTerm] = useState('');
    return (
        <ApolloProvider client={client}>
            <div className="w-full">
                <Search setTerm={setTerm} />
                <section className="mt-28 mb-20" role='main' id="main-content" tabIndex="-1">
                    <div className="container mx-auto px-3">
                    {
                        (term === '')?
                            <Message message="Please enter keyword that you are looking for." />:
                            <>
                                <h1 className="text-2xl mb-5">Results of '{term}'</h1>
                                <List term={term} />
                            </>
                    }
                    </div>
                </section>
            </div>
        </ApolloProvider>
    );
}

export default App;
