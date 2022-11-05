import { NewPhonebook } from './NewPhonebook/NewPhonebook';

import styled from 'styled-components';


const AppWrapper = styled.div`
width:400px;
margin: 0 auto;
min-height:100vh;
padding:20px;
background:black;
color:white;
list-style: none;

`

export const App = () => {
  return (
    <AppWrapper>
      <NewPhonebook />
    </AppWrapper>
  );
};
