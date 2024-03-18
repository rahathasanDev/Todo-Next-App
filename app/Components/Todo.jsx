import React from 'react';

const Todo = () => {
  return (
    <tr className="">
      <th scope="row" className="px-6 py-4 font-medium">
        1
      </th>
      <td className="px-6 py-4">
        Study
      </td>
      <td className="px-6 py-4">
        Learn Next Js
      </td>
      <td className="px-6 py-4">
        Pending
      </td>
      <td className="px-6 py-4 flex gap-1 ">
        <button className='py-2 px-4 bg-red-500 text-white rounded'>Delete</button>
        <button className='py-2 px-4 bg-green-500 text-white rounded '>Done</button>
      </td>
    </tr>
  );
};

export default Todo;