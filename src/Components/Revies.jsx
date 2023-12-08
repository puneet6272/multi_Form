
import React from 'react'

function Revies({allDatas,setPageNumber,setTitle}) {


    // console.log(allDatas)


    function finalSubmit(){
        setPageNumber(4)
        console.log("object")

    }

    return (
        <div className='flex justify-center'>

            <div className=' w-[1/2]'>
                <div className='shadow-lg my-2 px-2 py-2 rounded-md'>
                    <span className=' font-bold '>Email :</span>{allDatas.email}
                </div>

                <div className='shadow-lg my-2 px-2 py-2 rounded-md'>
                    <span className=' font-bold'>First Name :</span>{allDatas.first_name}
                </div>

                <div className='shadow-lg my-2 px-2 py-2 rounded-md'>
                    <span className=' font-bold'>Last Name :</span>{allDatas.last_name}
                </div>

                <div className='shadow-lg my-2 px-2 py-2 rounded-md'>
                    <span className=' font-bold'>Occupation :</span>{allDatas.occupation}
                </div>

                <div className='shadow-lg my-2 px-2 py-2 rounded-md'>
                    <span className=' font-bold'>City :</span>{allDatas.city}
                </div>

                <div className='shadow-lg my-2 px-2 py-2 rounded-md'>
                    <span className=' font-bold'>Bio :</span>{allDatas.bio}
                </div>

                <div className='flex justify-center gap-3'>
                    <button
                    onClick={finalSubmit}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                    <button
                        type='button'
                        onClick={() => { setPageNumber(2), setTitle('Enter Personal Details') }
                        }
                        className="text-black bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-500"
                    >
                        Back
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Revies
