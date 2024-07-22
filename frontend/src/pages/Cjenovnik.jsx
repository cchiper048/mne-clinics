import React from "react";
import "../styles/cjenovnik.css";

export const Cjenovnik = () => {
    const services = [
        { id: 1, name: "Konsultacija", price: "50€" },
        { id: 2, name: "Osnovni pregled", price: "30€" },
        { id: 3, name: "Napredni pregled", price: "70€" },
        { id: 4, name: "Laboratorijske analize", price: "40€" },
        { id: 5, name: "Specijalistički pregled", price: "100€" },
    ];
    return (
        <main className="cjenovnik-holder">
            <div className="cjenovnik-title">
                <h1>MNE-CLINICS Cjenovnik</h1>
            </div>

            <div className="cjenovnik-table">
                <table>
                    <thead>
                        <tr>
                            <th>Usluga</th>
                            <th>Cijena</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};
