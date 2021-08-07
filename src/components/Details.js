import React from 'react';

function Details() {
    return(
        <div className= "px-10 my-5 w-96 flex-shrink-0"> 
            <div className= "text-xl">Issue for Rent</div>
            <div className= "flex items-center gap-3 mt-5">
                <span className="flex-shrink-0">Invoice No</span> 
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="" placeholder=""/>
            </div>
            <div className= "grid grid-rows gap-2 ">
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 mt-5 rounded-sm text-sm focus:outline-none" type="" name="Customer Name *" placeholder="Customer Name *"/>
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="Mobile No *" placeholder="Mobile No *"/>
                <textarea className="border-2 w-full h-20 min-h-20 border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="Details About the Garment" placeholder="Details About the Garment"/>
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="NIC *" placeholder="NIC *"/>
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="Price *" placeholder="Price *"/>
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="Advance" placeholder="Advance"/>
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="Deposite" placeholder="Deposite"/>
                <input className="border-2 w-full border-gray-300 bg-white px-3 py-2 rounded-sm text-sm focus:outline-none" type="" name="Color" placeholder="Color"/>
            </div>
            <div className= "grid grid-cols-2 mt-5 gap-4">
                <button className="bg-green-900 border-green-900 text-white text-center py-2 px-3">Proceed</button>
                <button className="text-green-800 bg-transparent border border-solid border-green-800 text-center hover:bg-green-700 hover:text-white active:bg-green-600 px-3 py-2 outline-none" type="button">Cancel</button>
            </div>
        </div>
    );
}
export default Details;