import { CircularProgress,Box} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useRef, useContext, useState } from 'react';
import axios from 'axios';
import { MyContext } from "../UniversalData/universalData";
import Slider from "react-slick";
import Styles from "../../App.module.css";
import SongCardComponent from "./songSectionCard";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
export default function SongSection() {
    const heading = "Songs";
    const isloading = useRef(true);
    const {songsAlbum,setSongsAlbum}=useContext(MyContext);
    useEffect(() => {
        const backend_endPoint = 'https://qtify-backend-labs.crio.do/songs';
        const fetchAlbumData = async () => {
            try {
                const response = await axios.get(`${backend_endPoint}`);
                setSongsAlbum(response.data);
                isloading.current = false; // Set loading to false after data is fetched
            } catch (error) {
                console.log(error);
                isloading.current = true;  // Only set loading to true in case of error
            }
        };

        fetchAlbumData();
    }, [setSongsAlbum]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7.02,
        slidesToScroll: 1,
    };
    return (
        <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#121212",position:"relative",top:"16.5rem",paddingTop:"2rem"}}>
        <div className={Styles.topAlbumContainer}>
            <div style={{display:"grid",width:"100%",gap:"1.5rem"}}>
            <div className={Styles.heading}>{heading}</div>
            <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
            </div>

            
                {isloading.current ? (
                    <div className={Styles.loader}><CircularProgress /></div>
                ) : (<div className={Styles.carouselContainer}>

                    <Slider {...settings} style={{ display: "grid"}}>
                        {songsAlbum.map((ele) => (
                            <div key={ele.id}>
                                <SongCardComponent data={ele} />
                            </div>
                        ))}
                    </Slider>
                </div>)
                    
                }
            </div>
        </div>
        </div>
    );
}
