import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: var(--theme-text);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 0.5rem;
`;

interface IMyForm {
  name: string;
  text: string;
}

const FormWithValidation = () => {
  const [tasks, setTasks] = useState<IMyForm[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: 'onBlur',
  });

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(saveElement)}>
        <StyledInput
          {...register('name', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов',
            },
          })}
          placeholder="Имя"
        />
        {errors.name && <StyledDiv>{errors.name.message}</StyledDiv>}
        <StyledInput
          {...register('text', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов',
            },
          })}
          placeholder="Отзыв"
        />
        {errors.text && <StyledDiv>{errors.text.message}</StyledDiv>}
        <StyledButton type="submit" disabled={Object.keys(errors).length > 0}>
          Сохранить
        </StyledButton>
      </StyledForm>
      <StyledList>
        {tasks.map((task, index) => (
          <StyledListItem key={index}>
            <b>{task.name}:</b> {task.text}
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};

export default FormWithValidation;
