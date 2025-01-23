import React from "react";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import ModelTable from "./Components/ModelTable";
import CreateNewModel from "./Components/CreateNewModel";

function App() {
  return (

    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800">
          <SideBar />
        </div>

        {/* Model Table */}
        <div className="flex-1 px-4 mt-6">
          <ModelTable />
        </div>

        <div>
          <CreateNewModel />
        </div>
        
      </div>
    </div>
  )
}

export default App
