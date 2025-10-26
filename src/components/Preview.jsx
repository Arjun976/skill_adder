import React, { useState } from "react";
import Card from "./Card/card.jsx";
// import Card from './components/Card/card.jsx';
import Skill from '../../src/assets/skill-Img.jpg'

const Preview = ({ skilldata, setskilldata }) => {
  // Temporary input values before clicking "Add Skill"
  const [tempData, setTempData] = useState({
    skillname: "",
    Efforttime: "",
    Source: "",
    Sourcelink: "",
    remark: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  // Add skill data only when button is pressed
  const handleAddSkill = () => {
    if (!tempData.skillname.trim()) {
      alert("Please enter a skill name!");
      return;
    }

    setskilldata(tempData); // Store this single skill
    setTempData({
      skillname: "",
      Efforttime: "",
      Source: "",
      Sourcelink: "",
      remark: "",
    }); // Clear inputs
  };

  return (
    <div className="z-10 flex flex-col justify-center items-center gap-36 px-7  rounded-2xl before:opacity-55 w-full bg-no-repeat bg-cover bg-left" style={{backgroundImage: `URL(${Skill})`}}>
      <div className="backdrop-blur-xl shadow-2xl flex flex-col justify-baseline gap-2 rounded-xl p-16 mt-2.5 border-cyan-50 border-2">
        <h3 className=" font-bold uppercase text-2xl font-serif shadow-blue-100 text-shadow-lg/50 text-center mb-4 text-white">
          Add Skill
        </h3>
        <div className="flex flex-col gap-4 font-serif">
          <input
            className="border-2 border-indigo-400  px-4 py-2 rounded-xl min-w-96 bg-white"
            type="text"
            name="skillname"
            value={tempData.skillname}
            onChange={handleChange}
            placeholder="Skill Name"
          />
          <input
            className="border-2 border-indigo-400  px-4 py-2 rounded-xl min-w-96 bg-white"
            type="text"
            name="Efforttime"
            value={tempData.Efforttime}
            onChange={handleChange}
            placeholder="Effort Time"
          />
          <input className="border-2 border-indigo-400  px-4 py-2 rounded-xl min-w-96 bg-white"
            type="text"
            name="Source"
            value={tempData.Source}
            onChange={handleChange}
            placeholder="Source"
          />
          <input className="border-2 border-indigo-400  px-4 py-2 rounded-xl min-w-96 bg-white"
            type="text"
            name="Sourcelink"
            value={tempData.Sourcelink}
            onChange={handleChange}
            placeholder="Source Link"
          />
          <input className="border-2 border-indigo-400  px-4 py-2 rounded-xl min-w-96 bg-white"
            type="text"
            name="remark"
            value={tempData.remark}
            onChange={handleChange}
            placeholder="Remark"
          />
        </div>
        <button className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-xl font-serif rounded-xl  font-bold px-5 py-2.5 text-center me-2 mb-2 border-none max-w-60 mt-8" onClick={handleAddSkill}>Add Skill</button>
      </div>
      {/* <h4>Current Skill Data:</h4> */}
      {/* <pre>{JSON.stringify(skilldata, null, 2)}</pre> */}

      <Card skillData={skilldata} />
    </div>
  );
};

export default Preview;
