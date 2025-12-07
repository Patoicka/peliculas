import React from "react";
import { Search } from "./Search";

import perfil from "../assets/perfil.JPEG";

export const Layout = () => {
  return (
    <div className="flex bg-neutral-900 w-full h-screen">
      <div className="bg-neutral-700 h-full w-1/6">
        
      </div>
      <div className="bg-neutral-900 h-full w-5/6 flex flex-col items-center relative">
      <img src={perfil} alt="perfil" className="absolute right-10 top-10 w-15 h-15 rounded-full bg-amber-50 object-cover" />
        <Search text="text" placeholder="Ingrese el nombre de la pelicula..." onChange={(e) => console.log(e.target.value)} />
      </div>
    </div>
  );
};
