import React, { useEffect, useState } from "react";
import Inputform from "./component/InputForm";

const Contact = () => {
  const [userData, setUserdata] = useState([]);



  const usersApi = async () => {
    try {
      const data = await fetch('https://dummyjson.com/users');
      const res = await data.json();
      const usr = await res.users;
      setUserdata(usr);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    usersApi();
  }, [])

  const DeleteItem = (id) => {
    const newData = userData.filter((elem) => {
      return id !== elem.id;
    })
    setUserdata(newData);
  }

  return (<>
    <div className="flex flex-col ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    UserName
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Password
                  </th>

                </tr>
              </thead>
              <tbody>

                {
                  userData.map((val) => {
                    if (val.age) {
                      val.age = 18
                      return (<>
                        <tr className="border-b" key={val.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{val.id}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.firstName}
                          </td>
                          <td className="text-sm text-red-900 font-bold px-6 py-4 whitespace-nowrap">
                            {val.age}
                          </td>
                          <button className="bg-blue-400 font-bold rounded p-1" onClick={() => DeleteItem(val.id)}>Delete</button>
                        </tr>

                      </>)

                    }
                    else {
                      return (<>

                        <tr className="border-b" key={val.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{val.id}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.firstName}
                          </td>
                          <td className="text-sm text-blue-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.age}
                          </td>

                        </tr>

                      </>)

                    }

                  })
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>



  </>)
};
export default Contact;