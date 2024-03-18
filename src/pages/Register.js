import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";

import Author from "../components/author";
import "./register.css";

const Register = () => {

  const navigate = useNavigate();

  const API_UPLOAD = '';
  const API_SUBMIT = '';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } 
    else {
      toast.success('Sign in successful!');
    }
  }, [navigate]);

  const [authors, setAuthors] = useState([{ id: 1 }]);
  const [selectedVolume, setSelectedVolume] = useState("");
  const [paperKeywords, setPaperKeywords] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const volumesList = [
    "Volume 1 Issue 2 Jan 2024",
    // Add more volumes as needed
  ];

  const addAuthor = () => {
    setAuthors((prevAuthors) => [
      ...prevAuthors,
      { id: prevAuthors.length + 1 },
    ]);
  };

  const removeAuthor = () => {
    if (authors.length > 1) {
      setAuthors((prevAuthors) => prevAuthors.slice(0, -1));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleSubmit = () => {
    const formData = {
      selectedVolume,
      paperName: document.getElementById("grid-first-name").value,
      paperKeywords,
      uploadedFile: uploadedFile ? uploadedFile.name : null,
      authors,
    };

    // Log the form data as JSON to the console
    console.log(JSON.stringify(formData));

    // Clear the form fields
    setSelectedVolume("");
    document.getElementById("grid-first-name").value = "";
    setPaperKeywords("");
    setUploadedFile(null);
    setAuthors([{ id: 1 }]); // Reset to one author
  };

  return (
    <>
      <div className="marquee ">
        <h3 className=" text-pijet-blue text-xl font-bold ">
          We are only accepting manuscripts for PIJET Volume 1 Issue 2 - Jan 2024.
        </h3>
      </div>

      <div className="default-text-block main_box_papermsg">
        <h2 className="my-6 text-4xl tracking-tight font-extrabold text-pijet-blue py-10">
          Submit your manuscript:
        </h2>
      </div>
      <form className="w-11/12 max-w-lg mx-auto my-8">
        <div className="flex flex-wrap -mx-3 mb-6 relative">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="upcoming-volume"
            >
              Prospective Volume
            </label>
            <div className="relative">
              <select
                value={selectedVolume}
                onChange={(e) => setSelectedVolume(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="upcoming-volume"
              >
                <option value="" disabled>
                  Select Volume and Issue
                </option>
                {volumesList.map((volume, index) => (
                  <option key={index} value={volume}>
                    {volume}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {/* Dropdown Icon */}
                <svg
                  className="h-4 w-4 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Paper Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Paper Title"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6 relative">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="paper-keywords"
            >
              Paper Keywords
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="paper-keywords"
              type="text"
              placeholder="Enter keywords"
              value={paperKeywords}
              onChange={(e) => setPaperKeywords(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="file-upload"
            >
              Upload Document (PDF)
            </label>
            <input
              type="file"
              id="file-upload"
              accept=".pdf"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              onChange={handleFileChange}
            />
            {uploadedFile && (
              <p className="text-sm text-gray-500">
                Uploaded file: {uploadedFile.name}
              </p>
            )}
          </div>
        </div>
      </form>

      {authors.map((author, index) => (
        <Author key={author.id} authorCount={index + 1}  />
      ))}
      <form className="w-11/12 max-w-lg mx-auto my-8">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              type="button"
              onClick={removeAuthor}
              className="text-white bg-red-500 hover:bg-red-600 hover:scale-110 focus:ring-2 focus:outline-none focus:ring-red-200 focus:scale-95 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2 md:mb-0"
            >
              Remove Author
            </button>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              type="button"
              onClick={addAuthor}
              className="text-white bg-pijet-blue hover:bg-pijet-blue hover:scale-110 focus:ring-2 focus:outline-none focus:ring-blue-200 focus:scale-95 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2 md:mb-0"
            >
              Add Author {authors.length + 1}
            </button>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white  bg-green-500  hover:bg-green-600 hover:scale-110 focus:ring-2 focus:outline-none focus:ring-green-200 focus:scale-95 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </>
  );
};

export default Register;
