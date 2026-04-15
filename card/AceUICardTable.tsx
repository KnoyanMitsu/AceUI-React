import React from "react";
import AceUICardWithTitle from "./AceUICardWithTitle";

export type Thead = {
  title: string;
};

export type Tbody = {
  [key: string]: any;
};

type Props = {
  thead: Thead[];
  tbody: Tbody[];
};

function AceUICardTable({ thead = [], tbody = [] }: Props) {
  return (
    <>
      <AceUICardWithTitle title="Grafik Tinggi Air">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              {thead.map((item, index) => (
                <th key={index} className="px-4 py-3 font-medium text-gray-700">
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tbody.map((row) => {
              const { id, ...dataCells } = row;
              return (
                <tr key={id} className="border-b last:border-b-0">
                  {Object.values(dataCells).map((cellValue, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-gray-600">
                      {cellValue}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </AceUICardWithTitle>
    </>
  );
}

export default AceUICardTable;
