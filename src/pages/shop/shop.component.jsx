import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { SHOP_DATA } from '../../mocks/shop-mock';

import './shop.styles.scss'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    
    render(){
        const {collections}=this.state;
        return(
            <div>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <div>
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default ShopPage;