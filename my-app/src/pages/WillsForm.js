import React, { useState, useEffect } from "react";

export default function OnlineWillsForm() {
    const emptyBeneficiary = () => ({ name: "", relationship: "", share: "" });
    const emptyExecutor = () => ({ name: "", relationship: "" });

    const [form, setForm] = useState({
        fullName: "",
        dob: "",
        address: "",
        phone: "",
        email: "",
        executors: [emptyExecutor()],
        beneficiaries: [emptyBeneficiary()],
        assets: "",
        funeralWishes: "",
        guardians: "",
        specialInstructions: "",
        witnessedBy: "",
        dateSigned: new Date().toISOString().slice(0, 10),
    });

    const [saved, setSaved] = useState(false);
    const [submissions, setSubmissions] = useState([]);

    // Load submissions from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("wills_submissions");
        if (stored) {
            try {
                setSubmissions(JSON.parse(stored));
            } catch (e) {
                console.error("Invalid localStorage data", e);
            }
        }
    }, []);

    // Auto-hide saved message
    useEffect(() => {
        if (saved) {
            const id = setTimeout(() => setSaved(false), 3000);
            return () => clearTimeout(id);
        }
    }, [saved]);

    // Update a form field
    function updateField(path, value) {
        if (!path.includes(".")) {
            setForm((f) => ({ ...f, [path]: value }));
            return;
        }
        const [collection, idx, key] = path.split(".");
        setForm((f) => {
            const copy = { ...f };
            copy[collection] = copy[collection].map((item, i) =>
                Number(i) === Number(idx) ? { ...item, [key]: value } : item
            );
            return copy;
        });
    }

    // Add a new beneficiary
    function addBeneficiary() {
        setForm((f) => ({
            ...f,
            beneficiaries: [...f.beneficiaries, emptyBeneficiary()],
        }));
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        setSubmissions((prev) => [...prev, form]);
        localStorage.setItem(
            "wills_submissions",
            JSON.stringify([...submissions, form])
        );
        setSaved(true);
        // Reset form
        setForm({
            fullName: "",
            dob: "",
            address: "",
            phone: "",
            email: "",
            executors: [emptyExecutor()],
            beneficiaries: [emptyBeneficiary()],
            assets: "",
            funeralWishes: "",
            guardians: "",
            specialInstructions: "",
            witnessedBy: "",
            dateSigned: new Date().toISOString().slice(0, 10),
        });
    }

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Online Wills Form
            </h2>

            {saved && (
                <p className="text-green-600 text-center mb-4">
                    Submission saved successfully!
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="block mb-1">Full Name</label>
                    <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => updateField("fullName", e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                {/* Beneficiaries */}
                <div>
                    <label className="block mb-1">Beneficiaries</label>
                    {form.beneficiaries.map((b, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                            <input
                                type="text"
                                placeholder="Name"
                                value={b.name}
                                onChange={(e) =>
                                    updateField(`beneficiaries.${i}.name`, e.target.value)
                                }
                                className="border rounded p-1 flex-1"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Relationship"
                                value={b.relationship}
                                onChange={(e) =>
                                    updateField(`beneficiaries.${i}.relationship`, e.target.value)
                                }
                                className="border rounded p-1 flex-1"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Share"
                                value={b.share}
                                onChange={(e) =>
                                    updateField(`beneficiaries.${i}.share`, e.target.value)
                                }
                                className="border rounded p-1 flex-1"
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addBeneficiary}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                        Add Beneficiary
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}