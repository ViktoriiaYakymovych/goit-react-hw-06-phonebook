import { ListWrapper, Button } from './ContactCard.styled';

export const ContactCard = ({ contact: { 
  // id, 
  name, number } }) => {
  return (
    <ListWrapper>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button">Delete</Button>
    </ListWrapper>
  );
};
