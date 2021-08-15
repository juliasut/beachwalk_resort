// helper functions
export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#ececec',
  lightGrey: '#f7f7f7',
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `display: flex; align-items:${y}; justify-content:${x}`;
};

export const setBackground = ({
  img = 'https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  color = 'rgba(0, 0, 0, 0)',
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
  url(${img}) center/ cover fixed no-repeat;`;
};

export const setRem = (num = 16) => {
  return `${num / 16}rem`;
};

export const setLetterSpacing = (num = 2) => {
  return `letter-spacing: ${num}px`;
}