import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: var(--theme-text);
`;

export const About = () => {
    return (
        <StyledDiv>
            <h1>Обо мне</h1>
            <p>Алексеев Антон Алексеевич группа 221-323</p>
        </StyledDiv>
    );
};

export default About;
