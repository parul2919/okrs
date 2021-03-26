
import { css } from 'styled-components';


export default css`
    margin: 40px 10px 40px 20px;
    border:1px solid #000;
    padding:0 20px;
    @media ${props => props.theme.desktopMediaQuery} {
        margin:40px 30px;
    }
`;
    