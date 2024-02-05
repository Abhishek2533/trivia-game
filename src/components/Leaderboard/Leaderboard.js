import { Box } from "@mui/material";
import Avatar from '../../assets/avatar.png';

export const Leaderboard = () => {
    return(
        <Box maxWidth={700} margin={'auto'}>
            <Box display={"flex"} justifyContent={"space-around"} mb={5} alignItems={"center"} p={2}>
                <Box sx={{position: 'relative', outline:'solid 4px gray', borderRadius:'50%', outlineOffset: '3px'}}>
                    <img style={{width:'100px', display:'block'}} src={Avatar} alt=""/>
                    <span style={{position: 'absolute', backgroundColor:'gray', width: '30px', aspectRatio:1, display: 'grid', placeContent: 'center', borderRadius:'50px', color:'white', boxShadow: '0 0 3px 1px black', fontSize:'1rem', fontWeight:'bolder', left: '35px', bottom:'-18px'}}>2</span>
                    <span style={{position: 'absolute', bottom: '-45px', left: '50%', transform:'translateX(-50%)', fontWeight:'bold'}}>Dylan</span>
                </Box>
                <Box sx={{position: 'relative',outline:'solid 4px #ffb705', borderRadius:'50%', outlineOffset: '3px'}}>
                    <img style={{width:'150px', display: 'block'}} src={Avatar} alt=""/>
                    <span style={{position: 'absolute', backgroundColor:'#ffb705', width: '30px', aspectRatio:1, display: 'grid', placeContent: 'center', borderRadius:'50px', color:'white', boxShadow: '0 0 3px 1px #a38737', fontSize:'1rem', fontWeight:'bolder', left: '60px', bottom:'-18px'}}>1</span>
                    <span style={{position: 'absolute', bottom: '-45px', left: '50%', transform:'translateX(-50%)', fontWeight:'bold'}}>Sofia</span>
                </Box>
                <Box sx={{position: 'relative',outline:'solid 4px #ac894c', borderRadius:'50%', outlineOffset: '3px'}}>
                    <img style={{width:'100px', display: 'block'}} src={Avatar} alt=""/>
                    <span style={{position: 'absolute', backgroundColor:'#ac894c', width: '30px', aspectRatio:1, display: 'grid', placeContent: 'center', borderRadius:'50px', color:'white', boxShadow: '0 0 3px 1px black', fontSize:'1rem', fontWeight:'bolder', left: '35px', bottom:'-18px'}}>3</span>
                    <span style={{position: 'absolute', bottom: '-45px', left: '50%', transform:'translateX(-50%)', fontWeight:'bold'}}>Ostin</span>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={'20px'}>
                <Box display={"flex"} color={'black'} fontSize={'1.5rem'} fontWeight={'bold'} alignItems={"center"} p={'10px 40px 10px 20px'} border={'solid 2px #d6d4d4'} borderRadius={'20px'}>
                    <span style={{marginRight: '20px'}}>5</span>
                    <img src={Avatar} alt=""/>
                    <span style={{margin: 'auto'}}>Your current Ranking</span>
                    <span>216</span>
                </Box>
                <Box display={"flex"} bgcolor={'#e9f9f9'} color={'black'} fontSize={'1.5rem'} fontWeight={'bold'} alignItems={"center"} p={'10px 40px 10px 20px'} border={'solid 2px #d6d4d4'} borderRadius={'20px'}>
                    <span style={{marginRight: '20px'}}>4</span>
                    <img src={Avatar} alt=""/>
                    <span style={{margin: 'auto'}}>Player_sam</span>
                    <span>290</span>
                </Box>
                <Box display={"flex"} bgcolor={'#e9f9f9'} color={'black'} fontSize={'1.5rem'} fontWeight={'bold'} alignItems={"center"} p={'10px 40px 10px 20px'} border={'solid 2px #d6d4d4'} borderRadius={'20px'}>
                    <span style={{marginRight: '20px'}}>6</span>
                    <img src={Avatar} alt=""/>
                    <span style={{margin: 'auto'}}>Player_chandu</span>
                    <span>196</span>
                </Box>
                <Box display={"flex"} bgcolor={'#e9f9f9'} color={'black'} fontSize={'1.5rem'} fontWeight={'bold'} alignItems={"center"} p={'10px 40px 10px 20px'} border={'solid 2px #d6d4d4'} borderRadius={'20px'}>
                    <span style={{marginRight: '20px'}}>7</span>
                    <img src={Avatar} alt=""/>
                    <span style={{margin: 'auto'}}>Player_noob</span>
                    <span>180</span>
                </Box>
                <Box display={"flex"} bgcolor={'#e9f9f9'} color={'black'} fontSize={'1.5rem'} fontWeight={'bold'} alignItems={"center"} p={'10px 40px 10px 20px'} border={'solid 2px #d6d4d4'} borderRadius={'20px'}>
                    <span style={{marginRight: '20px'}}>8</span>
                    <img src={Avatar} alt=""/>
                    <span style={{margin: 'auto'}}>Player_unknown</span>
                    <span>170</span>
                </Box>
            </Box>
        </Box>
    )
}