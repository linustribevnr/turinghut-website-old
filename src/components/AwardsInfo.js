import React from 'react'

function AwardsInfo() {
  return (
    <div className='bg-secondary h-200v -mt-60 pb-10'>
        <center>
        <div className='text-white text-2xl'>
            <h1>What's in it for students ?</h1>
        </div>
        <div className='container bg-emerald-900 bg-opacity-50 mt-5 rounded-lg w-6/12'>
            <div className='px-10 pt-4 text-white text-lg text-left'>
                <p>
                    Soft copy of 'Certificate of participaion' will be awarded for the <br/>
                    students who attempted round1. 
                </p>
                <p className='pt-4'>
                    Soft copy of 'Certification of Merit' will be awarded for the students who <br/>
                    are qualified gets qualified to round2.
                </p>
                <p className='pt-4'>
                    Soft Copy of 'Certificate of Excellence' will be awarded for students who <br/>
                    gets qualified to round3.
                </p>
                <p className='pt-4'>
                    Top 3 teams in round3 will get awarded with Soft copy of 'Certification of <br/>
                    Acheivement' and cash prizes.
                </p>
                <ul className='pt-4 list-disc pb-5'>
                    <li>First place - Rs 10,000/-</li>
                    <li>Second place - Rs 7500/-</li>
                    <li>Third place - Rs 5000/-</li>
                </ul>  
            </div>
        </div>
        </center>
    </div>
  )
}

export default AwardsInfo