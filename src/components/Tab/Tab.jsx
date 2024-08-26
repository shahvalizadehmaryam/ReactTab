import { useState } from "react";
import "./Tab.css"

const Tab = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <div className="tab-header-container">
        <ul>
          {tabs.map((tab,index) => (
            <li key={index}>
              <button className={`${activeTabIndex === index ? "active-btn-tab" : ""} tab-btn`} onClick={() => setActiveTabIndex(index)}>{tab.label}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content-container">
      {tabs.map((tab,index) => (
        <div key={index} className={ activeTabIndex === index ? "active" : "tab-content"}>
          <h3>{tab.heading}</h3>
          <p>{tab.content}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Tab;
