import React from 'react';


function Table(){
    return(
        <div className="w-full h-full mt-5">
          <div className= "text-xl ">Rents Details</div>
          <div className="w-full h-full bg-gray-300 my-5 mr-10 gap-4">
            <table className="table-fixed w-full border-collapse border border-white">
                <thead>
                    <tr>
                        <th className="border border-white font-bold py-2">INVOICE NO</th>
                        <th className="border border-white font-bold py-2">CUSTOMER NAME</th>
                        <th className="border border-white font-bold py-2">MOBILE NO</th>
                        <th className="border border-white font-bold py-2">ISSUE DATE</th>
                        <th className="border border-white font-bold py-2">DETAILS</th>
                        <th className="border border-white font-bold py-2">NIC</th>
                        <th className="border border-white font-bold py-2">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-white p-3">Intro</td>
                        <td className="border border-white p-3">Adam</td>
                        <td className="border border-white p-3">858</td>
                        <td className="border border-white p-3">Intro</td>
                        <td className="border border-white p-3">Adam</td>
                        <td className="border border-white p-3">858</td>
                        <td className="border border-white p-3">4853168676</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default Table;