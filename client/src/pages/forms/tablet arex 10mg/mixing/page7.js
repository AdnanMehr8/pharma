import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMixingRecord } from '../../../../store/mixingSlice';
import './page7.css'; // Import CSS file for styling

const BatchManufacturingFormPage7 = () => {
  const dispatch = useDispatch();
  const { weightOfGranules, granulationYield } = useSelector((state) => state.mixing);

  const handleWeightChange = (index, field, value) => {
    const updatedContainers = [...weightOfGranules.containers];
    updatedContainers[index] = { ...updatedContainers[index], [field]: value };

    // Update the total weight calculations when weights are changed
    const totalGrossWeight = updatedContainers.reduce((total, container) => {
      return total + parseFloat(container.grossWeight || 0);
    }, 0);

    const totalTareWeight = updatedContainers.reduce((total, container) => {
      return total + parseFloat(container.tareWeight || 0);
    }, 0);

    const totalNetWeight = updatedContainers.reduce((total, container) => {
      return total + parseFloat(container.netWeight || 0);
    }, 0);

    dispatch(setMixingRecord({ 
      weightOfGranules: { 
        ...weightOfGranules, 
        containers: updatedContainers,
        total: {
          grossWeight: totalGrossWeight,
          tareWeight: totalTareWeight,
          netWeight: totalNetWeight,
        }
      } 
    }));
  };

  const handleGranulationChange = (index, field, value) => {
    const updatedLabels = [...granulationYield.labels];
    updatedLabels[index] = { ...updatedLabels[index], [field]: value };
    dispatch(setMixingRecord({ granulationYield: { ...granulationYield, labels: updatedLabels } }));
  };

  const handleWeighedByChange = (value) => {
    dispatch(setMixingRecord({ weightOfGranules: { ...weightOfGranules, weighedBy: value } }));
  };

  const handleReceivedByChange = (value) => {
    dispatch(setMixingRecord({ weightOfGranules: { ...weightOfGranules, receivedBy: value } }));
  };

  const handlegGranulationPerformedBy = (value) => {
    dispatch(setMixingRecord({ granulationYield: { ...granulationYield, performedBy: value } }));
  };

  return (
    <div className="container">
      <h3>Weight of Granules/Bulk</h3>
      <table>
        <thead>
          <tr>
            <th>Container No.</th>
            <th>Gross Weight (Kg)</th>
            <th>Tare Weight (Kg)</th>
            <th>Net Weight (Kg)</th>
          </tr>
        </thead>
        <tbody>
          {weightOfGranules.containers.map((container, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="number"
                  value={container.grossWeight}
                  onChange={(e) => handleWeightChange(index, 'grossWeight', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={container.tareWeight}
                  onChange={(e) => handleWeightChange(index, 'tareWeight', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={container.netWeight}
                  onChange={(e) => handleWeightChange(index, 'netWeight', e.target.value)}
                />
              </td>
            </tr>
          ))}
          {/* Total Row */}
          <tr>
            <td>Total</td>
            <td>{weightOfGranules.total.grossWeight.toFixed(2)}</td>
            <td>{weightOfGranules.total.tareWeight.toFixed(2)}</td>
            <td>{weightOfGranules.total.netWeight.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <label>Weighed By Granulation Operator:</label>
        <input
          value={weightOfGranules.weighedBy}
          onChange={(e) => handleWeighedByChange(e.target.value)}
        />
      </div>
      <div>
        <label>Received By Compression Operator:</label>
        <input
          value={weightOfGranules.receivedBy}
          onChange={(e) => handleReceivedByChange(e.target.value)}
        />
      </div>

      <h3>Granulation/Mixing Yield</h3>
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Description</th>
            <th>Weight (Kg)</th>
          </tr>
        </thead>
        <tbody>
  {granulationYield.labels.map((label, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
      <input
          type="text"
          value={label.description}
          onChange={(e) => handleGranulationChange(index, 'description', e.target.value)}
        />
        {/* {index === 0 && 'Theoretical Yield (as per MO)'}
        {index === 1 && 'Actual Yield (excluding QA sample)'}
        {index === 2 && 'QA/QC Sample'}
        {index === 3 && 'Losses during process'}
        {index === 4 && 'Rejected (if any)*'}
        {index === 5 && 'Granulation Yield (98-100)%: ((S. No.2 + S. No.3) / S. No.1) X 100'} */}
      </td>
      <td>
        <input
          type="number"
          value={label.weight}
          onChange={(e) => handleGranulationChange(index, 'weight', e.target.value)}
        />
      </td>
    </tr>
  ))}
</tbody>

      </table>

      <div>
      <label>Performed By Production Pharmacist (sign & date):</label>
        <input
          value={granulationYield.performedBy}
          onChange={(e) => handlegGranulationPerformedBy(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BatchManufacturingFormPage7;
