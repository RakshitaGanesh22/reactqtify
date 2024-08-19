import { Chip, Tooltip } from '@mui/material';
import React from 'react';
import Styles from './card.module.css'; 
import PropTypes from 'prop-types';

export default function CardComponent({ data }) {
    const { image, follows, title, songs } = data;

    return (
        <div className={Styles.wrapper}>
            <Tooltip title={`${songs.length} Songs`} placement="top" arrow>
                <div className={Styles.card}>
                    <img src={image} alt={`Album cover of ${title}`} className={Styles.albumImage} />
                    <div className={Styles.banner}>
                        <Chip label={`${follows} Follows`} size="small" className={Styles.chip} />
                    </div>
                </div>
            </Tooltip>
            <Tooltip title={title} placement="bottom" arrow>
                <p className={Styles.title}>{title}</p>
            </Tooltip>
        </div>
    );
}

CardComponent.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        follows: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        songs: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
};

