import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";

// Bind Modal to the app root
Modal.setAppElement("#root");

const CreateNewModel = ({ isOpen, onClose, modelData, onSave }) => {
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        type: "",
        llm: "",
        description: "",
    });

    useEffect(() => {
        if (modelData) {
            setFormData({
                id: modelData.id || null, 
                name: modelData.name || "",
                type: modelData.type || "",
                llm: modelData.llm || "",
                description: modelData.description || "",
            });
        } else {
            // Reset formData for new model creation
            setFormData({
                id: null,
                name: "",
                type: "",
                llm: "",
                description: "",
            });
        }
    }, [modelData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        if (!formData.name.trim()) {
            alert("Model Name is required!");
            return;
        }
        onSave(formData); // Pass formData (including ID) to the parent
        onClose(); // Close the modal after saving
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Create New Model"
            className="bg-white rounded-lg shadow p-6 w-1/3 mx-auto mt-24"
            overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
        >
            <h2 className="text-lg font-bold mb-4"> {formData.id ? "Edit Model" : "Create New Model"}</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Model Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Model Name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Model Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                    >
                        <option value="">Select</option>
                        <option value="Extraction">Extraction</option>
                        <option value="Classification">Classification</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">LLM</label>
                    <select
                        name="llm"
                        value={formData.llm}
                        onChange={handleChange}
                        placeholder="Neural (recommended)"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                    >
                        <option value="">Neural (recommended)</option>
                        <option value="GPT-3">GPT-3</option>
                        <option value="GPT-4">GPT-4</option>
                        <option value="BERT">BERT</option>
                        <option value="RoBERTa">RoBERTa</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Model Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter Model Description"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                    {/* Cancel Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-700 hover:text-gray-900 text-sm font-medium bg-indigo-200 rounded-full px-4 py-2 transition"
                    >
                        Cancel
                    </button>
                    {/* Save Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
                    >
                        Save
                    </button>
                </div>
            </form>
        </Modal>
    )

};

export default CreateNewModel;