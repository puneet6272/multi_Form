import { useState } from 'react'
import './App.css'
import First_Form from './Components/First_Form'
import Second_form from './Components/Second_form'
import Revies from './Components/Revies'

function App() {

  const initialData = {
    email: "",
    first_name: "",
    last_name: "",
    occupation: "",
    city: "",
    bio: ""
  }

  const [inpvalue, setInpVaue] = useState(initialData)


  const [title, setTitle] = useState('Enter User Details')
  const [pageNumber, setPageNumber] = useState(1)

  const [allData, setAllData] = useState({})

  const continueCLick = (data) => {
    setAllData({ ...allData, ...data })
  }

  // console.log(allData)

  return (
    <div>
      <header className='bg-sky-500'>
        <nav className='flex p-5'>
          {/* menu Button */}
          <div>
            <button className="relative group">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                  <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                  <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <h1 className='flex justify-center items-center w-full text-2xl font-bold text-white'>{title}</h1>

        </nav>
      </header>

      <main>

        {pageNumber === 1 ? <div>
          <First_Form
            setInpVaue={setInpVaue}
            inpvalue={inpvalue}
            setPageNumber={setPageNumber}
            continueCLick={continueCLick}
            setTitle={setTitle}
            allDatas={allData}
          />
        </div> :
          <>{pageNumber === 2 ? <div>
            <Second_form
              setInpVaue={setInpVaue}
              inpvalue={inpvalue}
              setPageNumber={setPageNumber}
              continueCLickP={continueCLick}
              setTitle={setTitle}
              allDatas={allData}
            />
          </div> :

            <>
              {pageNumber === 3 ? <Revies
                setPageNumber={setPageNumber}
                allDatas={allData}
                setTitle={setTitle} /> :

                <div className=' flex justify-center flex-col'>
                  <p className=' flex justify-center my-4 font-semibold text-5xl'>Success</p>

                  <div className='flex justify-center'>

                    <button onClick={() => {
                      setPageNumber(1), setInpVaue({
                        email: "",
                        first_name: "",
                        last_name: "",
                        occupation: "",
                        city: "",
                        bio: ""
                      })
                    }}
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Home
                    </button>
                  </div>
                </div>
              }

            </>
          }</>}



      </main>
    </div>
  )
}

export default App
