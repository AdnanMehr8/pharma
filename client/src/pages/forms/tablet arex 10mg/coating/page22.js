// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCoatingRecord } from '../../../../store/coatingSlice';
// import './page7.css'; // Import CSS file for styling

// const BatchManufacturingFormPage7 = () => {
//   const dispatch = useDispatch();
//   const { weightOfCoatedTablets, batchManufacturingYield } = useSelector((state) => state.coating);

//   const handleWeightChange = (index, field, value) => {
//     const updatedContainers = [...weightOfCoatedTablets.containers];
//     updatedContainers[index] = { ...updatedContainers[index], [field]: value };

//     // Update the total weight calculations when weights are changed
//     const totalGrossWeight = updatedContainers.reduce((total, container) => {
//       return total + parseFloat(container.grossWeight || 0);
//     }, 0);

//     const totalTareWeight = updatedContainers.reduce((total, container) => {
//       return total + parseFloat(container.tareWeight || 0);
//     }, 0);

//     const totalNetWeight = updatedContainers.reduce((total, container) => {
//       return total + parseFloat(container.netWeight || 0);
//     }, 0);

//     dispatch(setCoatingRecord({
//       weightOfCoatedTablets: {
//         ...weightOfCoatedTablets,
//         containers: updatedContainers,
//         total: {
//           grossWeight: totalGrossWeight,
//           tareWeight: totalTareWeight,
//           netWeight: totalNetWeight,
//         }
//       }
//     }));
//   };

//   const handleGranulationChange = (index, field, value) => {
//     const updatedLabels = [...batchManufacturingYield.labels];
//     updatedLabels[index] = { ...updatedLabels[index], [field]: value };
//     dispatch(setCoatingRecord({ batchManufacturingYield: { ...batchManufacturingYield, labels: updatedLabels } }));
//   };

//   const handleWeighedByChange = (value) => {
//     dispatch(setCoatingRecord({ weightOfCoatedTablets: { ...weightOfCoatedTablets, weighedBy: value } }));
//   };

//   const handleReceivedByChange = (value) => {
//     dispatch(setCoatingRecord({ weightOfCoatedTablets: { ...weightOfCoatedTablets, receivedBy: value } }));
//   };

//   const handlegGranulationPerformedBy = (value) => {
//     dispatch(setCoatingRecord({ batchManufacturingYield: { ...batchManufacturingYield, performedBy: value } }));
//   };

//   return (
//     <div className="container">
//       <h3>Weight of Granules/Bulk</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Container No.</th>
//             <th>Gross Weight (Kg)</th>
//             <th>Tare Weight (Kg)</th>
//             <th>Net Weight (Kg)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {weightOfCoatedTablets.containers.map((container, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>
//                 <input
//                   type="number"
//                   value={container.grossWeight}
//                   onChange={(e) => handleWeightChange(index, 'grossWeight', e.target.value)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={container.tareWeight}
//                   onChange={(e) => handleWeightChange(index, 'tareWeight', e.target.value)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={container.netWeight}
//                   onChange={(e) => handleWeightChange(index, 'netWeight', e.target.value)}
//                 />
//               </td>
//             </tr>
//           ))}
//           {/* Total Row */}
//           <tr>
//             <td>Total</td>
//             <td>{weightOfCoatedTablets.total.grossWeight.toFixed(2)}</td>
//             <td>{weightOfCoatedTablets.total.tareWeight.toFixed(2)}</td>
//             <td>{weightOfCoatedTablets.total.netWeight.toFixed(2)}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div>
//         <label>Weighed By Granulation Operator:</label>
//         <input
//           value={weightOfCoatedTablets.weighedBy}
//           onChange={(e) => handleWeighedByChange(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Received By Compression Operator:</label>
//         <input
//           value={weightOfCoatedTablets.receivedBy}
//           onChange={(e) => handleReceivedByChange(e.target.value)}
//         />
//       </div>

//       <h3>Granulation/Mixing Yield</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>S. No.</th>
//             <th>Description</th>
//             <th>Weight (Kg)</th>
//           </tr>
//         </thead>
//         <tbody>
//   {batchManufacturingYield.labels.map((label, index) => (
//     <tr key={index}>
//       <td>{index + 1}</td>
//       <td>
//       <input
//           type="text"
//           value={label.description}
//           onChange={(e) => handleGranulationChange(index, 'description', e.target.value)}
//         />
//         {/* {index === 0 && 'Theoretical Yield (as per MO)'}
//         {index === 1 && 'Actual Yield (excluding QA sample)'}
//         {index === 2 && 'QA/QC Sample'}
//         {index === 3 && 'Losses during process'}
//         {index === 4 && 'Rejected (if any)*'}
//         {index === 5 && 'Granulation Yield (98-100)%: ((S. No.2 + S. No.3) / S. No.1) X 100'} */}
//       </td>
//       <td>
//         <input
//           type="number"
//           value={label.weight}
//           onChange={(e) => handleGranulationChange(index, 'weight', e.target.value)}
//         />
//       </td>
//     </tr>
//   ))}
// </tbody>

//       </table>

//       <div>
//       <label>Performed By Production Pharmacist (sign & date):</label>
//         <input
//           value={batchManufacturingYield.performedBy}
//           onChange={(e) => handlegGranulationPerformedBy(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default BatchManufacturingFormPage7;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCoatingRecord } from '../../../../store/coatingSlice';

const BatchManufacturingFormPage22 = () => {
  const dispatch = useDispatch();
  const { weightOfCoatedTablets, batchManufacturingYield } = useSelector((state) => state.coating);

  const handleWeightChange = (index, field, value) => {
    const updatedContainers = [...weightOfCoatedTablets.containers];
    updatedContainers[index] = { ...updatedContainers[index], [field]: value };

    const totalGrossWeight = updatedContainers.reduce((total, container) => total + parseFloat(container.grossWeight || 0), 0);
    const totalTareWeight = updatedContainers.reduce((total, container) => total + parseFloat(container.tareWeight || 0), 0);
    const totalNetWeight = updatedContainers.reduce((total, container) => total + parseFloat(container.netWeight || 0), 0);

    dispatch(setCoatingRecord({ 
      weightOfCoatedTablets: { 
        ...weightOfCoatedTablets, 
        containers: updatedContainers,
        total: { grossWeight: totalGrossWeight, tareWeight: totalTareWeight, netWeight: totalNetWeight }
      } 
    }));
  };

  const handleGranulationChange = (index, field, value) => {
    const updatedLabels = [...batchManufacturingYield.labels];
    updatedLabels[index] = { ...updatedLabels[index], [field]: value };
    dispatch(setCoatingRecord({ batchManufacturingYield: { ...batchManufacturingYield, labels: updatedLabels } }));
  };

  const handleWeighedByChange = (value) => {
    dispatch(setCoatingRecord({ weightOfCoatedTablets: { ...weightOfCoatedTablets, weighedBy: value } }));
  };

  const handleReceivedByChange = (value) => {
    dispatch(setCoatingRecord({ weightOfCoatedTablets: { ...weightOfCoatedTablets, receivedBy: value } }));
  };

  const handlegGranulationPerformedBy = (value) => {
    dispatch(setCoatingRecord({ batchManufacturingYield: { ...batchManufacturingYield, performedBy: value } }));
  };

  const handlegGranulationPerformedByDate = (value) => {
    dispatch(setCoatingRecord({ batchManufacturingYield: { ...batchManufacturingYield, performedByDate: value } }));
  };

  return (
    <div className="p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">WEIGHT OF COATED TABLETS:</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Container No.</th>
            <th className="border border-gray-300 p-2">Gross Weight (Kg)</th>
            <th className="border border-gray-300 p-2">Tare Weight (Kg)</th>
            <th className="border border-gray-300 p-2">Net Weight (Kg)</th>
          </tr>
        </thead>
        <tbody>
          {weightOfCoatedTablets.containers.map((container, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 p-2 text-center">
                <input
                  type="number"
                  value={container.grossWeight}
                  onChange={(e) => handleWeightChange(index, 'grossWeight', e.target.value)}
                  className="w-full"
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <input
                  type="number"
                  value={container.tareWeight}
                  onChange={(e) => handleWeightChange(index, 'tareWeight', e.target.value)}
                  className="w-full"
                />
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <input
                  type="number"
                  value={container.netWeight}
                  onChange={(e) => handleWeightChange(index, 'netWeight', e.target.value)}
                  className="w-full"
                />
              </td>
            </tr>
          ))}
          <tr>
            <td className="border border-gray-300 p-2 font-bold text-center">Total</td>
            <td className="border border-gray-300 p-2 text-center">{weightOfCoatedTablets.total.grossWeight.toFixed(2)}</td>
            <td className="border border-gray-300 p-2 text-center">{weightOfCoatedTablets.total.tareWeight.toFixed(2)}</td>
            <td className="border border-gray-300 p-2 text-center">{weightOfCoatedTablets.total.netWeight.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '900px' }} className="mt-4">
  <div className=" mr-4" > {/* Add margin to the right */}
    <p>Weighed by Coating Operator:</p>
    <input
      value={weightOfCoatedTablets.weighedBy}
      onChange={(e) => handleWeighedByChange(e.target.value)}
      
    />
  </div>
  <div className=" ml-4"> {/* Add margin to the left */}
    <p>Received by Blister Operator :</p>
    <input
      value={weightOfCoatedTablets.receivedBy}
      onChange={(e) => handleReceivedByChange(e.target.value)}
    />
  </div>
</div>



      <h2 className="text-lg font-bold mb-2 mt-6">Batch Manufacturing Yield:</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">S. No.</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Yield</th>
          </tr>
        </thead>
        <tbody>
          {batchManufacturingYield.labels.map((label, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={label.description}
                  onChange={(e) => handleGranulationChange(index, 'description', e.target.value)}
                  className="w-full"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={label.yield}
                  onChange={(e) => handleGranulationChange(index, 'yield', e.target.value)}
                  className="w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <p>Performed by Production Pharmacist (sign & date):</p>
        <input
          value={batchManufacturingYield.performedBy}
          onChange={(e) => handlegGranulationPerformedBy(e.target.value)}
          className="w-full"
        />
        <input
          type='date'
          value={batchManufacturingYield.performedByDate}
          onChange={(e) => handlegGranulationPerformedByDate(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BatchManufacturingFormPage22;
