import { useContext } from "react"
import { UserContext } from "../Context/Context"
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Badge from '../../assets/badge.png';
import Trophy from '../../assets/trophy.png';
import UserProfile from '../../assets/user.png';

export const Navbar = () => {

    const {user} = useContext(UserContext);

    return user && (
        <Box py={{xs:2, md:4}} px={{xs:2, md:8}} display={"flex"} alignItems={"center"} justifyContent={{xs:"space-evenly", md:'right'}} gap={{xs:0, md:'40px'}}>
            <NavLink to={'/certificates'} children={({isActive}) => 
                <Box width={'fit-content'} display={"flex"} gap={'10px'} fontWeight={600} alignItems={"center"} borderRadius={'8px'} p={'7px 14px'} border={'solid 2px lightgray'} textTransform={'capitalize'} color={isActive ? 'white':''} bgcolor={isActive ? '#4684F0':''}>
                    <img src={Badge} alt="" style={{width:'20px'}}/>
                    <span>
                        certificates
                    </span>
                </Box>
            }/>
            <NavLink to={'/leaderboard'} children={({isActive}) => 
                <Box width={'fit-content'} display={"flex"} gap={'10px'} fontWeight={600} alignItems={"center"} borderRadius={'8px'} p={'7px 14px'} border={'solid 2px lightgray'} textTransform={'capitalize'} color={isActive ? 'white':''} bgcolor={isActive ? '#4684F0':''}>
                    <img src={Trophy} alt="" style={{width:'20px'}}/>
                    <span>
                        leaderboard
                    </span>
                </Box>
            }/>
            <img src={UserProfile} alt="user" style={{width:'40px'}}/>
        </Box>
    )
}