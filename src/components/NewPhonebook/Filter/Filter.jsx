import styled from 'styled-components';

const WrapperFindForm = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Formlabel = styled.label`
  margin: 5px;
`;
const FormInput = styled.input`
  margin: 5px;
  border-radius: 5px;
`;

export const Filter = ({ onChange, value }) => {
  return (
    <WrapperFindForm>
      <Formlabel htmlFor="filter"> Find contacts by name: </Formlabel>
      <FormInput onChange={onChange} value={value} type="text" name="filter" />
    </WrapperFindForm>
  );
};
