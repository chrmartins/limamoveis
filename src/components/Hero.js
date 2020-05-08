import React from "react";

import moveisImg from '../pages/assets/moveis.jpg'

export default function Hero() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="p-8">
        <h2 className="font-bold text-2xl">Móveis Planejados</h2>
        <p className="text-xl">
          Comerciais e residenciais para todos os ambientes
        </p>
        <p className="text-gray-700">Atendemos Puso Alegre e toda a regiao</p>
      </div>
      <div>
        <img src={moveisImg} alt="moveis" />
      </div>
    </div>
  );
}
