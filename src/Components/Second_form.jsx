import React, { useState } from 'react'

const initialDataSecondForm = {
    occupation: "",
    city: "",
    bio: ""
}

function Second_form({ setPageNumber, continueCLickP, setTitle,setInpVaue,inpvalue }) {


    function onchangeInputSecondForm(e) {

        setInpVaue({...inpvalue, [e.target.name]: e.target.value }
        )
    }

    function onsubmit(e) {
        e.preventDefault()
        continueCLickP(inpvalue)

        if (inpvalue.occupation !== '' && inpvalue.city !== '' && inpvalue.bio !== '') {
            setPageNumber(3)
            setTitle("Revise All Details")
        }
    }


    return (
        <div>
            <div>

                <div className="max-w-md mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="occupation"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required=""
                            onChange={onchangeInputSecondForm}
                            value={inpvalue.occupation}
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Occupation                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="city"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                                onChange={onchangeInputSecondForm}
                                value={inpvalue.city}
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                City                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="bio"
                                id="floating_last_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required=""
                                onChange={onchangeInputSecondForm}
                                value={inpvalue.bio}
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Bio                            </label>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <button
                        onClick={onsubmit}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Continue
                        </button>
                        <button
                            onClick={() => { setPageNumber(1), setTitle('Enter Personal Details') }
                            }
                            className="text-black bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-500"
                        >
                            Back
                        </button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Second_form