// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './pp.css'; // Import CSS file for styling
// import { setCompressionRecord } from '../../../../store/compressionSlice';

// const BatchManufacturingFormPage17 = () => {
//   const dispatch = useDispatch();
//   const { weightOfCompressedTablets, compressionYield } = useSelector((state) => state.compression);

//   const handleWeightChange = (index, field, value) => {
//     const updatedContainers = [...weightOfCompressedTablets.containers];
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

//     dispatch(setCompressionRecord({
//       weightOfCompressedTablets: {
//         ...weightOfCompressedTablets,
//         containers: updatedContainers,
//         total: {
//           grossWeight: totalGrossWeight,
//           tareWeight: totalTareWeight,
//           netWeight: totalNetWeight,
//         }
//       }
//     }));
//   };

//   const handleYieldChange = (index, field, value) => {
//     const updatedLabels = [...compressionYield.labels];
//     updatedLabels[index] = { ...updatedLabels[index], [field]: value };
//     dispatch(setCompressionRecord({ compressionYield: { ...compressionYield, labels: updatedLabels } }));
//   };

//   const handleWeighedByChange = (value) => {
//     dispatch(setCompressionRecord({ weightOfCompressedTablets: { ...weightOfCompressedTablets, weighedBy: value } }));
//   };

//   const handleReceivedByChange = (value) => {
//     dispatch(setCompressionRecord({ weightOfCompressedTablets: { ...weightOfCompressedTablets, receivedBy: value } }));
//   };

//   const handlegGranulationPerformedBy = (value) => {
//     dispatch(setCompressionRecord({ compressionYield: { ...compressionYield, performedBy: value } }));
//   };

//   return (
//     <div className="container">
//       <h3>Weight of Compressed Tablets</h3>
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
//           {weightOfCompressedTablets.containers.map((container, index) => (
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
//             <td>{weightOfCompressedTablets.total.grossWeight.toFixed(2)}</td>
//             <td>{weightOfCompressedTablets.total.tareWeight.toFixed(2)}</td>
//             <td>{weightOfCompressedTablets.total.netWeight.toFixed(2)}</td>
//           </tr>
//         </tbody>
//       </table>

//       <div>
//         <label>Weighed By Compression Operator:</label>
//         <input
//           value={weightOfCompressedTablets.weighedBy}
//           onChange={(e) => handleWeighedByChange(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Received By Coating Operator:</label>
//         <input
//           value={weightOfCompressedTablets.receivedBy}
//           onChange={(e) => handleReceivedByChange(e.target.value)}
//         />
//       </div>

//       <h3>Compression Yield</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>S. No.</th>
//             <th>Description</th>
//             <th>Yield (Kg)</th>
//           </tr>
//         </thead>
//         <tbody>
//   {compressionYield.labels.map((label, index) => (
//     <tr key={index}>
//       <td>{index + 1}</td>
//       <td>
//       <input
//           type="text"
//           value={label.description}
//           onChange={(e) => handleYieldChange(index, 'description', e.target.value)}
//         />
//         {/* {index === 0 && 'Theoretical Number of Compressed Tablets'}
//         {index === 1 && 'Average weight of 1 compressed Tablet'}
//         {index === 2 && 'Weight of bulk compressed Tablets'}
//         {index === 3 && 'Compressed Tablets Yield: [(S.No.3 x 1000,000) / S.No.2]'}
//         {index === 4 && 'Yield Compressed Tablet in %age: [(S.No.4 / S.No.1) x 100]'} */}
//       </td>
//       <td>
//         <input
//           type="number"
//           value={label.yield}
//           onChange={(e) => handleYieldChange(index, 'yield', e.target.value)}
//         />
//       </td>
//     </tr>
//   ))}
// </tbody>

//       </table>

//       <div>
//         <label>Performed By Production Pharmacist (sign & date):</label>
//         <input
//           value={compressionYield.performedBy}
//           onChange={(e) => handlegGranulationPerformedBy(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default BatchManufacturingFormPage17;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompressionRecord } from '../../../../store/compressionSlice';

const BatchManufacturingFormPage7 = () => {
  const dispatch = useDispatch();
  const { weightOfCompressedTablets, compressionYield } = useSelector((state) => state.compression);

  const handleWeightChange = (index, field, value) => {
    const updatedContainers = [...weightOfCompressedTablets.containers];
    updatedContainers[index] = { ...updatedContainers[index], [field]: value };

    const totalGrossWeight = updatedContainers.reduce((total, container) => total + parseFloat(container.grossWeight || 0), 0);
    const totalTareWeight = updatedContainers.reduce((total, container) => total + parseFloat(container.tareWeight || 0), 0);
    const totalNetWeight = updatedContainers.reduce((total, container) => total + parseFloat(container.netWeight || 0), 0);

    dispatch(setCompressionRecord({ 
      weightOfCompressedTablets: { 
        ...weightOfCompressedTablets, 
        containers: updatedContainers,
        total: { grossWeight: totalGrossWeight, tareWeight: totalTareWeight, netWeight: totalNetWeight }
      } 
    }));
  };

  const handleGranulationChange = (index, field, value) => {
    const updatedLabels = [...compressionYield.labels];
    updatedLabels[index] = { ...updatedLabels[index], [field]: value };
    dispatch(setCompressionRecord({ compressionYield: { ...compressionYield, labels: updatedLabels } }));
  };

  const handleWeighedByChange = (value) => {
    dispatch(setCompressionRecord({ weightOfCompressedTablets: { ...weightOfCompressedTablets, weighedBy: value } }));
  };

  const handleReceivedByChange = (value) => {
    dispatch(setCompressionRecord({ weightOfCompressedTablets: { ...weightOfCompressedTablets, receivedBy: value } }));
  };

  const handlegGranulationPerformedBy = (value) => {
    dispatch(setCompressionRecord({ compressionYield: { ...compressionYield, performedBy: value } }));
  };

  const handlegGranulationPerformedByDate = (value) => {
    dispatch(setCompressionRecord({ compressionYield: { ...compressionYield, performedByDate: value } }));
  };

  return (
    <div className="p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">  WEIGHT OF COMPRESSED TABLETS:</h2>
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
          {weightOfCompressedTablets.containers.map((container, index) => (
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
            <td className="border border-gray-300 p-2 text-center">{weightOfCompressedTablets.total.grossWeight.toFixed(2)}</td>
            <td className="border border-gray-300 p-2 text-center">{weightOfCompressedTablets.total.tareWeight.toFixed(2)}</td>
            <td className="border border-gray-300 p-2 text-center">{weightOfCompressedTablets.total.netWeight.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '900px' }} className="mt-4">
  <div className=" mr-4" > {/* Add margin to the right */}
    <p>Weighed by:</p>
    <input
      value={weightOfCompressedTablets.weighedBy}
      onChange={(e) => handleWeighedByChange(e.target.value)}
      
    />
  </div>
  <div className=" ml-4"> {/* Add margin to the left */}
    <p>Received by:</p>
    <input
      value={weightOfCompressedTablets.receivedBy}
      onChange={(e) => handleReceivedByChange(e.target.value)}
    />
  </div>
</div>



      <h2 className="text-lg font-bold mb-2 mt-6">Compression Yield:</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">S. No.</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Yield</th>
          </tr>
        </thead>
        <tbody>
          {compressionYield.labels.map((label, index) => (
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
          value={compressionYield.performedBy}
          onChange={(e) => handlegGranulationPerformedBy(e.target.value)}
          className="w-full"
        />
        <input
          type='date'
          value={compressionYield.performedByDate}
          onChange={(e) => handlegGranulationPerformedByDate(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BatchManufacturingFormPage7;
