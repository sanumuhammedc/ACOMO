import MenuList from "../Components/MenuList";
import Badge from 'react-bootstrap/Badge';

export default function mess() {
  return (
    <div className="p-4">
      <h1><Badge bg="secondary">Mess</Badge></h1>
      <MenuList />
    </div>
  );
}