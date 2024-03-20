import React from 'react';

const Todo = ({ id, title, description, mongoId, complete,deleteTodo,completeTodo }) => {
  return (
    <tr className="">
      <th scope="row" className="px-6 py-4 font-medium">
        {id + 1}
      </th>
      <td className={`px-6 py-4 ${complete?"line-through":""}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${complete?"line-through":""}`}>
        {description}
      </td>
      <td className="px-6 py-4">
        {complete?"Completed":"Pending"}
      </td>
      <td className="px-6 py-4 flex gap-1 ">
        <button onClick={()=>deleteTodo(mongoId)} className='py-2 px-4 bg-red-500 text-white rounded'>Delete</button>
        {/* jodi complete  true hoy tahole ei button dekhabe na and jodi false hoy tahole dekhabe*/}
        {complete?"":<button onClick={()=>completeTodo(mongoId)} className='py-2 px-4 bg-green-500 text-white rounded '>Done</button>}
       
      </td>
    </tr>
  );
};

export default Todo;