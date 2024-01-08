import Image from "next/image";

import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeadset,
  IoHeart,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuIcons } from "..";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={30} />,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={30} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={30} />,
    title: "Pokemons",
    subTitle: "Static Generator",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart size={30} />,
    title: "Favorites",
    subTitle: "Favorites View",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-red-600  min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-yellow-300">
          <IoLogoReact className="mr-2 text-black" />
          <span>Luk &apos;</span>
          <span className="text-black">s</span>.
        </h1>
        <p className="text-yellow-300 text-sm">Cerca i tuoi Pokemons</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-yellow-300">Benvenuto</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image src="/photo.cv.jpeg" width={50} height={50} alt="profilo" />
          </span>
          <span className="text-sm md:text-base text-yellow-300 font-bold">
            Luca Navas Fernandini
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuIcons key={item.path} {...item} />
        ))}
        {/* <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Counter
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Estado Local
            </span>
          </div>
        </a> */}
      </div>
    </div>
  );
};
