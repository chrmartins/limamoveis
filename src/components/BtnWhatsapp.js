import React from "react";

import wa from '../../src/pages/assets/btn-whatsapp.png'

export default function BtnWhatsapp() {
  return (
    <div
      className=" bg-white shadow rounded-lg px-4 py-2 flex flex-col 
      items-center mt-6 sm:mt-0 sm:flex-row"
    >
      <img className="w-10 h-10" src={wa} alt="logo whatsapp" />
      <div className="ml-2">
        <h3 className="font-bold text-2xl">Orçar seu projeto!</h3>
        <p className="text-xs"> Projeto e orçamento sem compromisso</p>
        <p className="font-bold ">(99) 99999-9999</p>
      </div>
    </div>
  );
}
