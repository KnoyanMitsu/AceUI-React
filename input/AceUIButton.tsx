import React from "react";

type Props = {
  title: string;
  onClick?: () => void;
};

function AceUIButton({ title, onClick }: Props) {
  return (
    <>
      <button
        className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-md p-2"
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
}

export default AceUIButton;
