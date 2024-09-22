import React, { useState } from "react";

const FinalStatus = () => {
  const [query, setQuery] = useState("");
  const data = Array.from({ length: 10 }, (_, index) => ({
    col1: `Data ${index + 1} - 1`,
    col2: `Data ${index + 1} - 2`,
    col3: `Data ${index + 1} - 3`,
    col4: `Data ${index + 1} - 4`,
  }));

  const filteredData = data.filter(
    (row) =>
      row.col1.toLowerCase().includes(query.toLowerCase()) ||
      row.col2.toLowerCase().includes(query.toLowerCase()) ||
      row.col3.toLowerCase().includes(query.toLowerCase()) ||
      row.col4.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <div>Final Status</div>
      <div className="max-w-3xl mx-auto">
        <form className="flex items-center shadow-xl" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-pijet-blue"
            placeholder="Search for paper here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-pijet-blue text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-pijet-blue"
          >
            Search
          </button>
        </form>
      </div>
      <div className="bg-white max-w-5xl h-screen mx-auto mt-10 shadow-xl">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                Column 1
              </th>
              <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                Column 2
              </th>
              <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                Column 3
              </th>
              <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                Column 4
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                  {row.col1}
                </td>
                <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                  {row.col2}
                </td>
                <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                  {row.col3}
                </td>
                <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                  {row.col4}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinalStatus;
