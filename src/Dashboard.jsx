import React from "react";
import { Link } from "react-router-dom";
import GoalKeepers from "./GoalKeepers";

function Dashboard() {
  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp4908754.jpg')] min-h-screen bg-cover bg-center">
      <h1 className="text-3xl font-bold text-center text-white ">Welcome to the Dashboard</h1>
      <div className="grid grid-cols-4 gap-4 grid-rows-4 mt-5 mb-5">
        <div >
           <Link to="/profile">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 mt-10">
                 Profile
               </button>
           </Link>
           <br />
           <Link to="/settings">
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5 mt-10">
                 Settings
               </button>
           </Link>
        </div>
        <div className="bg-[url('https://cdn.wallpapersafari.com/10/42/WP3Cdf.jpg')] row-span-2 grid mt-2 rounded-2xl bg-cover bg-center rotate-animation">
         <Link to="/goalkeepers">
           <button className="text-white font-bold text-xl mt-30 rounded flex items-center justify-center w-full h-full">
            GOAL KEEPERS
           </button>
         </Link>
        </div>
        <div className="bg-[url('https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/06/epl-greatest-european-defenders.jpg')] row-span-2 grid  mt-2 rounded-2xl bg-cover bg-center rotate-animation">
         <Link to="/defenders">
          <button className="text-white font-bold text-xl mt-30 rounded flex items-center justify-center w-full h-full">
            DEFENDERS
          </button>
        </Link>
        </div>
        <div className="bg-[url('https://tse1.mm.bing.net/th/id/OIP.ruAwJeiGCSnMfOzntOhdIQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3')] row-span-2  grid  mt-2 rounded-2xl bg-cover bg-center mr-5 rotate-animation">
         <Link to="/defensivemidfielders">
           <button className="text-white font-bold text-xl mt-30 rounded flex items-center justify-center w-full h-full">
            DEFENSIVE MIDFIELDERS
           </button>
          </Link>
        </div>
        <div className="grid row-span-2"> </div>
        <div className="bg-[url('https://tse2.mm.bing.net/th/id/OIP.2z-eQkqDxMcuTTdi_BvHIQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3')] row-span-2 grid mt-2 rounded-2xl bg-cover bg-center rotate-animation">
          <Link to="/offensivemidfielders"> 
           <button className="text-white font-bold text-xl mt-30 rounded flex items-center justify-center w-full h-full">
            OFFENSIVE MIDFIELDERS
           </button>
          </Link>
        </div>
        <div className="bg-[url('https://tse1.mm.bing.net/th/id/OIP.X11PuYm-7aGnYTbvIOWTKwHaDt?rs=1&pid=ImgDetMain&o=7&rm=3')]  grid row-span-2 mt-2 rounded-2xl bg-cover bg-center rotate-animation">
          <Link to="/wingers">
            <button className="text-white font-bold text-xl mt-30 rounded flex items-center justify-center w-full h-full">
              WINGERS
            </button>
          </Link>
        </div>
        <div className="bg-[url('https://th.bing.com/th/id/OIP.9Sm4ugBhQm3OEO8mm6NADAHaEK?w=311&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3')]  row-span-2 mt-2 rounded-2xl mr-5 bg-cover bg-center rotate-animation">
          <Link to="/strikers">
           <button className="text-white font-bold  text-xl mt-30 rounded flex items-center justify-center w-full h-full">
            STRIKERS
           </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;