// "use client";

// import React, { useRef } from "react";
// import dynamic from "next/dynamic";

// // extract the default export from each module
// const ReactToPrint = dynamic(
//   () => import("react-to-print").then((mod) => mod.default),
//   { ssr: false }
// );

// const Barcode = dynamic(
//   () => import("react-barcode").then((mod) => mod.default),
//   { ssr: false }
// );

// const Label = React.forwardRef(({ serial }, ref) => (
//   <div
//     ref={ref}
//     style={{
//       width: "60mm",
//       height: "40mm",
//       padding: "5mm",
//       boxSizing: "border-box",
//     }}
//   >
//     <Barcode
//       value={serial}
//       format="CODE128"
//       width={2}
//       height={50}
//       fontSize={14}
//       margin={0}
//     />
//     <div style={{ textAlign: "center", marginTop: "4mm" }}>{serial}</div>
//   </div>
// ));

// export default function PrintLabelButton() {
//   const labelRef = useRef();

//   return (
//     <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md mx-auto mt-8">
//       <h2 className="text-2xl font-semibold mb-4">Print Barcode Label</h2>

//       {/* hidden off-screen */}
//       <div style={{ display: "none" }}>
//         <Label ref={labelRef} serial="SN-0012345678" />
//       </div>

//       <ReactToPrint
//         trigger={() => (
//           <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//             Print Label
//           </button>
//         )}
//         content={() => labelRef.current}
//         pageStyle={`
//           @page { size: 60mm 40mm; margin: 0; }
//           @media print { body { margin: 0 } }
//         `}
//       />
//     </div>
//   );
// }


'use client';

import React from 'react';

const PrintButton = () => {
    const printString = () => {
        // Dummy data
        const textToPrint = "Hello! This is a test string to be printed.";

        // Create a new window for printing
        const printWindow = window.open('', '_blank');

        // Write the content to the new window
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                        }
                    </style>
                </head>
                <body>
                    <h1>${textToPrint}</h1>
                </body>
            </html>
        `);

        // Wait for the content to load
        printWindow.document.close();
        printWindow.focus();

        // Print the window
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    };

    return (
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Print String Demo</h2>
            <button
                onClick={printString}
                className="px-6 py-2 text-lg bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
                Print String
            </button>
        </div>
    );
};

export default PrintButton;
