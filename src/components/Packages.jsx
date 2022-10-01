import React from 'react'
import PackageBox from './PackageBox'
import TFF from "./TFF.png"
import TFF2 from "./TFF2.png"
import TFF3 from "./TFF3.png"


function Packages() {
  return (
    <div className='packages'>
                  <div className='services'>
                <h1>
                    <span>P</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    <span>S</span>
                </h1>
            </div>
            <div className='pack'>
            <PackageBox c="bottom" h="Normi Pack" i={TFF3} p1="2 month pack" p2="Personal Changing Room excluded" p3="Spa and excluded" pr="Only At ₹1599"/>

                <PackageBox c="top" h="Supreme Pack" i={TFF} p1="3 month pack" p2="Personal Changing Room" p3="Spa Included" pr="Only At ₹2999"/>
                <PackageBox c="bottom" h="Luxury Pack" i={TFF2} p1="6 month pack" p2="Personal Changing Room" p3="Spa and Included" pr="Only At ₹5599" p4="Steam Bath as well as Massage Included"/>
            </div>
    </div>
  )
}

export default Packages
