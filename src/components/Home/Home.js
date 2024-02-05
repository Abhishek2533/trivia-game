import { useContext } from "react";
import { Auth } from "../Auth/Auth"
import { UserContext } from "../Context/Context";
import { Box } from "@mui/material";
import Quiz1 from '../../assets/quiz1.jpg';
import Quiz2 from '../../assets/quiz2.png';
import Playbtn from '../../assets/play-btn.png';

export const Home = () => {
    const {user} = useContext(UserContext);
    return(
        <>
        {
            !user ? 
            <Auth/>
            :
            <Box maxWidth={1000} margin={'auto'}>
                <Box display={"flex"} m={'auto'} justifyContent={"space-between"} alignItems={"center"} px={{xs:2, md:4}}>
                    <Box textAlign={"left"}>
                        <h2 style={{fontSize: '3rem', color: 'rgb(89, 113, 237)', margin:'10px 0 0', fontWeight: 'bold'}}>Let's Play</h2>
                        <span style={{color: 'black', fontSize: '1.2rem', marginLeft: '2px'}}>Be the first!</span>
                    </Box>
                    <Box display={"flex"} alignItems={"flex-end"}>
                        <span style={{color: 'black', fontSize: '1.2rem', marginLeft: '2px', marginBottom:'10px'}}>Score:</span>
                        <h2 style={{fontSize: '3rem', color: 'rgb(89, 113, 237)', margin:'0', fontWeight: 'bold'}}>120</h2>
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} margin={'40px'} gap={3}>
                    <Box borderRadius={'8px'} overflow='hidden' border={'solid #4684F0 2px'} width={'fit-content'}>
                        <img src={Quiz1} alt=""/>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={'10px 20px'}>
                            <span style={{fontSize:'1.5rem', fontWeight: 'bold', color: '#7d7777'}}>0/10 Attempt</span>
                            <button style={{cursor: 'pointer', color: 'white', fontSize: '1rem', fontWeight: 'bold', padding:'10px 20px', display: 'flex', alignItems: 'center', gap:'10px', borderRadius: '8px', backgroundColor: '#4684F0', border: 'none'}}>Play <img style={{width: '24px'}} src={Playbtn} alt=""/></button>
                        </Box>
                    </Box>
                    <Box borderRadius={'8px'} overflow='hidden' border={'solid #4684F0 2px'} width={'fit-content'}>
                        <img src={Quiz2} alt=""/>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={'10px 20px'}>
                            <span style={{fontSize:'1.5rem', fontWeight: 'bold', color: '#7d7777'}}>0/10 Attempt</span>
                            <button style={{cursor: 'pointer', color: 'white', fontSize: '1rem', fontWeight: 'bold', padding:'10px 20px', display: 'flex', alignItems: 'center', gap:'10px', borderRadius: '8px', backgroundColor: '#4684F0', border: 'none'}}>Play <img style={{width: '24px'}} src={Playbtn} alt=""/></button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        }
        </>
    )
}