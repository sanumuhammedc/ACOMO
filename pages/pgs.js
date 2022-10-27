import MenuList from "../Components/MenuList";
import Badge from 'react-bootstrap/Badge';

export default function pgs() {
  return (
    <div className="p-4">
      <h1><Badge bg="secondary">Paying Guest</Badge></h1>
      <MenuList />
    </div>
  );
}