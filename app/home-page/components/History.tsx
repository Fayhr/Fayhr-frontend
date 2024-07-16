import React from 'react'

const History = () => {
  return (
    <div className='text-black w-full px-5'>
      <h2>History</h2>
      <div className='flex justify-center mt-3 w-full'>
        <table className='w-full text-black text-sm'>
            <thead className='w-full'>
                <tr className='text-slate-600'>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody className='w-full bg-white px-3'>
                <tr className='bg-white rounded-lg'>
                    <td>Deposit</td>
                    <td>N3,600</td>
                    <td>Completed</td>
                    <td>14/03/2024</td>
                </tr>
                <tr className='bg-white rounded-full'>
                    <td>Deposit</td>
                    <td>N3,600</td>
                    <td>Completed</td>
                    <td>14/03/2024</td>
                </tr>
                <tr>
                    <td>Deposit</td>
                    <td>N3,600</td>
                    <td>Completed</td>
                    <td>14/03/2024</td>
                </tr>
                <tr>
                    <td>Deposit</td>
                    <td>N3,600</td>
                    <td>Completed</td>
                    <td>14/03/2024</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default History
