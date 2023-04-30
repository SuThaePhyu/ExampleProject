import React, { useEffect } from "react";
import TestCodeComponent from "./TestCodeComponent";
import TestCodeCom2 from "./TestCodeCom2";

import ReactApexChart from 'react-apexcharts';


const TestCode=()=>{

   let state = {
        options: {
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        },
        series: [{
          name: 'sales',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 250]
        }]
      };
      

  
    return(
        
        <div>
            <TestCodeCom2 name="Mg Mg" age="12" address="Yangon"/>
            <TestCodeComponent name="Sara"/>
            <TestCodeComponent name="Nice"/>
            <TestCodeCom2 name="Ma Ma" age="13" address="Singapore"/>           
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />

        </div>
    )
}

export default TestCode;
