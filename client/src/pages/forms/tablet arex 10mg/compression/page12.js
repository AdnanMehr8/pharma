import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompressionRecord } from '../../../../store/compressionSlice'; // Updated import for compression slice
import './page12.css';

const BatchManufacturingFormPage12 = () => {
  const dispatch = useDispatch();
  const { requestForAnalysis } = useSelector((state) => state.compression); // Updated to use compression state

  const handleBatchInfoChange = (field, value) => {
    dispatch(setCompressionRecord({
      requestForAnalysis: {
        ...requestForAnalysis,
        batchInfo: { ...requestForAnalysis.batchInfo, [field]: value }
      }
    }));
  };

  const handleQAChange = (field, value) => {
    dispatch(setCompressionRecord({
      requestForAnalysis: {
        ...requestForAnalysis,
        qa: { ...requestForAnalysis.qa, [field]: value }
      }
    }));
  };

  const handleObservationChange = (index, field, value) => {
    const updatedObservations = [...requestForAnalysis.qaObservations];
    updatedObservations[index] = { ...updatedObservations[index], [field]: value };
    dispatch(setCompressionRecord({ requestForAnalysis: { ...requestForAnalysis, qaObservations: updatedObservations } }));
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
          {Object.keys(requestForAnalysis.batchInfo).map((key) => (
            <tr key={key}>
              <td>{key.replace(/([A-Z])/g, ' $1')}: </td>
              <td>
                <input
                  type={key.toLowerCase().includes('date') ? 'date' : key.toLowerCase().includes('time') ? 'time' : 'text'}
                  value={requestForAnalysis.batchInfo[key]}
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
          {Object.keys(requestForAnalysis.qa).map((key) => (
            <tr key={key}>
              <td>{key.replace(/([A-Z])/g, ' $1')}: </td>
              <td>
                <input
                  type={key.toLowerCase().includes('date') ? 'date' : key.toLowerCase().includes('time') ? 'time' : 'text'}
                  value={requestForAnalysis.qa[key]}
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
          {requestForAnalysis.qaObservations.map((observation, index) => (
            <tr key={index}>
              <td>
                <input
                  value={observation.parameter}
                  onChange={(e) => handleObservationChange(index, 'parameter', e.target.value)}
                />
              </td>
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
                value={requestForAnalysis.qaOfficer}
                onChange={(e) => dispatch(setCompressionRecord({ requestForAnalysis: { ...requestForAnalysis, qaOfficer: e.target.value } }))} 
              />
            </td>
          </tr>
          <tr>
            <td>QA Manager:</td>
            <td>
              <input
                value={requestForAnalysis.qaManager}
                onChange={(e) => dispatch(setCompressionRecord({ requestForAnalysis: { ...requestForAnalysis, qaManager: e.target.value } }))} 
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BatchManufacturingFormPage12;
