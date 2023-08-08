import React from "react";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import state from "../store";
import CustomButton from "./custom-button";
function AiPicker({ prompt, setPrompt, isGenerating = false, handleSubmit }) {
  const snap = useSnapshot(state);

  const loadingStyles = {
    backdropFilter: "blur(10px)",
    color: getContrastingColor(snap.color),
  };
  return (
    <div className="aipicker-container">
      OPEN AI API KEY EXPIRED !
      {/* <textarea
        className="aipicker-textarea"
        placeholder="Ask ai ..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {isGenerating ? (
          <div
            className="px-8 flex-1 flex py-8 items-center justify-center"
            style={loadingStyles}
          >
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0
              12h4zm2 5.291A7.962 7.962 0 014 12H0c0
              3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            <CustomButton
              customStyles={"text-sm flex-1 px-8 py-2 rounded-md"}
              handleClick={() => handleSubmit("full")}
              title="Full"
              type={"filled"}
            />
            <CustomButton
              customStyles={"text-sm flex-1 px-8 py-2 rounded-md"}
              handleClick={() => handleSubmit("logo")}
              title="Logo"
              type={"outlined"}
            />
          </>
        )}
      </div> */}
    </div>
  );
}

export default AiPicker;
