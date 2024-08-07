import React, { useState, useContext } from "react";
import "../styles/header.css";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { AuthContext } from "../services/AuthContext";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { authToken, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="logo">
          <h2>MNE-CLINIC</h2>
        </div>

        <Link to="/zakazivanje" className="zakazi">
          Zakazi pregled
        </Link>

        <div className="right-header">
          <div className="nav-icon">
            <FaBars onClick={handleModal} />
          </div>

          {authToken ? (
            <div className="login-reg">
              <p>
                <span>
                  <FaUser />
                </span>
                {user ? `${user.name} ` : "User"}{" "}
                {/* Ako želite da prikažete ime i prezime korisnika */}
              </p>
              <button onClick={handleLogout} id="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <div className="login-reg">
              <Link to="/login">Log in</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </header>
      <Modal show={showModal} setShow={setShowModal} />
    </>
  );
};

export default Header;
