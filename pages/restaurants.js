import MenuList from "../Components/MenuList";
import Badge from 'react-bootstrap/Badge';

export default function restaurants() {
  return (
    <div className="p-4">
      <h1><Badge bg="secondary">Restaurants</Badge></h1>
      <MenuList />
    </div>
  );
}