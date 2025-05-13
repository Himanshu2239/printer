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