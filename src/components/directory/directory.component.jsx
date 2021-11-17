import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SectionsData } from '../../mocks/directory-mock';
import { selectSections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(
                ({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                )
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

//removed class component and using functional component as states will not be required after directory reducer
/*class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sectionsData: SectionsData(),
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }


    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sectionsData.map(
                        ({ id, ...otherSectionProps}) => (
                            <MenuItem key={id} {...otherSectionProps} />
                        )
                    )
                }
            </div>
        )
    }
}*/

export default connect(mapStateToProps)(Directory);