import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import {
  AiPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";
import { DecalTypes, EditorTabs, FilterTabs } from "../config/constants";
import { reader } from "../config/helpers";
import { fadeAnimation, slideAnimation } from "../config/motion";
import state from "../store";
const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setactiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  useEffect(() => {
    console.log("intro", snap.intro);
    if (snap.intro) {
      setActiveEditorTab("");
    }
  }, [state.intro]);

  // show tab content depending on the active tab
  /*   const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorPicker":
        return <ColorPicker />;
      case "filePicker":
        return <FilePicker />;
      case "aiPicker":
        return <AiPicker />;
      default:
        return null;
    }
  }; */

  const handleDecals = (type, res) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = res;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };
  console.log(prompt);
  const handleSubmit = async (type) => {
    if (!prompt) alert("Please enter a prompt");
    try {
      setIsGenerating(true);
      const res = await fetch(`http://localhost:8080/api/v2/dalle/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      console.log(data);
      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsGenerating(false);
      setActiveEditorTab("");
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = true;
        break;
    }
    setactiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((res) => {
      handleDecals(type, res);
      setActiveEditorTab("");
    });
  };

  return (
    <div key={state.intro}>
      <AnimatePresence>
        {!snap.intro && (
          <>
            <motion.div
              key="custom"
              className="absolute top-0 left-0 z-10"
              {...slideAnimation("left")}
            >
              <div className="flex items-center min-h-screen">
                <div
                  key={activeEditorTab}
                  className="editortabs-container tabs "
                >
                  {EditorTabs.map((tab, index) => {
                    return (
                      <Tab
                        className={`${
                          activeEditorTab === tab.name ? "bg-black" : ""
                        }`}
                        key={index}
                        tab={tab}
                        handleClick={() => {
                          if (activeEditorTab === tab.name) {
                            return setActiveEditorTab(null);
                          }
                          setActiveEditorTab(tab.name);
                        }}
                      />
                    );
                  })}
                  {activeEditorTab === "filePicker" ? (
                    <motion.div
                      key={activeEditorTab}
                      {...fadeAnimation}
                      className="absolute left-full ml-3 top-0"
                    >
                      <FilePicker
                        file={file}
                        setFile={setFile}
                        readFile={readFile}
                      />
                    </motion.div>
                  ) : activeEditorTab === "colorPicker" ? (
                    <motion.div
                      key={activeEditorTab}
                      {...fadeAnimation}
                      className="absolute left-full ml-3 top-0"
                    >
                      <ColorPicker />
                    </motion.div>
                  ) : activeEditorTab === "aiPicker" ? (
                    <motion.div
                      key={activeEditorTab}
                      {...fadeAnimation}
                      className="absolute left-full ml-3 top-0"
                    >
                      <AiPicker
                        prompt={prompt}
                        setPrompt={setPrompt}
                        isGenerating={isGenerating}
                        handleSubmit={handleSubmit}
                      />
                    </motion.div>
                  ) : null}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute flex flex-col lg:flex-row w-[95%] justify-between top-5 left-5 z-10"
              {...fadeAnimation}
            >
              <CustomButton
                type={"filled"}
                title={"Go Back"}
                handleClick={() => (state.intro = true)}
                customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}
              />
              <div>
                Maded with ❤️ by{" "}
                <a href="https://github.com/GabrielMessiasdaRosa">
                  Gabriel Messias da Rosa
                </a>
              </div>
            </motion.div>
            <motion.div
              className="filtertabs-container"
              {...slideAnimation("up")}
            >
              {FilterTabs.map((tab, index) => {
                return (
                  <Tab
                    key={index}
                    tab={tab}
                    isFilterTab
                    isActive={activeFilterTab[tab.name]}
                    handleClick={() => {
                      handleActiveFilterTab(tab.name);
                    }}
                  />
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Customizer;
