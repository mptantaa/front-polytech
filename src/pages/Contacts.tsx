import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: var(--theme-text);
`;


export const Contacts = () => {
    return (
        <StyledDiv>
            <h1>Мои контакты</h1>
            <p>Алексеев Антон Алексеевич</p>
            <p>Номер телефона: </p>
            <p>Почта: </p>
        </StyledDiv>
    );
};

export default Contacts;
