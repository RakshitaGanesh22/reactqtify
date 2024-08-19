import { Chip, Tooltip } from '@mui/material';
import React from 'react';
import Styles from '../card/card.module.css'; 
import PropTypes from 'prop-types';
import SongSection from "./SongSection";
export default function SongCardComponent({ data }) {
    console.log(data);
    const {artists,genre,id,image,likes,title} = data;
    return (
        <div className={Styles.wrapper} key={id}>
            <Tooltip title={`sung by ${artists}`} placement="top" arrow>
                <div className={Styles.card}>
                    <img src={image} alt={`Album cover of ${title}`} className={Styles.albumImage} />
                    <div className={Styles.banner}>
                        <Chip label={`${likes} likes`} size="small" className={Styles.chip} />
                    </div> 
                </div>
            </Tooltip>
            <Tooltip title={`${genre.key}`} placement="bottom" arrow>
                <p className={Styles.title}>{title}</p>
            </Tooltip>
        </div>
    );
}



