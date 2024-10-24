// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCompressionRecord } from '../../../../store/compressionSlice';
// import {
//   Card,
//   CardContent,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   IconButton
// } from '@mui/material';
// import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// export default function BatchManufacturingFormPage14() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const compressionState = useSelector((state) => state.compression);

//   const handleInputChange = (index, field, value) => {
//     const updatedLabels = [...compressionState.followUp.labels];
//     updatedLabels[index] = { ...updatedLabels[index], [field]: value };

//     dispatch(setCompressionRecord({
//       ...compressionState,
//       followUp: {
//         ...compressionState.followUp,
//         labels: updatedLabels
//       }
//     }));
//   };

//   const handleCheckboxChange = (field, checked) => {
//     dispatch(setCompressionRecord({
//       ...compressionState,
//       followUp: {
//         ...compressionState.followUp,
//         [field]: checked
//       }
//     }));
//   };

//   const handleAddRow = () => {
//     const newRow = {
//       date: '',
//       time: '',
//       avgWeight: '',
//       thickness: '',
//       hardness: '',
//       disintigrationTime: '',
//       friability: '',
//       performedBy: ''
//     };
//     dispatch(setCompressionRecord({
//       ...compressionState,
//       followUp: {
//         ...compressionState.followUp,
//         labels: [...compressionState.followUp.labels, newRow]
//       }
//     }));
//   };

//   const handleRemoveRow = (index) => {
//     const updatedLabels = compressionState.followUp.labels.filter((_, i) => i !== index);
//     dispatch(setCompressionRecord({
//       ...compressionState,
//       followUp: {
//         ...compressionState.followUp,
//         labels: updatedLabels
//       }
//     }));
//   };

//   const handleCheckedByQAChange = (value) => {
//     dispatch(setCompressionRecord({
//       ...compressionState,
//       followUp: {
//         ...compressionState.followUp,
//         checkedByQA: value,
//         others: value
//       }
//     }));
//   };

//   return (
//     <Card className="max-w-6xl mx-auto">
//       <CardContent>
//         <h2 className="text-2xl font-bold mb-4 text-center">FOLLOW UP DURING COMPRESSION</h2>
        
//         <div className="flex justify-start mb-4 text-center">
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={compressionState.followUp.zP}
//                 onChange={(e) => handleCheckboxChange('zP', e.target.checked)}
//               />
//             }
//             label="ZP-"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={Boolean(compressionState.followUp.others)}
//                 onChange={(e) => handleCheckboxChange('others', e.target.checked ? ' ' : '')}
//               />
//             }
//             label="Others:"
//           />
//           <TextField
//             value={compressionState.followUp.others || ''}
//             onChange={(e) => handleCheckboxChange('others', e.target.value)}
//             disabled={!compressionState.followUp.others}
//             fullWidth
//                             multiline
//           />
//         </div>

//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Time</TableCell>
//                 <TableCell>
//                   Average Weight
//                   <div className="flex items-center">
//                     <span>Target</span>
//                     <TextField
//                       size="small"
//                       value={compressionState.followUp.avgWeightTarget || ''}
//                       onChange={(e) => handleCheckboxChange('avgWeightTarget', e.target.value)}
//                       className="w-20 mx-2"
//                       fullWidth
//                             multiline
//                     />
//                     <span>mg</span>
//                   </div>
//                   <div className="flex items-center">
//                     <span>±</span>
//                     <TextField
//                       size="small"
//                       value={compressionState.followUp.avgWeightTolerance || ''}
//                       onChange={(e) => handleCheckboxChange('avgWeightTolerance', e.target.value)}
//                       className="w-20 mx-2"
//                       fullWidth
//                             multiline
//                     />
//                     <span>%</span>
//                   </div>
//                 </TableCell>
//                 <TableCell>
//                   Thickness
//                   <div>(____mm)</div>
//                 </TableCell>
//                 <TableCell>
//                   Hardness
//                   <div>NLT __kg/cm²</div>
//                 </TableCell>
//                 <TableCell>
//                   Disintegration Time
//                   <div>NMT 15 min</div>
//                 </TableCell>
//                 <TableCell>
//                   Friability
//                   <div>NMT 1%</div>
//                 </TableCell>
//                 <TableCell>Performed by</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {compressionState.followUp.labels.map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>
//                     <TextField
//                       value={row.date || ''}
//                       onChange={(e) => handleInputChange(index, 'date', e.target.value)}
//                       type='date'
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       type='time'
//                       value={row.time || ''}
//                       onChange={(e) => handleInputChange(index, 'time', e.target.value)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       fullWidth
//                       multiline
//                       value={row.avgWeight || ''}
//                       onChange={(e) => handleInputChange(index, 'avgWeight', e.target.value)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       fullWidth
//                       multiline
//                       value={row.thickness || ''}
//                       onChange={(e) => handleInputChange(index, 'thickness', e.target.value)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       fullWidth
//                       multiline
//                       value={row.hardness || ''}
//                       onChange={(e) => handleInputChange(index, 'hardness', e.target.value)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       fullWidth
//                       multiline
//                       value={row.disintigrationTime || ''}
//                       onChange={(e) => handleInputChange(index, 'disintigrationTime', e.target.value)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       fullWidth
//                       multiline
//                       value={row.friability || ''}
//                       onChange={(e) => handleInputChange(index, 'friability', e.target.value)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <TextField
//                       fullWidth
//                       multiline
//                       value={row.performedBy || ''}
//                       onChange={(e) => handleInputChange(index, 'performedBy', e.target.value)}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <IconButton onClick={() => handleRemoveRow(index)}>
//                       <RemoveIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <div className="mt-4 flex justify-between items-center mb-5">
//           <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddRow}>
//             Add Row
//           </Button>
//         </div>
        
//         <div className='mt-6'>
//           <TextField
//             label="Checked by QA"
//             value={compressionState.followUp.checkedByQA || ''}
//             onChange={(e) => handleCheckedByQAChange(e.target.value)}
//             className="w-64"
//             fullWidth
//                             multiline
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompressionRecord } from '../../../../store/compressionSlice';
import {
  Card,
  CardContent,
  TextField,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function BatchManufacturingFormPage14() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compressionState = useSelector((state) => state.compression);

  const handleInputChange = (index, field, value) => {
    const updatedLabels = [...compressionState.followUp.labels];
    updatedLabels[index] = { ...updatedLabels[index], [field]: value };

    dispatch(setCompressionRecord({
      ...compressionState,
      followUp: {
        ...compressionState.followUp,
        labels: updatedLabels
      }
    }));
  };

  const handleCheckboxChange = (field, checked) => {
    dispatch(setCompressionRecord({
      ...compressionState,
      followUp: {
        ...compressionState.followUp,
        [field]: checked
      }
    }));
  };

  const handleAddRow = () => {
    const newRow = {
      date: '',
      time: '',
      avgWeight: '',
      thickness: '',
      hardness: '',
      disintigrationTime: '',
      friability: '',
      performedBy: ''
    };
    dispatch(setCompressionRecord({
      ...compressionState,
      followUp: {
        ...compressionState.followUp,
        labels: [...compressionState.followUp.labels, newRow]
      }
    }));
  };

  const handleRemoveRow = (index) => {
    const updatedLabels = compressionState.followUp.labels.filter((_, i) => i !== index);
    dispatch(setCompressionRecord({
      ...compressionState,
      followUp: {
        ...compressionState.followUp,
        labels: updatedLabels
      }
    }));
  };

  const handleCheckedByQAChange = (value) => {
    dispatch(setCompressionRecord({
      ...compressionState,
      followUp: {
        ...compressionState.followUp,
        checkedByQA: value,
        others: value,
      }
    }));
  };
  const handleCheckedByQADateChange = (value) => {
    dispatch(setCompressionRecord({
      ...compressionState,
      followUp: {
        ...compressionState.followUp,
        checkedByQADate: value,

      }
    }));
  };
  

  return (
    <Card className="max-w-6xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-center">FOLLOW UP DURING COMPRESSION</h2>
        
        <div className="flex justify-start mb-4 text-center">
          (
          <FormControlLabel
            control={
              <Checkbox
                checked={compressionState.followUp.zP}
                onChange={(e) => handleCheckboxChange('zP', e.target.checked)}
              />
            }
            label="ZP-"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Boolean(compressionState.followUp.others)}
                onChange={(e) => handleCheckboxChange('others', e.target.checked ? ' ' : '')}
              />
            }
            label="Others:"
          />
          <TextField
            value={compressionState.followUp.others || ''}
            onChange={(e) => handleCheckboxChange('others', e.target.value)}
            disabled={!compressionState.followUp.others}
            
            
          />
          )
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>Date</TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>Time</TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>
                  Average Weight
                  <div className="flex items-center">
                    <span>Target</span>
                    <TextField
                      size="small"
                      value={compressionState.followUp.avgWeightTarget || ''}
                      onChange={(e) => handleCheckboxChange('avgWeightTarget', e.target.value)}
                      className="w-20 mx-2"
                      fullWidth
                      multiline
                    />
                    <span>mg</span>
                  </div>
                  <div className="flex items-center">
                    <span>±</span>
                    <TextField
                      size="small"
                      value={compressionState.followUp.avgWeightTolerance || ''}
                      onChange={(e) => handleCheckboxChange('avgWeightTolerance', e.target.value)}
                      className="w-20 mx-2"
                      fullWidth
                      multiline
                    />
                    <span>%</span>
                  </div>
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>
                  Thickness
                  <div>(____mm)</div>
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>
                  Hardness
                  <div>NLT __kg/cm²</div>
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>
                  Disintegration Time
                  <div>NMT 15 min</div>
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>
                  Friability
                  <div>NMT 1%</div>
                </TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }}>Performed by</TableCell>
                <TableCell style={{ fontWeight: 'bold', borderRight: '1px solid #ddd' }} className="actions-column">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {compressionState.followUp.labels.map((row, index) => (
                <TableRow key={index}>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      value={row.date || ''}
                      onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                      type='date'
                    />
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      type='time'
                      value={row.time || ''}
                      onChange={(e) => handleInputChange(index, 'time', e.target.value)}
                    />
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      fullWidth
                      multiline
                      value={row.avgWeight || ''}
                      onChange={(e) => handleInputChange(index, 'avgWeight', e.target.value)}
                    />
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      fullWidth
                      multiline
                      value={row.thickness || ''}
                      onChange={(e) => handleInputChange(index, 'thickness', e.target.value)}
                    />
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      fullWidth
                      multiline
                      value={row.hardness || ''}
                      onChange={(e) => handleInputChange(index, 'hardness', e.target.value)}
                    />
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      fullWidth
                      multiline
                      value={row.disintigrationTime || ''}
                      onChange={(e) => handleInputChange(index, 'disintigrationTime', e.target.value)}
                    />
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      fullWidth
                      multiline
                      value={row.friability || ''}
                      onChange={(e) => handleInputChange(index, 'friability', e.target.value)}
                    />
                  </TableCell>
                  <TableCell style={{ borderRight: '1px solid #ddd' }}>
                    <TextField
                      fullWidth
                      multiline
                      value={row.performedBy || ''}
                      onChange={(e) => handleInputChange(index, 'performedBy', e.target.value)}
                    />
                  </TableCell>
                  <TableCell className="actions-column">
                    <IconButton onClick={() => handleRemoveRow(index)}>
                      <RemoveIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="mt-4 flex justify-between items-center mb-5">
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddRow}>
            Add Row
          </Button>
        </div>
        
        {/* <div className='mt-6'>
          <TextField
            label="Checked by QA"
            value={compressionState.followUp.checkedByQA || ''}
            onChange={(e) => handleCheckedByQAChange(e.target.value)}
            fullWidth
            multiline
          />
        </div> */}

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '1000px' }} className="mt-4">
  <div className=" mr-4" > {/* Add margin to the right */}
    <p>Checked by QA</p>
    <input
      value={compressionState.followUp.checkedByQA || ''}
      onChange={(e) => handleCheckedByQAChange(e.target.value)}
            />
            <input
              type='date'
      value={compressionState.followUp.checkedByQADate || ''}
      onChange={(e) => handleCheckedByQADateChange(e.target.value)}
    />
        (Sign & Date)    
        </div>
        </div>

        {/* <div className="flex justify-end mt-4">
          <Button variant="contained" color="primary" onClick={() => navigate('/next-page')}>
            Save and Next
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
}
