import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Author from "../components/author";
import "./register.css";
import Rnavbar from "../components/Register_Navbar";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleisOpen = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const API_UPLOAD = "https://pijet-backend.onrender.com/submit/";
  const API_SUBMIT = "https://pijet-backend.onrender.com/submit/upload";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      toast.success("Sign in successful!");
    }
  }, [navigate]);

  const [authors, setAuthors] = useState([{ id: 1 }]);
  const [selectedVolume, setSelectedVolume] = useState("");
  const [paperKeywords, setPaperKeywords] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [domain, setDomain] = useState("");
  const [abstract, setAbstract] = useState("");
  const [title, setTitle] = useState("");

  //ideally should come from the backend
  const volumesList = [
    "Volume 1 Issue 2 June 2024",
    // Add more volumes as needed
  ];

  const domainList = [
    "Computer Science",
    "Information Technology",
    "Electronics and Telecommunication",
    "Electronics and Electrical",
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
    setUploadedFile(e.target.files[0]);
  };

  const updateAuthorData = (data) => {
    var authorDataCopy = JSON.parse(JSON.stringify(authors));
    authorDataCopy[data.position - 1] = data;
    setAuthors(authorDataCopy);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateData = () => {
    if (
      selectedVolume !== "" &&
      paperKeywords !== "" &&
      uploadedFile !== null &&
      domain !== "" &&
      abstract !== "" &&
      title !== ""
    ) {
      for (let author of authors) {
        if (
          !author.fname ||
          !author.lname ||
          !author.organization ||
          !author.country ||
          !author.email ||
          !isValidEmail(author.email)
        ) {
          toast.error("Invalid author details. Please recheck...");
          return false; // At least one author field is missing or invalid
        }
      }
      return true; // All states are set
    } else {
      toast.error(
        "Please fill all relevant fields and upload your manuscript copy."
      );
      return false; // At least one state is not set
    }
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (validateData()) {
        toast("Processing your request...");

        var paperDetails = {
          title: title,
          abstract: abstract,
          author_count: authors.length,
          keywords: paperKeywords,
          paper_domain: domain,
          authors: authors,
        };

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(API_UPLOAD, paperDetails, config);

        //if the registration is successful
        if (response.status === 200) {
          const registrationId = response.data.registrationId;

          const formData = new FormData();
          formData.append("file", uploadedFile);
          formData.append("title", title);
          formData.append("registrationId", registrationId);

          toast.success("Authors registered! Uploading paper...");
          const response2 = await axios.post(API_SUBMIT, formData, config);

          //post registration if file upload is successful
          if (response2.status === 200) {
            toast.success("Paper registration successful!");
            navigate(`/submitted/${registrationId}`);
          }
          //if file upload is not successful
          else if (response2.status === 400) {
            toast.error("File upload failed! Try again...");
          }
        } else {
          toast.error("Some error occurred. Please try again!");
        }
      }
    } catch (error) {
      console.error("ERROR: ", error);
      throw error;
    }
  };

  return (
    <>
      <div className="marquee ">
        <h3 className=" text-pijet-blue text-xl font-bold ">
          We are only accepting manuscripts for PIJET Volume 1 Issue 2 - June
          2024.
        </h3>
      </div>
      <div className="w-full flex justify-end pr-20">
        <button className="bg-pijet-blue text-white font-bold py-2 px-4 " onClick={()=>{setIsOpen(!isOpen)}} >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={isOpen ? "hidden" : "flex"}
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="#ffffff"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={isOpen ? "flex" : "hidden"}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        </button>  
      </div>
         

      <div className="default-text-block main_box_papermsg">
        <h2 className="my-6 text-4xl tracking-tight font-extrabold text-pijet-blue py-10">
          Submit your manuscript:
        </h2>
      </div>
      <form
        className="w-11/12 max-w-lg mx-auto my-8"
        encType="multipart/form-data"
      >
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
              htmlFor="domain-selection"
            >
              Domain
            </label>
            <div className="relative">
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="domain-selection"
              >
                <option value="" disabled>
                  Select domain
                </option>
                {domainList.map((domain, index) => (
                  <option key={index} value={domain}>
                    {domain}
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
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 relative">
          <div className="w-full px-3 mb-6 md:mb-0">
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
          <div className="w-full py-3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="abstract"
            >
              Paper Abstract
            </label>
            <textarea
              id="abstract"
              className="appearance-none block w-full h-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            />
          </div>
        </div>
      </form>

      {authors.map((author, index) => (
        <Author
          key={author.id}
          position={index + 1}
          getData={updateAuthorData}
        />
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
