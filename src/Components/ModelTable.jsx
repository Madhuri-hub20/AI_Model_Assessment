import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import CreateNewModel from "./CreateNewModel";
import { useState } from "react";
import { Button } from "primereact/button";


const ModelTable = () => {
    const data = [
        { id: 1, name: "Model A", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" },
        { id: 2, name: "Model B", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" },
        { id: 3, name: "Model C", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" },
        { id: 4, name: "Model D", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" },
        { id: 5, name: "Model E", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Inactive", action: "Action" },
        { id: 6, name: "Model F", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" },
        { id: 7, name: "Model G", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" },
        { id: 8, name: "Model H", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" },
        { id: 9, name: "Model I", type: "Category 1", description: "Edit Customer..", created_on: "15-01-2023", last_trained_on: " 15-01-2023", status: "Active", action: "Action" }

    ];
    const [models, setModels] = useState(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState(null);



    const nameBodyTemplate = (rowData) => {
        return (
            <div className="text-gray-600">
                {rowData.name}
                <div className="text-sm text-gray-500">ID: {rowData.id}</div>
            </div>
        );
    };

    const statusBodyTemplate = (rowStatus) => {
        // Assuming rowData.status can be 'Active' or 'Inactive'
        return (
            <span
                className={`px-3 py-1 rounded-full text-sm 
              ${rowStatus.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'}`}
            >
                {rowStatus.status}
            </span>
        );
    };

    const handleDelete = (model) => {
        setModels((prevModels) => prevModels.filter((item) => item.id !== model.id));
        console.log("Deleted model:", model);
    };

    const openModal = (model) => {
        setSelectedModel(model); // Set the model for editing
        setIsModalOpen(true);    // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedModel(null);  // Reset the selected model after closing
    };

    const handleSaveModel = (newModel) => {
        if (newModel.id) {
            // Update existing model
            setModels((prevModels) =>
                prevModels.map((model) =>
                    model.id === newModel.id ? newModel : model
                )
            );
        } else {
            // Add a new model
            const newId = models.length > 0 ? models[models.length - 1].id + 1 : 1;
            setModels([...models, { ...newModel, id: newId }]);
        }
        closeModal(); // Close modal after saving
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Model Library</h2>
                <button
                    onClick={() => {
                        if (!isModalOpen) setIsModalOpen(true);
                    }}
                    className="px-4 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mt-2 mr-8">
                    + Create New Model
                </button>
            </div>
            {/* Search and Filter Section */}
            <div className="flex items-center gap-4 mb-4">
                {/* Search Bar */}
                <div className="w-full max-w-sm min-w-[900px]">
                    <div className="relative flex bg-gray-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute w-5 h-5 top-3 left-3 text-slate-600"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow rounded-lg focus:ring-2 focus:ring-indigo-500"
                            placeholder="Search..."
                        />
                    </div>
                </div>

                {/* Filter Dropdown */}
                <div className="relative flex items-center bg-gray-100 border border-slate-200 rounded-lg shadow-sm">
                    {/* Icon */}
                    <svg
                        className="w-6 h-6 text-gray-800 ml-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                        />
                    </svg>

                    {/* Dropdown */}
                    <select
                        className="bg-transparent text-slate-700 text-lg px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 w-full"
                    >
                        <option value="">Filter by</option>
                        <option value="date">Date</option>
                        <option value="category">Category</option>
                        <option value="status">Status</option>
                    </select>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                    <input type="date" className="text-gray-500" />
                    <span>-</span>
                    <input type="date" className="text-gray-500" />
                </button>

            </div>
            {/* Table */}
            <div className="relative flex flex-col w-full h-full bg-white shadow-md rounded-xl bg-clip-border p-6">
                <DataTable
                    value={models}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                    className="w-full text-left table-auto">

                    <Column field="name"
                        header={
                            <div className="flex items-center justify-between">
                                <span>Model Name</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 ml-2 text-gray-400">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                    />
                                </svg>
                            </div>
                        }
                        style={{ width: "12%" }} body={nameBodyTemplate}>
                    </Column>

                    <Column field="type" header={
                        <div className="flex items-center justify-between">
                            <span>Model Type</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 ml-2 text-gray-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                />
                            </svg>
                        </div>
                    }
                        style={{ width: "12%" }}>
                    </Column>

                    <Column field="description" header={
                        <div className="flex items-center justify-between">
                            <span>Description</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 ml-2 text-gray-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                />
                            </svg>
                        </div>
                    }
                        style={{ width: "12%" }}>
                    </Column>

                    <Column field="created_on" header={
                        <div className="flex items-center justify-between">
                            <span>Created_On</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 ml-2 text-gray-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                />
                            </svg>
                        </div>
                    }
                        style={{ width: "12%" }}>
                    </Column>

                    <Column field="last_trained_on" header={
                        <div className="flex items-center justify-between">
                            <span>Last_Trained_On</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 ml-2 text-gray-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                />
                            </svg>
                        </div>
                    }
                        style={{ width: "12%" }}>
                    </Column>

                    <Column field="status" header={
                        <div className="flex items-center justify-between">
                            <span>Status</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 ml-2 text-gray-400">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                                />
                            </svg>
                        </div>
                    }
                        style={{ width: "12%" }} body={statusBodyTemplate}>
                    </Column>

                    <Column field="action" header="Action" style={{ width: "12%" }} body={(rowData) => (
                        <div>
                            <Button
                                icon="pi pi-pencil"
                                className="p-button-rounded p-button-info p-mr-2"
                                onClick={() => openModal(rowData)} // Pass model data to edit
                            />
                            <Button
                                icon="pi pi-trash"
                                className="p-button-rounded p-button-danger"
                                onClick={() => handleDelete(rowData)}
                            />
                        </div>
                    )}>
                    </Column>

                </DataTable>
            </div>
            <CreateNewModel
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                modelData={selectedModel}  // Pass the selected model to the modal
                onSave={handleSaveModel}   // Use handleSaveModel to process saved data
            />
        </div>
    )
}


export default ModelTable;