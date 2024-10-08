// import { Card, CardContent, CardHeader, TextField, Grid, Button } from '@mui/material';
// import React, { useEffect } from 'react';
// import { setRecord } from '../../store/recordSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';

// const FormHeader = () => {
//     const dispatch = useDispatch();
//     const record = useSelector((state) => state.record);
//     const navigate = useNavigate();
//     const location = useLocation(); // Get the current location

//     useEffect(() => {
//         const storedRecord = JSON.parse(localStorage.getItem('record'));
//         if (storedRecord) {
//             dispatch(setRecord(storedRecord));
//         }
//     }, [dispatch]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;

//         if (name in record.batchInfo) {
//             dispatch(setRecord({ ...record, batchInfo: { ...record.batchInfo, [name]: value } }));
//         }
//     };

//     const handleNextPage = () => {
//         const { batchInfo } = record;

//         // Validate required fields
//         if (
//             !batchInfo.productName ||
//             !batchInfo.batchNo ||
//             !batchInfo.noOfTablets ||
//             !batchInfo.batchSize ||
//             !batchInfo.packsSize ||
//             !batchInfo.noOfPacks ||
//             !batchInfo.expiryDate ||
//             !batchInfo.mfgLicense ||
//             !batchInfo.productRegNo ||
//             !batchInfo.validFrom 
//         ) {
//             alert('Please fill out all required fields before proceeding.');
//             return;
//         }

//         // Proceed to the next page if all required fields are filled
//         navigate('/dragProcesses');
//     };

//     return (
//         <div>
//             <Card className="max-w-4xl mx-auto">
//                 <CardHeader title="Batch Manufacturing Record" className='text-center' />
//                 <CardContent>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Product Name"
//                                 name="productName"
//                                 value={record.batchInfo.productName || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Batch No."
//                                 name="batchNo"
//                                 value={record.batchInfo.batchNo || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="No. of Tablets"
//                                 name="noOfTablets"
//                                 value={record.batchInfo.noOfTablets || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Batch Size"
//                                 name="batchSize"
//                                 value={record.batchInfo.batchSize || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Packs Size"
//                                 name="packsSize"
//                                 value={record.batchInfo.packsSize || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="No. Of Packs"
//                                 name="noOfPacks"
//                                 value={record.batchInfo.noOfPacks || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Expiry Date"
//                                 name="expiryDate"
//                                 type="date"
//                                 value={record.batchInfo.expiryDate || ''}
//                                 onChange={handleInputChange}
//                                 InputLabelProps={{ shrink: true }}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Mfg. License No."
//                                 name="mfgLicense"
//                                 value={record.batchInfo.mfgLicense || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Product Reg. No."
//                                 name="productRegNo"
//                                 value={record.batchInfo.productRegNo || ''}
//                                 onChange={handleInputChange}
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Valid from"
//                                 name="validFrom"
//                                 value={record.batchInfo.validFrom || ''}
//                                 onChange={handleInputChange}
//                                 type='date'
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Document No."
//                                 name="document#"
//                                 value='DP/PR/BPS/03'
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Edition No."
//                                 name="edition"
//                                 value='00'
//                                 fullWidth
//                             multiline
//                             />
//                         </Grid>
//                     </Grid>
//                     {location.pathname === '/form-header' && ( // Replace with the specific path
//                         <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
//                             <Button variant="contained" color="primary" onClick={handleNextPage}>
//                                 Next
//                             </Button>
//                         </Grid>
//                     )}
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };

// export default FormHeader;
import { Card, CardContent, CardHeader, TextField, Grid, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { setRecord } from '../../store/recordSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const FormHeader = () => {
    const dispatch = useDispatch();
    const record = useSelector((state) => state.record);
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const storedRecord = JSON.parse(localStorage.getItem('record'));
        if (storedRecord) {
            dispatch(setRecord(storedRecord));
        }
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name in record.batchInfo) {
            dispatch(setRecord({ ...record, batchInfo: { ...record.batchInfo, [name]: value } }));
        }
    };

    const handleNextPage = () => {
        const { batchInfo } = record;

        // Validate required fields
        if (
            !batchInfo.productName ||
            !batchInfo.batchNo ||
            !batchInfo.noOfTablets ||
            !batchInfo.batchSize ||
            !batchInfo.packsSize ||
            !batchInfo.noOfPacks ||
            !batchInfo.expiryDate ||
            !batchInfo.mfgLicense ||
            !batchInfo.productRegNo ||
            !batchInfo.validFrom 
        ) {
            alert('Please fill out all required fields before proceeding.');
            return;
        }

        // Proceed to the next page if all required fields are filled
        navigate('/dragProcesses');
    };

    return (
        <div style={{ padding: '20px' }}>
            <Card className="max-w-4xl mx-auto" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardHeader 
                    title="Batch Manufacturing Record" 
                    className='text-center' 
                    style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }} 
                />
                <CardContent style={{ padding: '30px 40px' }}>
                    <Grid container spacing={3}>
                        {/* First row of input fields */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Product Name"
                                name="productName"
                                value={record.batchInfo.productName || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Batch No."
                                name="batchNo"
                                value={record.batchInfo.batchNo || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>

                        {/* Second row of input fields */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="No. of Tablets"
                                name="noOfTablets"
                                value={record.batchInfo.noOfTablets || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Batch Size"
                                name="batchSize"
                                value={record.batchInfo.batchSize || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>

                        {/* Third row of input fields */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Packs Size"
                                name="packsSize"
                                value={record.batchInfo.packsSize || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="No. Of Packs"
                                name="noOfPacks"
                                value={record.batchInfo.noOfPacks || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>

                        {/* Fourth row of input fields */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Expiry Date"
                                name="expiryDate"
                                type="date"
                                value={record.batchInfo.expiryDate || ''}
                                onChange={handleInputChange}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Mfg. License No."
                                name="mfgLicense"
                                value={record.batchInfo.mfgLicense || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>

                        {/* Fifth row of input fields */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Product Reg. No."
                                name="productRegNo"
                                value={record.batchInfo.productRegNo || ''}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Valid from"
                                name="validFrom"
                                value={record.batchInfo.validFrom || ''}
                                onChange={handleInputChange}
                                type='date'
                                fullWidth
                            />
                        </Grid>

                        {/* Sixth row of static input fields */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Document No."
                                name="document#"
                                value='DP/PR/BPS/03'
                                fullWidth
                                multiline
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Edition No."
                                name="edition"
                                value='00'
                                fullWidth
                                multiline
                                disabled
                            />
                        </Grid>
                    </Grid>

                    {/* Next Button */}
                    {location.pathname === '/form-header' && (
                        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Button variant="contained" color="primary" onClick={handleNextPage} style={{ padding: '10px 40px' }}>
                                Next
                            </Button>
                        </Grid>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default FormHeader;
