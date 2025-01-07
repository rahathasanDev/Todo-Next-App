"use client"
import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);
  const fetchTodos = async () => {
    const response = await axios('/api');
    setTodoData(response.data.todos)
  }

  const deleteTodo = async (id) => {
    const response = await axios.delete('/api', {
      params: {
        mongoId: id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }

  // completetod function 
  const completeTodo = async (id) => {
    const response = await axios.put('/api', {}, {
      params: {
        mongoId: id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }
  useEffect(() => {
    fetchTodos();
  }, [])
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({ ...form, [name]: value }));
    console.log(formData);
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // api code here 
      const response = await axios.post('/api', formData)

      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      })
      await fetchTodos();

    } catch (error) {
      toast.error('Error')

    }

  }
  return (
    <>
    <ToastContainer theme="light" />
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
    >
      <input
        value={formData.title}
        onChange={onChangeHandler}
        type="text"
        name="title"
        placeholder="Enter Title"
        className="px-3 py-2 border-2 w-full rounded-md"
      />
      <textarea
        value={formData.description}
        onChange={onChangeHandler}
        name="description"
        placeholder="Enter Description"
        className="px-3 py-2 border-2 w-full rounded-md"
      ></textarea>
      <button
        type="submit"
        className="bg-orange-600 text-white py-3 px-11 rounded-md"
      >
        Add Todo
      </button>
    </form>
  
    {/* Centered Table Section */}
    <div className="flex justify-center items-center mt-10 min-h-[60vh] px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 px-6 pt-6">
          Todo List
        </h2>
        <div className="overflow-hidden">
          <table className="hidden md:table w-full border-collapse border border-gray-200">
            <thead className="bg-gray-200 text-gray-600 text-sm uppercase">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todoData.map((item, index) => (
                <tr
                  key={item._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.description}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.isCompleted
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.isCompleted ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {!item.isCompleted && (
                      <button
                        onClick={() => completeTodo(item._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600 transition"
                      >
                        Complete
                      </button>
                    )}
                    <button
                      onClick={() => deleteTodo(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          {/* For mobile screens */}
          <div className="block md:hidden space-y-4 px-4">
            {todoData.map((item, index) => (
              <div
                key={item._id}
                className="bg-gray-50 shadow-md rounded-lg p-4 hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.isCompleted
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.isCompleted ? "Completed" : "Pending"}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-end space-x-2">
                  {!item.isCompleted && (
                    <button
                      onClick={() => completeTodo(item._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
                    >
                      Complete
                    </button>
                  )}
                  <button
                    onClick={() => deleteTodo(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}
