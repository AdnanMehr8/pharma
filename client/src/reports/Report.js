
// import React, { useEffect, Suspense } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setMixingRecord } from '../store/mixingSlice';
// import { setCompressionRecord } from '../store/compressionSlice';
// import { setCoatingRecord } from '../store/coatingSlice';
// import { setRecord } from '../store/recordSlice';
// import { Box, Button, CircularProgress, Typography } from '@mui/material';
// import FormHeader from '../pages/header/formHeader';

// // Lazy load the form pages
// const BatchManufacturingFormPage1 = React.lazy(() => import('../pages/forms/tablet arex 10mg/dispensing/page1'));
// const BatchManufacturingFormPage2 = React.lazy(() => import('../pages/forms/tablet arex 10mg/dispensing/page2'));
// const BatchManufacturingFormPage3 = React.lazy(() => import('../pages/forms/tablet arex 10mg/dispensing/page3'));
// const BatchManufacturingFormPage4 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page4'));
// const BatchManufacturingFormPage5 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page5'));
// const BatchManufacturingFormPage6 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page6'));
// const BatchManufacturingFormPage7 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page7'));
// const BatchManufacturingFormPage8 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page8'));
// const BatchManufacturingFormPage9 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page9'));
// const BatchManufacturingFormPage10 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page10'));
// const BatchManufacturingFormPage11 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page11'));
// const BatchManufacturingFormPage12 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page12'));
// const BatchManufacturingFormPage13 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page13'));
// const BatchManufacturingFormPage14 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page14'));
// const BatchManufacturingFormPage15 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page15'));
// const BatchManufacturingFormPage17 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page17'));
// const BatchManufacturingFormPage18 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page18'));
// const BatchManufacturingFormPage19 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page19'));
// const BatchManufacturingFormPage20 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page20'));
// const BatchManufacturingFormPage21 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page21'));
// const BatchManufacturingFormPage22 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page22'));
// const BatchManufacturingFormPage23 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page23'));

// const Report = (props) => {
//     const dispatch = useDispatch();
//     const batchId = localStorage.getItem('batchId');
//     const mixingId = localStorage.getItem('mixingId');
//     const compressionID = localStorage.getItem('compressionID');
//     const coatingId = localStorage.getItem('coatingId');

//     const fetchLatestRecordDispensing = async (batchId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/record/${batchId}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const latestRecord = await response.json();
//             dispatch(setRecord(latestRecord)); // Update the Redux store with the latest record
//         } catch (error) {
//             console.error("Error fetching latest dispensing record:", error);
//         }
//     };

//     const fetchLatestRecordMixing = async (mixingId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/mixing/${mixingId}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const latestRecord = await response.json();
//             dispatch(setMixingRecord(latestRecord)); // Update the Redux store with the latest record
//         } catch (error) {
//             console.error("Error fetching latest mixing record:", error);
//         }
//     };

//     const fetchLatestRecordCompression = async (compressionID) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/compression/${compressionID}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const latestRecord = await response.json();
//             dispatch(setCompressionRecord(latestRecord)); // Update the Redux store with the latest record
//         } catch (error) {
//             console.error("Error fetching latest compression record:", error);
//         }
//     };

//     const fetchLatestRecordCoating = async (coatingId) => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/coating/${coatingId}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const latestRecord = await response.json();
//             dispatch(setCoatingRecord(latestRecord)); // Update the Redux store with the latest record
//         } catch (error) {
//             console.error("Error fetching latest coating record:", error);
//         }
//     };

//     useEffect(() => {
//         if (batchId || mixingId || compressionID || coatingId) {
//             fetchLatestRecordDispensing(batchId);
//             fetchLatestRecordMixing(mixingId);
//             fetchLatestRecordCompression(compressionID);
//             fetchLatestRecordCoating(coatingId);
//         }
//     }, [batchId, dispatch]);

//     return (
//         <div>
//             <Button variant="contained" onClick={() => window.print()} className="mt-3">
//                 Print Page
//             </Button>
//             {/* <FormHeader /> */}
//             {/* Wrap lazy-loaded components with Suspense for fallback loading */}
//             <Suspense fallback={
//             <div>
//                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//       <CircularProgress />
//     </Box>
//             </div>
//             }
//             >
//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage1 />
//                 </div>
//                 <div>

//             <FormHeader />

//                 <BatchManufacturingFormPage2 />
//                 </div>

//                 <div>
//             <FormHeader />
                    
//                 <BatchManufacturingFormPage3 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage4 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage5 />
                    
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage6 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage7 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage8 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage9 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage10 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage11 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage12 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage13 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage14 />
//                 </div>

//                 <div>

//             <FormHeader />

//                 <BatchManufacturingFormPage15 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage17 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage18 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage19 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage20 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage21 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage22 />
//                 </div>

//                 <div>
//             <FormHeader />

//                 <BatchManufacturingFormPage23 />
//                 </div>
//             </Suspense>
//         </div>
//     );
// };

// export default Report;


import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { setMixingRecord } from '../store/mixingSlice';
import { setCompressionRecord } from '../store/compressionSlice';
import { setCoatingRecord } from '../store/coatingSlice';
import { setRecord } from '../store/recordSlice';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import FormHeader from '../pages/header/formHeader';
import './Report.css';

// Lazy load the form pages
const BatchManufacturingFormPage1 = React.lazy(() => import('../pages/forms/tablet arex 10mg/dispensing/page1'));
const BatchManufacturingFormPage2 = React.lazy(() => import('../pages/forms/tablet arex 10mg/dispensing/page2'));
const BatchManufacturingFormPage3 = React.lazy(() => import('../pages/forms/tablet arex 10mg/dispensing/page3'));
const BatchManufacturingFormPage4 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page4'));
const BatchManufacturingFormPage5 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page5'));
const BatchManufacturingFormPage6 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page6'));
const BatchManufacturingFormPage7 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page7'));
const BatchManufacturingFormPage8 = React.lazy(() => import('../pages/forms/tablet arex 10mg/mixing/page8'));
const BatchManufacturingFormPage9 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page9'));
const BatchManufacturingFormPage10 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page10'));
const BatchManufacturingFormPage11 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page11'));
const BatchManufacturingFormPage12 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page12'));
const BatchManufacturingFormPage13 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page13'));
const BatchManufacturingFormPage14 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page14'));
const BatchManufacturingFormPage15 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page15'));
const BatchManufacturingFormPage17 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page17'));
const BatchManufacturingFormPage18 = React.lazy(() => import('../pages/forms/tablet arex 10mg/compression/page18'));
const BatchManufacturingFormPage19 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page19'));
const BatchManufacturingFormPage20 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page20'));
const BatchManufacturingFormPage21 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page21'));
const BatchManufacturingFormPage22 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page22'));
const BatchManufacturingFormPage23 = React.lazy(() => import('../pages/forms/tablet arex 10mg/coating/page23'));

const Report = () => {
    const dispatch = useDispatch();
    const batchId = localStorage.getItem('batchId');
    const mixingId = localStorage.getItem('mixingId');
    const compressionID = localStorage.getItem('compressionID');
    const coatingId = localStorage.getItem('coatingId');

    const fetchLatestRecordDispensing = async (batchId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/record/${batchId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const latestRecord = await response.json();
            dispatch(setRecord(latestRecord)); // Update the Redux store with the latest record
        } catch (error) {
            console.error("Error fetching latest dispensing record:", error);
        }
    };

    const fetchLatestRecordMixing = async (mixingId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/mixing/${mixingId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const latestRecord = await response.json();
            dispatch(setMixingRecord(latestRecord)); // Update the Redux store with the latest record
        } catch (error) {
            console.error("Error fetching latest mixing record:", error);
        }
    };

    const fetchLatestRecordCompression = async (compressionID) => {
        try {
            const response = await fetch(`http://localhost:5000/api/compression/${compressionID}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const latestRecord = await response.json();
            dispatch(setCompressionRecord(latestRecord)); // Update the Redux store with the latest record
        } catch (error) {
            console.error("Error fetching latest compression record:", error);
        }
    };

    const fetchLatestRecordCoating = async (coatingId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/coating/${coatingId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const latestRecord = await response.json();
            dispatch(setCoatingRecord(latestRecord)); // Update the Redux store with the latest record
        } catch (error) {
            console.error("Error fetching latest coating record:", error);
        }
    };

    useEffect(() => {
        if (batchId || mixingId || compressionID || coatingId) {
            fetchLatestRecordDispensing(batchId);
            fetchLatestRecordMixing(mixingId);
            fetchLatestRecordCompression(compressionID);
            fetchLatestRecordCoating(coatingId);
        }
    }, [batchId, dispatch]);

    const totalPages = 23;

    const renderPageWithFooter = (PageComponent, pageNumber) => (
        <Box
            sx={{
                border: '2px solid black',
                padding: '15px',
                marginBottom: '20px',
                position: 'relative',
                minHeight: '100vh', // Ensure full-page height for the content
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                // Add styles to hide input borders, TextField borders, buttons, and icons
                '& input, & textarea, & select': {
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                },
                '& button, & .MuiButton-root': {
                    display: 'none',
                },
                
                // Hide TextField borders (both outlined and standard variants)
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: 'none', // Hides the border for outlined variant
                    },
                },
                '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                    borderBottom: 'none', // Hides the underline border for standard variant
                },
                  // Hide the "Actions" column
            '& .actions-column': {
                display: 'none', // Adjust this class based on your table structure
                },
            // Remove borders from React Bootstrap Card
            '& .card': {
                border: 'none', // Hides the border for the Card
                boxShadow: 'none', // Optionally remove shadow
            },
            }}
        >
            <div>
                <FormHeader />
                <PageComponent />
            </div>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 'bold',
                    paddingTop: '10px',
                    marginTop: '20px',
                    display: 'flex',
                    paddingLeft: '40px',
                }}
            >
                <h5><strong>DANAS PHARMACEUTICAL PVT LTD</strong></h5>
                <span style={{ marginLeft: '200px' }}>
                    Page {pageNumber} of {totalPages}
                </span>
            </Typography>
        </Box>
    );
    

    return (
        <div>
            <Button variant="contained" onClick={() => window.print()} className="mt-3" style={{ display: 'block' }}>
                Print Page
            </Button>

            <Suspense
                fallback={
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                }
            >
                {renderPageWithFooter(BatchManufacturingFormPage1, 1)}
                {renderPageWithFooter(BatchManufacturingFormPage2, 2)}
                {renderPageWithFooter(BatchManufacturingFormPage3, 3)}
                {renderPageWithFooter(BatchManufacturingFormPage4, 4)}
                {renderPageWithFooter(BatchManufacturingFormPage5, 5)}
                {renderPageWithFooter(BatchManufacturingFormPage6, 6)}
                {renderPageWithFooter(BatchManufacturingFormPage7, 7)}
                {renderPageWithFooter(BatchManufacturingFormPage8, 8)}
                {renderPageWithFooter(BatchManufacturingFormPage9, 9)}
                {renderPageWithFooter(BatchManufacturingFormPage10, 10)}
                {renderPageWithFooter(BatchManufacturingFormPage11, 11)}
                {renderPageWithFooter(BatchManufacturingFormPage12, 12)}
                {renderPageWithFooter(BatchManufacturingFormPage13, 13)}
                {renderPageWithFooter(BatchManufacturingFormPage14, 14)}
                {renderPageWithFooter(BatchManufacturingFormPage15, 15)}
                {renderPageWithFooter(BatchManufacturingFormPage17, 17)}
                {renderPageWithFooter(BatchManufacturingFormPage18, 18)}
                {renderPageWithFooter(BatchManufacturingFormPage19, 19)}
                {renderPageWithFooter(BatchManufacturingFormPage20, 20)}
                {renderPageWithFooter(BatchManufacturingFormPage21, 21)}
                {renderPageWithFooter(BatchManufacturingFormPage22, 22)}
                {renderPageWithFooter(BatchManufacturingFormPage23, 23)}
            </Suspense>
        </div>
    );
};

export default Report;
