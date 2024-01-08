import React from 'react';
import styled from 'styled-components';
import FormWithValidation from '../components/FormWithValidation';

const StyledDiv = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: var(--theme-text);
`;

export const Reviews = () => {
    return (
        <StyledDiv>
            <h1>Отзывы о сайте</h1>
            <FormWithValidation />
        </StyledDiv>
    );
};

export default Reviews;
