import { css } from 'styled-components';


export default css`
    margin:40px 10px 0 15px;
    @media ${props => props.theme.desktopMediaQuery} {
        margin:40px 30px;
    }
`;