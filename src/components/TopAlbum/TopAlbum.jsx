import { CircularProgress } from '@mui/material';
import { useEffect, useRef, useContext, useState } from 'react';
import axios from 'axios';
import { MyContext } from "../UniversalData/universalData";
import Slider from "react-slick";
import CardComponent from "../card/card1";
import Styles from "../../App.module.css";

export default function TopAlbumF() {
    const heading = "Top Album";
    const loading = useRef(true);
    const { albumData, setAlbum } = useContext(MyContext);
    const[showAll,setShowAll]=useState(true);
    useEffect(() => {
        const backend_endPoint = 'https://qtify-backend-labs.crio.do';
        const fetchAlbumData = async () => {
            try {
                const response = await axios.get(`${backend_endPoint}/albums/top`);
                setAlbum(response.data);
                console.log(response.data);
                loading.current = false; // Set loading to false after data is fetched
            } catch (error) {
                console.log(error);
                loading.current = true;  // Only set loading to true in case of error
            }
        };

        fetchAlbumData();
    }, [setAlbum]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7.02,
        slidesToScroll: 1,
    };
    function handleClick(){
        setShowAll(!showAll);
    }

    return (
        <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#121212",position:"relative",top:"16.5rem",paddingTop:"2rem"}}>
        <div className={Styles.topAlbumContainer}>
            <div style={{display:"flex",width:"100%"}}>
            <div className={Styles.heading}>{heading}</div>
            {showAll?(<button className={Styles.buttonClass} onClick={handleClick}>Show All</button>):(<button className={Styles.buttonClass} onClick={handleClick}>Collapse</button>)}
            </div>
            <div>
                {loading.current ? (
                    <div className={Styles.loader}><CircularProgress /></div>
                ) : (showAll?(<div className={Styles.carouselContainer}>
                        <Slider {...settings} style={{ display: "grid"}}>
                                {albumData.map((ele) => (
                                    <div key={ele.id}>
                            <CardComponent data={ele} />
                            </div>
                        ))}
                    </Slider>
                </div>):(<div style={{display:"grid",gridTemplateColumns: "auto auto auto auto auto auto auto",gap:"3.15rem"}}>{albumData.map((ele) => (
                            <div key={ele.id}>
                                <CardComponent data={ele} />
                            </div>
                        ))}</div>)
                    
                )}
            </div>
        </div>
        </div>
    );
}
