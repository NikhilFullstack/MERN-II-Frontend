import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Page2 = ()=>{

    const [empData, setEmpData] = useState();

    const getAllData = async () => {
      try {
        console.log(`${process.env.REACT_APP_BASE_URL}/zigy.in/getall`);
        const getPeople = await fetch(
          `http://localhost:8000/zigy.in/getall`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        const res = await getPeople.json();
        setEmpData(res);
        console.log("empdata",res);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAllData();
      console.log("yaha aa gye page2")
    },[]);
    console.log(empData);
  
    // console.log(empData);

    return(
        <>
      <section className="container px-4 mx-auto py-4">
        {/* <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Employees
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>
          <Link to={"/addemployee"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Add Employee
              </button>
            </div>
          </Link>
        </div> */}
        <div className="flex items-center justify-between">
            <Link to={"/zity.in/1"}>
                <div>
                <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                    Add More Data
                </button>
                </div>
            </Link>
        </div>
        
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 1
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 2
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 3
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 4
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 5
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 6
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 7
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Input 8
                      </th>

                      
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {empData?.data.map((person) => (
                        
                      <tr key={person._id}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c1 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i1}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c2 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i2}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c3 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i3}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c4 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i4}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c5 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i5}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c6 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i6}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c7 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i7}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.c8 ?'https://api.dicebear.com/5.x/initials/svg?seed=%F0%9F%97%B8' : 
                                'https://api.dicebear.com/5.x/initials/svg?seed=X'}
                                alt="Tick"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.i8}
                              </div>
                            </div>
                          </div>
                        </td>

                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Page2;