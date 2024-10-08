import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './pp.css'; // Import CSS file for styling
import { setCoatingRecord } from '../../../../store/coatingSlice';

const BatchManufacturingFormPage22 = () => {
  const dispatch = useDispatch();
  const { weightOfCoatedTablets, batchManufacturingYield } = useSelector((state) => state.coating);

  const handleWeightChange = (index, field, value) => {
    const updatedContainers = [...weightOfCoatedTablets.containers];
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

    dispatch(setCoatingRecord({ 
      weightOfCoatedTablets: { 
        ...weightOfCoatedTablets, 
        containers: updatedContainers,
        total: {
          grossWeight: totalGrossWeight,
          tareWeight: totalTareWeight,
          netWeight: totalNetWeight,
        }
      } 
    }));
  };

  const handleYieldChange = (index, field, value) => {
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

  const handlegCoatingPerformedBy = (value) => {
    dispatch(setCoatingRecord({ batchManufacturingYield: { ...batchManufacturingYield, performedBy: value } }));
  };

  return (
    <div className="container">
      <h3>Weight of Coated Tablets</h3>
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
          {weightOfCoatedTablets.containers.map((container, index) => (
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
            <td>{weightOfCoatedTablets.total.grossWeight.toFixed(2)}</td>
            <td>{weightOfCoatedTablets.total.tareWeight.toFixed(2)}</td>
            <td>{weightOfCoatedTablets.total.netWeight.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <label>Weighed By Coating Operator:</label>
        <input
          value={weightOfCoatedTablets.weighedBy}
          onChange={(e) => handleWeighedByChange(e.target.value)}
        />
      </div>
      <div>
        <label>Received By Blister Operator:</label>
        <input
          value={weightOfCoatedTablets.receivedBy}
          onChange={(e) => handleReceivedByChange(e.target.value)}
        />
      </div>

      <h3>Batch Manufacturing Yield:</h3>
      <table>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Description</th>
            <th>Yield (Kg)</th>
          </tr>
        </thead>
        <tbody>
  {batchManufacturingYield.labels.map((label, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
      <input
          type="Description"
          value={label.description}
          onChange={(e) => handleYieldChange(index, 'description', e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={label.yield}
          onChange={(e) => handleYieldChange(index, 'yield', e.target.value)}
        />
      </td>
    </tr>
  ))}
</tbody>

      </table>

      <div>
        <label>Performed By Production Pharmacist (sign & date):</label>
        <input
          value={batchManufacturingYield.performedBy}
          onChange={(e) => handlegCoatingPerformedBy(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BatchManufacturingFormPage22;
