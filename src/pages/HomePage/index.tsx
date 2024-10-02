import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full bg-white-a700'>
       <div className="relative">
        <div className="absolute">
            <div className="container-xs">
                {/* <Suspense>

                </Suspense> */}
            </div>
            <div className="absolute bottom-0" />
        </div>

        <div className="relative mt">
            <img src="" alt="" />
            <div className="absolute bottom-0">
                <div className="flex w[40%]">
                    <img src="" alt="" />
                    <div className="mb-3">
                        <div className="flex flex-col">
                            <div className="flex item-center">
                                <div></div>
                                <div></div>
                                <p></p>
                            </div>

                            <div className="flex item-center">
                                <div></div>
                                <div></div>
                                <p></p>
                            </div>

                            <div className="flex item-center">
                                <div className="flex w-[86%]">
                                    <div></div>
                                    <div></div>
                                </div>
                                <p></p>
                            </div>

                            <div className="flex item-center">
                                <div className="flex w-[86%]">
                                    <div></div>
                                    <div></div>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                   <div className="flex">
                        <img src="" alt="" />
                        <img src="" alt="" />
                   </div>
                   <img src="" alt="" /> 
                </div>
            </div>
        </div>

        <div className="absolute left-0">
            <div className="flex flex-col">
                <p></p>
                <p></p>
            </div>
            <div className="flex gap">
               <button>Buy Template</button> 
               <button>Explore</button> 
            </div>
        </div>
        <p>Header</p>
       </div> 
       <h4>Other Sections</h4>
    </div>
  )
}

export default HomePage