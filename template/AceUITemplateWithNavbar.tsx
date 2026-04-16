/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import Link from "next/link";
import { LogOut, Menu } from "lucide-react";

export type MenuItem = {
  title: string;
  link: string;
};

type AceUITemplateWithNavbarProps = {
  appname: string;
  children: React.ReactNode;
  listMenu?: MenuItem[];
  account?: boolean;
  accountName?: string;
  accountImage?: string;
  accountRole?: string;
  header?: string;
  logoutfunc: () => void;
};

function AceUITemplateWithNavbar({
  appname,
  listMenu = [],
  children,
  account = false,
  accountName = "",
  accountImage = "",
  accountRole = "",
  logoutfunc,
  header,
}: AceUITemplateWithNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 bg-white z-10  relative w-full">
          <div className="grid grid-cols-3 items-center w-full">
            <div >
              <h1 className="text-2xl ">{appname}</h1>
            </div>
            <nav>
              <ul className="flex items-center justify-center">
                {listMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className={`px-4 py-2 flex items-center rounded-lg font-medium transition-all duration-300`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {account && (
              <div className="relative">
                <div
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-xl transition-colors ${isProfilePopupOpen ? "bg-gray-50" : "hover:bg-gray-50"}`}
                  onClick={() => setIsProfilePopupOpen(!isProfilePopupOpen)}
                >
                  <img
                    src={accountImage}
                    alt={accountName}
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                  />
                  <div className="hidden lg:block text-left">
                    <h2 className="text-sm font-medium leading-tight text-gray-800">
                      {accountName}
                    </h2>
                    <p className="text-xs text-gray-500">{accountRole}</p>
                  </div>
                </div>
                {isProfilePopupOpen && (
                  <div className="absolute top-full mt-2 right-0 min-w-[200px] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl z-50 overflow-hidden">
                    <button
                      onClick={() => {
                        if (logoutfunc) {
                          logoutfunc();
                        } else {
                          alert("Logout berhasil diklik!");
                        }
                        setIsProfilePopupOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-red-600 font-medium hover:bg-red-50 transition-colors flex items-center justify-start gap-3"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Header & Navbar */}
        <div className="md:hidden flex flex-col bg-white border-b relative z-20">
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-2 items-center">
              <button
                className="p-2 rounded-lg hover:bg-[#f0f7ff] hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu />
              </button>
              <h1 className="font-bold text-xl">{appname}</h1>
            </div>
            {account && (
              <div className="flex items-center">
                <img
                  src={accountImage}
                  alt={accountName}
                  className="w-9 h-9 rounded-full object-cover cursor-pointer shadow-sm border border-gray-100"
                  onClick={() => setIsProfilePopupOpen(!isProfilePopupOpen)}
                />
              </div>
            )}
          </div>

          {/* Mobile Profile Menu */}
          {isProfilePopupOpen && account && (
            <div className="md:hidden border-t border-gray-100 bg-white">
              <div className="p-4 border-b border-gray-50 flex items-center gap-3">
                <img
                  src={accountImage}
                  alt={accountName}
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h2 className="text-base font-medium text-gray-800">
                    {accountName}
                  </h2>
                  <p className="text-sm text-gray-500">{accountRole}</p>
                </div>
              </div>
              <div className="p-2">
                <button
                  onClick={() => {
                    if (logoutfunc) {
                      logoutfunc();
                    } else {
                      alert("Logout berhasil diklik!");
                    }
                    setIsProfilePopupOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors flex items-center gap-3"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          )}

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <nav className="border-t border-gray-100 bg-white">
              <ul className="flex flex-col p-2 gap-1">
                {listMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 flex items-center rounded-lg font-medium transition-all duration-300 `}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#f0f7ff] rounded-t-2xl overflow-y-auto">
          <div className="md:p-10 p-5 min-h-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="hidden md:block text-3xl font-bold">{header}</h1>
            </div>
            <div className="md:container mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AceUITemplateWithNavbar;
