import React from 'react';

import './collection.styles.scss';

const CollectionPage = ({match}) => {
    console.log("Collection");
    console.log(match.params.collectionID);
    return (<div className="Collection-page">
        Collection
    </div>)
};

export default CollectionPage;