import styled from 'styled-components';
import homeImg from '../../images/homeBcg.jpeg';

const Hero = styled.header`
min-height: 100vh;
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
 url(${props => props.img || homeImg}) center/ cover fixed no-repeat;
display: flex;
align-items: center;
justify-content: center;
`
export default Hero;