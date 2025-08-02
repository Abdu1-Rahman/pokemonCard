import React from 'react'

const page = (result) => {
  return (
    <div className='min-h-screen bg-gradient-to-t flex items-center justify-center from-blue-500  via-slate-700 to-slate-950'>
        <div className='shadow-2xl bg-gradient-to-t m-30 from-green-500 via-slate-750 to-slate-950 rounded-2xl h-120 w-250'>
            <div><h1>{result.name}</h1></div>
        </div>
    </div>
  )
}

export default page