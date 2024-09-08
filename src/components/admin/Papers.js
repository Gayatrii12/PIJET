import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import { Modal } from './Modal'; // Ensure this path is correct

const Papers = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const config = useMemo(() => ({
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyIiwiaWF0IjoxNzEwNjczNjY4fQ.0JYfX6WHB4teDRNdARq2SLdOPaSBcx-m9apCzLl52Yw`,
    },
    params: {}
  }), []);

  const viewpdf = async (paperid) => {
    try {
      const response = await axios.get('http://localhost:5000/admin/getpaperbyid', {
        ...config,
        params: { paperId: paperid }
      });
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/getallsubmissions', config);
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [config]);

  // Filter data based on query
  const filteredData = data.filter(row =>
    row.title_main.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="text-3xl p-5 font-bold text-pijet-blue">PAPERS</div>
      <div className="max-w-3xl mx-auto">
        <form className="flex items-center shadow-xl" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-pijet-blue"
            placeholder="Search by paper title"
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
      <div className="bg-white max-w-6xl h-screen mx-auto mt-10 shadow-xl">
        <div className="overflow-y-auto max-h-[100vh] scrollbar-hide">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                  Sr. No.
                </th>
                <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                  Title
                </th>
                <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                  Domain
                </th>
                <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                  Status
                </th>
                <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                  View PDF
                </th>
                <th className="px-6 py-3 border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                  View Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                    <div className="relative overflow-hidden">
                      <div className="truncate max-w-xs" title={row.title_main}>
                        {row.title_main}
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden text-sm text-white bg-black rounded-md p-2 group-hover:block">
                        {row.title_main}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                    <div className="relative overflow-hidden">
                      <div className="truncate max-w-xs" title={row.paper_domain}>
                        {row.paper_domain}
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden text-sm text-white bg-black rounded-md p-2 group-hover:block">
                        {row.paper_domain}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                    {row.status}
                  </td>
                  <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                    <button onClick={() => viewpdf(row.registration_id)} className="bg-pijet-blue text-white p-1 rounded-lg hover:ring-pijet-blue ring-1 px-2 ease-in-out hover:bg-white hover:text-black">View PDF</button>
                  </td>
                  <td className="px-6 py-4 border border-gray-200 whitespace-nowrap text-sm text-gray-500 text-center">
                    <button onClick={toggleModal} className="ring-pijet-blue ring-1 p-1 px-1 rounded-lg ease-in-out hover:bg-pijet-blue hover:text-white">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal showModal={modal} toggleModal={toggleModal} />
    </div>
  );
};

export default Papers;
