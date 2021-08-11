import React from "react";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(true)}>
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed max-h-screen overflow-auto inset-0 px-3 py-2 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-xl h-full">
              {/*content*/}
              <div className="border-0 px-3 py-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="p-5 border-b border-solid border-blueGray-180 rounded-t">
                  <div className="text-3xl font-semibold">
                   Return the Garment
                  </div>
                {/*body*/}
                  <div className= "grid grid-rows gap-2 ">
                    <div className="flex items-center mt-4">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Invoice No</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/>
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3 ">Customer Name</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/> 
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Mobile No</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/> 
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Details</span> 
                      <input className="border-2 w-full h-18 border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/> 
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">NIC</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/> 
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Price</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/>
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Advance</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/>
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Balance</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/>
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Deposit</span> 
                      <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/>
                      <input className="ml-4" type="CheckBox" name="" placeholder=""/>
                      <span className="ml-4">Returned</span>
                    </div>
                    <div className="flex items-center ">
                      <span className="flex-shrink-0 px-3 py-2 w-1/3">Remark</span> 
                      <input className="border-2 w-full h-18 border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/>
                    </div>
                  </div>
                </div>
               
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-180 gap-4">
                  <button className="bg-green-900 border-green-900 text-white text-center py-2 px-3">Proceed</button>
                  <button className="text-green-800 bg-transparent border border-solid border-green-800 text-center hover:bg-green-700 hover:text-white active:bg-green-600 px-3 py-2 outline-none" type="button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 px-3 py-2 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default Modal;