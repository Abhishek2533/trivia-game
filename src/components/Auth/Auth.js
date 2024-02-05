import { Box, FormControl } from "@mui/material"
import Logo from '../../assets/logo.png';
import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";

export const Auth = () => {

    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Submitting...');
        setUser(true);
    }

    return(<Box width={'100vw'} sx={{background:'radial-gradient(circle, rgba(128,164,227,1) 0%, rgba(70,132,240,1) 100%)'}} minHeight={'100vh'} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={'space-around'}>
            <img src={Logo} style={{width: 'min(90%, 300px)'}} alt="logo"/>
            <Box bgcolor={'#ffffff7a'} borderRadius={'16px'} p={'20px 20px 40px'} mb={2}>
                <h4 style={{marginTop:'10px'}}>Login to continue</h4>
                <form onSubmit={handleLogin} style={{display:'flex', flexDirection:'column', width: 'fit-content', alignItems: 'center'}}>
                    <FormControl sx={{width: 'min(350px, 90vw)'}}>
                        <label htmlFor="username" style={{textAlign:'left', margin:'0 5px 5px'}}>Username</label>
                        <input style={{backgroundColor:'#ffffffb8', fontSize:'1rem', borderRadius:'8px', outline: 'none', border: '#4684F0 2px solid', padding: '10px'}} required id='username' placeholder="Jack" type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            /> 
                    </FormControl>
                    <FormControl sx={{width: 'min(350px, 90vw)', marginTop:'20px'}}>
                        <label htmlFor="password" style={{textAlign:'left', margin:'0 5px 5px'}}>Password</label>
                        <input style={{backgroundColor:'#ffffffb8', fontSize:'1rem', borderRadius:'8px', outline: 'none', border: '#4684F0 2px solid', padding: '10px'}} required id='password' placeholder="Password" type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            /> 
                    </FormControl>
                    <button type="submit" style={{width: 'fit-content', backgroundColor: '#4684F0', border:'lightgray', color: 'white', borderRadius: '8px', padding: '7px 20px', fontSize: '1rem', outline:'2px white solid', outlineOffset:'-3px', marginTop: '20px', cursor: 'pointer'}}>
                        Submit
                    </button>
                </form>
                <p style={{margin:'10px 0 0'}}>Don't have an account? <span style={{color: '#4684F0', cursor: 'pointer', fontWeight: 'bold'}}>SignUp here</span></p>
            </Box>
        </Box>
    )
}