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
  title: string;
};

function AceUICardTable({ thead, tbody, title }: Props) {
  return (
    <>
      <AceUICardWithTitle title={title}>
        <div className="overflow-x-scroll md:overflow-hidden rounded-2xl border border-blue-100">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-200 text-blue-900">
              <tr>
                {thead.map((item, index) => (
                  <th key={index} className="px-4 py-3 font-medium">
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-blue-50">
              {tbody.map((row, rowIndex) => {
                const { id, ...dataCells } = row;
                return (
                  <tr
                    key={rowIndex}
                    className="border-b border-blue-100 last:border-b-0"
                  >
                    {Object.values(dataCells).map((cellValue, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3 text-gray-700">
                        {cellValue}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </AceUICardWithTitle>
    </>
  );
}

export default AceUICardTable;
