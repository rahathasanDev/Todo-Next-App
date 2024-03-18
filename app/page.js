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
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th scope="row" className="px-6 py-4 font-medium">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">
                White
              </td>
              <td className="px-6 py-4">
                Laptop PC
              </td>
              <td className="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr className="">
              <th scope="row" className="px-6 py-4 font-medium">
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">
                Black
              </td>
              <td className="px-6 py-4">
                Accessories
              </td>
              <td className="px-6 py-4">
                $99
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}
