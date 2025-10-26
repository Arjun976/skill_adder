import React, { useState } from "react";

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
    setTempData({ skillname: "", Efforttime: "", Source: "", Sourcelink: "", remark: "" }); // Clear inputs
  };

  return (
    <div>
      <h3>Add Skill</h3>
      <input
        type="text"
        name="skillname"
        value={tempData.skillname}
        onChange={handleChange}
        placeholder="Skill Name"
      />
      <input
        type="text"
        name="Efforttime"
        value={tempData.Efforttime}
        onChange={handleChange}
        placeholder="Effort Time"
      />
      <input
        type="text"
        name="Source"
        value={tempData.Source}
        onChange={handleChange}
        placeholder="Source"
      />
      <input
        type="text"
        name="Sourcelink"
        value={tempData.Sourcelink}
        onChange={handleChange}
        placeholder="Source Link"
      />
      <input
        type="text"
        name="remark"
        value={tempData.remark}
        onChange={handleChange}
        placeholder="Remark"
      />

      <button onClick={handleAddSkill}>Add Skill</button>

      <h4>Current Skill Data:</h4>
      <pre>{JSON.stringify(skilldata, null, 2)}</pre>
    </div>
  );
};

export default Preview;
