import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import  {styled}  from 'styled-components';

const Wrapper = styled.div`
    position : relative;
    height : 100vh;
    // background-color : red;
`

export function Spinner() {
    return (
        <Wrapper className='relative h-screen'>
            <Box sx={{ display: 'flex', 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: `translate(-${50}%,-${50}%)` }}>
                <CircularProgress />
            </Box>
            <p>Loading...</p>
        </Wrapper>
    );
}