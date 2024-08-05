import { Link } from "react-router-dom";

export const Modal = ({ show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className={show ? "active-modal" : "modal-window"}>
      <div className="side-bar">
        <h2>MNE-CLINIC</h2>
        <ul onClick={handleClose}>
          <li>
            <Link to="/">Pocetna</Link>
          </li>
          <li>
            <Link to="/onama">O nama</Link>
          </li>
          <li>
            <Link to="/doktori">Doktori</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/cjenovnik">Cjenovnik</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
