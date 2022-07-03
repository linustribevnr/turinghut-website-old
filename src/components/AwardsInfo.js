import React from 'react'

function AwardsInfo() {
  return (
    <div className='bg-secondary h-200v pb-10 align-middle'>
        <center>
        <div className='text-white text-2xl'>
            <h2><b>What's in it for students?</b></h2>
        </div>
        <div className='bg-emerald-900 bg-opacity-50 mt-5 rounded-lg mx-10'>
            <div className='px-10 pt-4 text-white text-lg text-left'>
                <p>
                    Soft copy of <b>'Certificate of Participation'</b> will be awarded for the students who participate in round1. 
                </p>
                <p className='pt-4'>
                    Soft copy of <b>'Certificate of Merit'</b> will be awarded for the students who get qualified to round2.
                </p>
                <p className='pt-4'>
                    Soft copy of <b>'Certificate of Excellence'</b> will be awarded for the students who get qualified to round3.
                </p>
                <p className='pt-4'>
                    Top 3 teams in round3 will be awarded with soft copy of <b>'Certificate of Acheivement' and cash prizes </b>.
                </p>
                <ul className='pt-4 list-disc pb-5'>
                    <li>First place - Rs 10,000/-</li>
                    <li>Second place - Rs 7,500/-</li>
                    <li>Third place - Rs 5,000/-</li>
                </ul>  
            </div>
        </div>
        </center>
    </div>
  )
}

export default AwardsInfo