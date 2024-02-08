import React from 'react';

const withLoading = (Component) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) return <p>Loading...</p>;
        return <Component {...props} />;
    };
}

export default withLoading;