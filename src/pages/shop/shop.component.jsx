import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import './shop.styles.scss';

const ShopPage = ({collections}) => (
    <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <div>
                <CollectionPreview key={id} {...otherCollectionProps} />
            </div>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});


export default connect(mapStateToProps)(ShopPage);