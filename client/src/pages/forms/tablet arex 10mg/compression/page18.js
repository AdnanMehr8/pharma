import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './page18.css';
import { setCompressionRecord } from '../../../../store/compressionSlice';

const BatchManufacturingFormPage18 = () => {
  const dispatch = useDispatch();
  const { requestForAnalysisEnd } = useSelector((state) => state.compression);

  const handleBatchInfoChange = (field, value) => {
    dispatch(setCompressionRecord({
      requestForAnalysisEnd: {
        ...requestForAnalysisEnd,
        batchInfo: { ...requestForAnalysisEnd.batchInfo, [field]: value }
      }
    }));
  };

  const handleQAChange = (field, value) => {
    dispatch(setCompressionRecord({
      requestForAnalysisEnd: {
        ...requestForAnalysisEnd,
        qa: { ...requestForAnalysisEnd.qa, [field]: value }
      }
    }));
  };

  const handleObservationChange = (index, field, value) => {
    const updatedObservations = [...requestForAnalysisEnd.qaObservations];
    updatedObservations[index] = { ...updatedObservations[index], [field]: value };
    dispatch(setCompressionRecord({ requestForAnalysisEnd: { ...requestForAnalysisEnd, qaObservations: updatedObservations } }));
  };

  return (
    <div>
      <h3 className='text-center'>Request for Analysis</h3>

      <table>
        <thead>
          <tr>
            <th className='text-center' colSpan={2}>Batch Info</th>
          </tr>
        </thead>
        <tbody>
          {/* Batch Info Fields */}
          {Object.keys(requestForAnalysisEnd.batchInfo).map((key) => (
            <tr key={key}>
              <td>{key.replace(/([A-Z])/g, ' $1')}: </td>
              <td>
                <input
                  type={key.toLowerCase().includes('date') ? 'date' : key.toLowerCase().includes('time') ? 'time' : 'text'}
                  value={requestForAnalysisEnd.batchInfo[key]}
                  onChange={(e) => handleBatchInfoChange(key, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className='text-center'>QA Information</h4>
      <table>
        <thead>
          <tr>
            <th className='text-center' colSpan={2}>QA Details</th>
          </tr>
        </thead>
        <tbody>
          {/* QA Fields */}
          {Object.keys(requestForAnalysisEnd.qa).map((key) => (
            <tr key={key}>
              <td>{key.replace(/([A-Z])/g, ' $1')}: </td>
              <td>
                <input
                  type={key.toLowerCase().includes('date') ? 'date' : key.toLowerCase().includes('time') ? 'time' : 'text'}
                  value={requestForAnalysisEnd.qa[key]}
                  onChange={(e) => handleQAChange(key, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className='text-center'>QA Observations</h4>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {requestForAnalysisEnd.qaObservations.map((observation, index) => (
            <tr key={index}>
               
                  <td>
              {/* {index === 0 && 'Placement'}
        {index === 1 && 'Identification'}
        {index === 2 && 'Physical condition of containers'}
        {index === 3 && 'Temperature'}
        {index === 4 && 'Humidity'}
                {index === 5 && 'Cleanliness'}
        {index === 6 && 'Documentation'}
        {index === 7 && 'Personnel Wearing'} */}
                
                <input
                  value={observation.parameter}
                  onChange={(e) => handleObservationChange(index, 'parameter', e.target.value)}
                />
              </td>
                {/* <input
                  value={observation.parameter}
                  onChange={(e) => handleObservationChange(index, 'parameter', e.target.value)}
                /> */}
    
              <td>
                <select
                  value={observation.status}
                  onChange={(e) => handleObservationChange(index, 'status', e.target.value)}
                >
                  <option value="OK">OK</option>
                  <option value="Not OK">Not OK</option>
                </select>
              </td>
              <td>
                <input
                  value={observation.remarks}
                  onChange={(e) => handleObservationChange(index, 'remarks', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>QA Officer and Manager</h4>
      <table>
        <tbody>
          <tr>
            <td>QA Officer:</td>
            <td>
              <input
                value={requestForAnalysisEnd.qaOfficer}
                onChange={(e) => dispatch(setCompressionRecord({ requestForAnalysisEnd: { ...requestForAnalysisEnd, qaOfficer: e.target.value } }))} 
              />
            </td>
          </tr>
          <tr>
            <td>QA Manager:</td>
            <td>
              <input
                value={requestForAnalysisEnd.qaManager}
                onChange={(e) => dispatch(setCompressionRecord({ requestForAnalysisEnd: { ...requestForAnalysisEnd, qaManager: e.target.value } }))} 
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BatchManufacturingFormPage18;
