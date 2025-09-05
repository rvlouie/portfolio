import React from 'react';
import Header from '../components/Header/header';

function Custom404() {
    return (
        <main>
            <Header />
            <section>
                <h3>404 - Page Not Found</h3>
                <p>
                    The page you're looking for doesn't exist. Please check the URL or go back to the{' '}
                    <a href="/">home page</a>.
                </p>
            </section>
        </main>
    );
}

export default Custom404;
