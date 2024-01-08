import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: var(--theme-text);
`;

export const Reviews = () => {
    return (
        <StyledDiv>
            <h1>Отзывы о сайте</h1>
            <p><b>Влад: </b> лучший сайт про друга</p>
            <p><b>Илья:</b> привет!</p>
        </StyledDiv>
    );
};

export default Reviews;
