import React from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useForm } from "react-hook-form";


const Page1 = ()=>{
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const create = async (data) => {
  
      const savedUserResponse = await fetch(
        `http://localhost:8000/zigy.in/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data }),
        }
      );
  
      console.log("FORM RESPONSE......", savedUserResponse);
  
      navigate("/zity.in/2");
    };

    return(
        <div>
            <div className="flex justify-around flex-row mt-4">
                <h1 className="text-2xl font-bold">Input Fields and Checkboxes</h1>
                <Link to={"/zity.in/2"}>
                    <div>
                        <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                            View Data
                        </button>
                    </div>
                </Link>
            </div>
                
              <form onSubmit={handleSubmit(create)} className="mt-8">
                <div className="grid grid-cols-2">
                    <div className="mb-4 ">
                        <label for="i1" className="block">Input 1:</label>
                        <input type="text" id="i1" name="i1" {...register("i1")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c1" name="c1" {...register("c1")} className="ml-2" />
                    </div>

                    <div className="mb-4">
                        <label for="i2" className="block">Input 2:</label>
                        <input type="text" id="i2" name="i2" {...register("i2")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c2" name="c2" {...register("c2")} className="ml-2" />
                    </div>

                    <div className="mb-4">
                        <label for="i3" className="block">Input 3:</label>
                        <input type="text" id="i3" name="i3" {...register("i3")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c3" name="c3" {...register("c3")} className="ml-2" />
                    </div>
                    <div className="mb-4">
                        <label for="i1" className="block">Input 4:</label>
                        <input type="text" id="i4" name="i4" {...register("i4")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c4" name="c4" {...register("c4")} className="ml-2" />
                    </div>

                    <div className="mb-4">
                        <label for="i5" className="block">Input 5:</label>
                        <input type="text" id="i5" name="i5" {...register("i5")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c5" name="c5" {...register("c5")} className="ml-2" />
                    </div>

                    <div className="mb-4">
                        <label for="i6" className="block">Input 6:</label>
                        <input type="text" id="i6" name="i6" {...register("i6")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c6" name="c6" {...register("c6")} className="ml-2" />
                    </div>
                    <div className="mb-4">
                        <label for="i7" className="block">Input 7:</label>
                        <input type="text" id="i7" name="i7" {...register("i7")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c7" name="c7" {...register("c7")} className="ml-2" />
                    </div>

                    <div className="mb-4">
                        <label for="i8" className="block">Input 8:</label>
                        <input type="text" id="i8" name="i8" {...register("i8")} className="border border-gray-300 p-2" />
                        <input type="checkbox" id="c8" name="c8" {...register("c8")} className="ml-2" />
                    </div>
                </div>

                    <div className="flex justify-center translate-x-[-20%]">
                        <button type="submit" className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
            </form>
        </div>
    )
}

export default Page1;