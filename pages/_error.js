import React from 'react';
import Header from '../components/Header/header';

function Error({ statusCode }) {
    return (
        <main>
            <Header />
            <section>
                <h3>
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
                </h3>
                <p>
                    Something went wrong. Please try again or go back to the{' '}
                    <a href="/">home page</a>.
                </p>
            </section>
        </main>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
