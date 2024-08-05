import React from "react";
import { useState } from "react";
import "../styles/header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
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

          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </div>
      </header>
      <Modal show={showModal} setShow={setShowModal}></Modal>
    </>
  );
};

export default Header;
