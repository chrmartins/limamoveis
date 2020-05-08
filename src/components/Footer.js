import React from "react";

import BtnWhatsapp from './BtnWhatsapp'

export default function Footer() {
  return (
    <div className="p-4 bg-gray-300 sm:flex justify-between items-center">
      <div>
        <h5>Lima Moveis</h5>
        <p>Rua Alguma, 1000, Bairro Algum</p>
      </div>
      <BtnWhatsapp />
    </div>
  );
}
