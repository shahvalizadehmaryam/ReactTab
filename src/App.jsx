import "./App.css"
import Tab from "./components/Tab/Tab";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      heading: "Heading for Tab 1",
      content: "This is the paragraph content of Tab 1.",
    },
    {
      label: "Tab 2",
      heading: "Heading for Tab 2",
      content: "This is the paragraph content of Tab 2.",
    },
    {
      label: "Tab 3",
      heading: "Heading for Tab 3",
      content: "This is the paragraph content of Tab 3.",
    },
    {
      label: "Tab 4",
      heading: "Heading for Tab 4",
      content: "This is the paragraph content of Tab 4.",
    },
  ];
 
  return (
    <div>
      <h1>Tabs Component With React</h1>
     <Tab tabs={tabs} />
    </div>
  )
}

export default App
