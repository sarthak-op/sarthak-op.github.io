import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import {models} from "powerbi-client";
import './App.css';

export default function Dashboard() {
  return (
    <div className="iframe-container">
      
      {/* <iframe title="RPA" width="1140" height="541.25" allowtransparency = "true" src="https://app.powerbi.com/reportEmbed?reportId=6ca2a612-5515-4682-bf8f-e4efb0b95924&appId=3164e371-51f3-4ac1-b127-dd078bb31c16&autoAuth=true&ctid=0ae51e19-07c8-4e4b-bb6d-648ee58410f4" frameborder="0" allowFullScreen="true" onload="l()" ></iframe>      */}
      <iframe title="RPA" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=f7bf03d2-48cb-4afc-9ddc-24340c6eb5ee&autoAuth=true&ctid=0ae51e19-07c8-4e4b-bb6d-648ee58410f4" frameborder="0" allowFullScreen="true"></iframe>
      <img src="https://quickchart.io/chart?c={type:'bar',options:{plugins:{googleSheets:{docId:'1QpZ6W8wt8qVGIQJiIMVGGexoe6VMVoBYB-N2GXyqM70',sheet:'Sheet1',labelColumn:'Name',dataColumns:['Count']}},legend:{display:false}}}" />

      {/* <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "aa9c988f-85a6-4849-bbee-bdfc938dd7ce",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=aa9c988f-85a6-4849-bbee-bdfc938dd7ce&groupId=f5b379d7-3594-48bf-9e0b-2b69c9fc8811&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1MLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVNhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YVBhYVNFbWJlZCI6dHJ1ZSwic2tpcFF1ZXJ5RGF0YUV4cG9ydFRvIjp0cnVlfX0%3d",
          accessToken:
          "7593be75-4b4e-4d9d-a3f2-307a16e1fcfd",
                    tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"dashboard"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      /> */}
    </div>
  );
}
// import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';

// const API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1QpZ6W8wt8qVGIQJiIMVGGexoe6VMVoBYB-N2GXyqM70/values/Sheet1!A1:E5';

// function Dashboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(API_URL, {
//           headers: {
//             'Authorization': 'Bearer YOUR_API_KEY'
//           }
//         });
//         setData(result.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const chartData = {
//     labels: data.map(d => d.name),
//     datasets: [
//       {
//         label: 'Bar Chart',
//         data: data.map(d => d.value),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderWidth: 1
//       }
//     ]
//   };

//   return (
//     <div>
//       <Chart data={chartData} options={{}}/>
//     </div>
//   );
// }

// export default Dashboard;
