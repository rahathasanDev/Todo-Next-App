import React from 'react';

const Todo = ({ id, title, description, mongoId, complete }) => {
  return (
    <tr className="">
      <th scope="row" className="px-6 py-4 font-medium">
        {id + 1}
      </th>
      <td className="px-6 py-4">
        {title}
      </td>
      <td className="px-6 py-4">
        {description}
      </td>
      <td className="px-6 py-4">
        {complete?"Completed":"Pending"}
      </td>
      <td className="px-6 py-4 flex gap-1 ">
        <button className='py-2 px-4 bg-red-500 text-white rounded'>Delete</button>
        <button className='py-2 px-4 bg-green-500 text-white rounded '>Done</button>
      </td>
    </tr>
  );
};

export default Todo;