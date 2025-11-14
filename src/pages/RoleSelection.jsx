import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-container">
      <div className="role-box" onClick={() => navigate('/user')}>User</div>
      <div className="role-box" onClick={() => navigate('/owner')}>Owner</div>
      <div className="role-box" onClick={() => navigate('/delivery')}>Delivery Boy</div>
    </div>
  );
}

export default RoleSelection;
