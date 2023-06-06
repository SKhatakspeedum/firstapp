import React, { useEffect, useState } from "react";
import "./NestedDrop.css";
import blueicon from "../NestedDrop/images/blueicon.png";
import test from "./images/test.png";

//Json
const Accordion = (props) => {
  const accordionData = [
    {
      id: "accordionItem1",
      heading: "Category #1",
      content: ["Lorem", "Consectr adipiscing", "Sedincididunt"],
      isexpand: false,
    },
    {
      id: "accordionItem2",
      heading: "Category #2",
      content: ["Ut veniam", "PHQ 9", "Laboris"],
      isexpand: false,
    },
    {
      id: "accordionItem3",
      heading: "Category #3",
      content: ["Ut enim", "Exercitation", "Laboris nisi"],
      isexpand: false,
    },
  ];

  //state to open item of json defalt passing empty array.
  const [openItems, setOpenItems] = useState([]);
  //state to show or hide ExpandCompress button on the props response.
  const [showExpandCompress, setShowExpandCompress] = useState(props.showbtn);


  //Function to open item of accordionData.
  const handleAccordionClick = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((item) => item !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  //Up Down icon on button.
  const getButtonIcon = (itemId) => {
    return openItems.includes(itemId) ? (
      <i className="fa-solid fa-chevron-up icon_up_down"></i>
    ) : (
      <i className="fa-solid fa-chevron-down icon_up_down"></i>
    );
  };

  //Add active class to change the color of active button.
  const getActiveClass = (itemId) => {
    return openItems.includes(itemId) ? "active-button accordion-button" : "";
  };

  //Function to ExpandAll items
  //it was working when we had two separation button for ExpandAll 
  const handleExpandAll = () => {
    const ExpandAll = accordionData.map((item) => item.id);
    setOpenItems(ExpandAll);
  };

  //Function to CompresAll items
  const handleExpandCompress = () => {
    if (openItems.length === accordionData.length) {
      setOpenItems([]);
    } else {
      const ExpandAll = accordionData.map((item) => item.id);
      setOpenItems(ExpandAll);
    }
  };
  return (
    <>
      <div className="Base_div1"> HEADING SECTION</div>
      <div className="Base_div2">
        <div className="main_div">
          {/* check the props value,if value is true then it'll show ExpandCompress button? */}
          {showExpandCompress && (
            <div className="ExpandCompress">
              <button
                onClick={handleExpandCompress}
                className="ExpandCompressBtn border"
              >
                {openItems.length === accordionData.length
                  ? "Compress All"
                  : "Expand All"}
              </button>
            </div>
          )}
          <div className="border">
            {accordionData.map((item) => (
              <div key={item.id}>
                <button
                  // passing className by state
                  className={`inactive-button accordion-button ${getActiveClass(
                    item.id
                  )}`}
                  onClick={() => handleAccordionClick(item.id)}
                >
                  <div className="btn_div">
                    <img src={blueicon}></img>
                    <div className="headding">{item.heading}</div>
                  </div>
                  <div>{getButtonIcon(item.id)}</div>
                </button>
                {openItems.includes(item.id) && (
                  <div className="ul_div">
                    <ul>
                      {item.content.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="new_div">
          <img src={test} className="test"></img>
        </div>
      </div>
    </>
  );
};

export default Accordion;
