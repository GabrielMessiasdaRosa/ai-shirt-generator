import React from "react";
import CustomButton from "./custom-button";
function FilePicker({ file, setFile, readFile }) {
  return (
    <div className="filepicker-container ">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p>
          {file ? (
            file.name
          ) : (
            <span className="text-gray-400">No file selected</span>
          )}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outlined"
          title={"Logo"}
          handleClick={() => readFile("logo")}
        />
        <CustomButton
          type="filled"
          title={"Full"}
          handleClick={() => readFile("full")}
        />
      </div>
    </div>
  );
}

export default FilePicker;
