import Todo from "./Components/Todo";

export default function Home() {
  return (
    <>
      <form className="flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto" >
        <input type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 w-full rounded-md" />
        <textarea name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full rounded-md"></textarea>
        <button type="submit" className="bg-orange-600 text-white py-3 px-11 rounded-md">Add Todo</button>
      </form>
      {/* table from flowbite */}
      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo></Todo>
            <Todo></Todo>
            <Todo></Todo>
          </tbody>
        </table>
      </div>

    </>
  );
}
