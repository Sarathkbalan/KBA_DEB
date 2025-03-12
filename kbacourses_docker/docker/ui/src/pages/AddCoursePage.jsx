import React, { useState } from "react";

const AddCoursePage = () => {
  const [courseName, setCourseName] = useState("");
  const [courseid, setCourseid] = useState("");
  const [courseType, setCourseType] = useState("Self-Paced");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("Rs.5000");
  const [courseImage, setCourseImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("courseName", courseName);
      formData.append("courseid", courseid);
      formData.append("courseType", courseType);
      formData.append("description", description);
      formData.append("price", price);
      if (courseImage) formData.append("courseImage", courseImage);

      const res = await fetch("/api/add-course", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (res.ok) {
        alert("Course added successfully!");
      } else {
        alert("Failed to add course!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-white mb-20">
      <div className="container m-auto max-w-2xl py-2">
        <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
              Add Course
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Course Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Certified Blockchain Associate"
                required
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Course Id</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 1"
                required
                value={courseid}
                onChange={(e) => setCourseid(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Course Type</label>
              <select
                className="border rounded w-full py-2 px-3"
                required
                value={courseType}
                onChange={(e) => setCourseType(e.target.value)}
              >
                <option value="Self-Paced">Self-Paced</option>
                <option value="Instructor-Led">Instructor-Led</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Small description of the course"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Price</label>
              <select
                className="border rounded w-full py-2 px-3"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="Rs.5000">Rs.5000</option>
                <option value="Rs.3500">Rs.3500</option>
                <option value="Rs.15000">Rs.15000</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Course Image</label>
              <input
                type="file"
                accept="image/*"
                className="border rounded w-full py-2 px-3"
                onChange={(e) => setCourseImage(e.target.files[0])}
              />
            </div>

            <div>
              <button
                className="bg-purple-500 hover:bg-purple-600 my-10 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCoursePage;
