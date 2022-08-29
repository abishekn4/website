import React from 'react'
import "./Software.css"


const Software = (props) => {
    return (
        <div className='software col-12'>

            {props.value.Softwares
                ? props.value.Softwares.map((d, i) => (
                    <div key={`${d.name}-${i}`} >
                        <div class="card ">

                            <h1>{d.name}</h1>

                            <button>Download</button>

                            <button>Other Versions</button>



                            <div class="accent-line"></div>
                        </div>




                    </div>


                ))
                : 'loading'}



        </div>








    )
}
export default Software;
