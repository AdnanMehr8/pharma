import React from 'react';

const WeightOfGranules = () => (
  <div className="border border-gray-300 p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">WEIGHT OF GRANULES/BULK:</h2>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">Container no.</th>
          <th className="border border-gray-300 p-2">Gross Weight (kg)</th>
          <th className="border border-gray-300 p-2">Tare Weight (kg)</th>
          <th className="border border-gray-300 p-2">Net Weight (kg)</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(6)].map((_, index) => (
          <tr key={index}>
            <td className="border border-gray-300 p-2">{index + 1}</td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
        ))}
        <tr>
          <td className="border border-gray-300 p-2 font-bold">Total</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
      </tbody>
    </table>
    <div className="flex justify-between mt-4">
      <div>
        <p>Weighed by:</p>
        <p>Granulation Operator</p>
      </div>
      <div>
        <p>Received by:</p>
        <p>Compression Operator</p>
      </div>
    </div>
  </div>
);

const GranulationYield = () => (
  <div className="border border-gray-300 p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">Granulation/Mixing Yield:</h2>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">S. No.</th>
          <th className="border border-gray-300 p-2">Description</th>
          <th className="border border-gray-300 p-2">Weight (kg)</th>
          <th className="border border-gray-300 p-2">Performed by Production Pharmacist (Sign & Date)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">1.</td>
          <td className="border border-gray-300 p-2">Theoretical Yield (as per MO)</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">2.</td>
          <td className="border border-gray-300 p-2">Actual Yield (excluding QA sample)</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">3.</td>
          <td className="border border-gray-300 p-2">QA / QC Sample</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">4.</td>
          <td className="border border-gray-300 p-2">Losses during process</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">5.</td>
          <td className="border border-gray-300 p-2">Rejected (if any) *</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">6.</td>
          <td className="border border-gray-300 p-2">Granulation Yield : (98 - 100%)</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
      </tbody>
    </table>
  </div>
);

const RequestForAnalysis = () => (
  <div className="border border-gray-300 p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">Request for Analysis</h2>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p><strong>Product:</strong> Acca Tablets 10 mg</p>
        <p><strong>Section:</strong> General Tablet</p>
        <p><strong>Batch #:</strong> TA-8</p>
        <p><strong>Pack Size:</strong> 14*10's</p>
      </div>
      <div>
        <p><strong>QC#:</strong></p>
        <p><strong>Stage:</strong> Mixing</p>
        <p><strong>Mfg. Date:</strong> /2023</p>
        <p><strong>Exp. Date:</strong> /2026</p>
      </div>
    </div>
    <div className="mb-4">
      <p><strong>Batch Size:</strong> 1000000 Tablets</p>
      <p><strong>Sample quantity:</strong> 25 g</p>
      <p><strong>Weight per unit:</strong></p>
      <p><strong>Date:</strong> / /2023</p>
      <p><strong>Time:</strong></p>
    </div>
    <div className="mb-4">
      <p><strong>Sample Type:</strong> Bulk</p>
      <p><strong>Release Required For:</strong> Compression</p>
      <p><strong>Signature:</strong> _______________</p>
    </div>
  </div>
);

const QualityAssurance = () => (
  <div className="border border-gray-300 p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">FOR QUALITY ASSURANCE DEPARTMENT USE ONLY</h2>
    <div className="mb-4">
      <p><strong>Sample collected on:</strong> _______________</p>
      <p><strong>Quantity of sample:</strong> _______________</p>
      <p><strong>Container Number(s):</strong> _______________</p>
    </div>
    <div className="mb-4">
      <p><strong>Observations during Sampling:</strong></p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Parameters</th>
            <th className="border border-gray-300 p-2">OK</th>
            <th className="border border-gray-300 p-2">Not OK</th>
            <th className="border border-gray-300 p-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {['Placement', 'Identification', 'Physical condition of containers', 'Temperature', 'Humidity', 'Cleanliness', 'Documentation', 'Personnel Warning'].map((param, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{param}</td>
              <td className="border border-gray-300 p-2"><input type="checkbox" /></td>
              <td className="border border-gray-300 p-2"><input type="checkbox" /></td>
              <td className="border border-gray-300 p-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-between">
      <p><strong>QA Officer:</strong> _______________</p>
      <p><strong>QA Manager:</strong> _______________</p>
    </div>
  </div>
);

const GeneralInstructions = () => (
  <div className="border border-gray-300 p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">General Instructions and precautions for compression:</h2>
    <ol className="list-decimal pl-4">
      <li>Area is properly cleaned, no material from previous batch present in the area. (e.g. Product, Documents, etc.)</li>
      <li>Staff properly attired. (Wear factory uniform and appropriate personnel protective equipment).</li>
      <li>Relevant documents / materials are present in the area.</li>
      <li>All relevant logbooks are filled.</li>
      <li>Before compression, carefully check the followings:
        <ol className="list-[lower-alpha] pl-4">
          <li>Machine and utensils to be used are clean. Punches and dies are in accordance with the product specification.</li>
          <li>Product collecting container / trays are clean properly labeled.</li>
          <li>BMR, SOPs are in place.</li>
          <li>All containers of granules are duly labeled and released by QC.</li>
          <li>Dust collector / exhaust system is working.</li>
        </ol>
      </li>
      <li>The room has the required temperature and humidity.</li>
      <li>Appropriate balance is available and calibrated.</li>
      <li>Section General Tablet Area Compression.</li>
    </ol>
    <p className="font-bold mt-4">I HAVE READ AND UNDERSTOOD ALL THE PRECAUTIONS.</p>
    <div className="mt-2">
      <p>In-charge Production/ Production Pharmacist</p>
      <p>_______________________</p>
    </div>
  </div>
);

const LineClearance = () => (
  <div className="border border-gray-300 p-4 mb-4">
    <h2 className="text-lg font-bold mb-2">LINE CLEARANCE OF EQUIPMENT:</h2>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">EQUIPMENT</th>
          <th className="border border-gray-300 p-2">Equipment ID</th>
          <th className="border border-gray-300 p-2">Previous Product</th>
          <th className="border border-gray-300 p-2">Batch No.</th>
          <th className="border border-gray-300 p-2">Cleaned By Operator (Sign & Date)</th>
          <th className="border border-gray-300 p-2">Checked By Production Pharmacist (Sign & Date)</th>
          <th className="border border-gray-300 p-2">Verified By QA (Sign & Date)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">Compression machine</td>
          <td className="border border-gray-300 p-2">DP/PD/TG /IQR/</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ... (previous code remains the same)

const CompressionProcess = () => (
    <div className="border border-gray-300 p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">COMPRESSION PROCESS:</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Step</th>
            <th className="border border-gray-300 p-2">Target</th>
            <th className="border border-gray-300 p-2">Actual</th>
            <th className="border border-gray-300 p-2">Performed by Operator (Sign & date)</th>
            <th className="border border-gray-300 p-2">Checked By P.O QAI</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td className="border border-gray-300 p-2">1.</td>
          <td className="border border-gray-300 p-2">
            Room Temperature & Humidity:<br />
            Check temperature and humidity of the area, before start of compression.<br />
            Limits: Temp: NMT 30°C, RH: NMT 50%
          </td>
          <td className="border border-gray-300 p-2">
            _____°C<br />
            _____% RH
          </td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">2.</td>
          <td className="border border-gray-300 p-2">Check the weight of granules.<br />Weight of granules: _____Kg</td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">3.</td>
          <td className="border border-gray-300 p-2">
            Check Embossing of punches:<br />
            Upper Punch - D/D<br />
            Lower Punch - Embossed Plain
          </td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
          <td className="border border-gray-300 p-2"></td>
        </tr>
          <tr>
            <td className="border border-gray-300 p-2">4.</td>
            <td className="border border-gray-300 p-2">
              Compress the granules into tablets on tablet compression machine. Set the machine and check tablets for following parameters:
              <br />
              Compression Started at: _____ AM/PM
              <br />
              Completed on: _____ AM/PM
            </td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">5.</td>
            <td className="border border-gray-300 p-2">
              Send test request to QA for physical & chemical analysis.
              Raise the intimation to QA for sampling and getting the sample tested by QC physically and chemically.
              <br />
              Sample taken Qty: _____ Tablets
            </td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  const InProcessCheckSheet = () => (
    <div className="border border-gray-300 p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">In Process Check Sheet (Weight)</h2>
      <div className="mb-4">
        <p><strong>Upper limit (+):</strong> _____ &nbsp;&nbsp;&nbsp; <strong>Target weight:</strong> _____ &nbsp;&nbsp;&nbsp; <strong>Lower Limit (-):</strong> _____</p>
        <p><strong>Date started:</strong> _____ &nbsp;&nbsp;&nbsp; <strong>Date completed:</strong> _____</p>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Date & Time</th>
            {[...Array(10)].map((_, index) => (
              <th key={index} className="border border-gray-300 p-2">{index + 1}</th>
            ))}
            <th className="border border-gray-300 p-2">Avg. Wt of 10 Tabs</th>
            <th className="border border-gray-300 p-2">Temp</th>
            <th className="border border-gray-300 p-2">RH %</th>
            <th className="border border-gray-300 p-2">P.O/ Q.A.O</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(20)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-gray-300 p-2"></td>
              {[...Array(10)].map((_, colIndex) => (
                <td key={colIndex} className="border border-gray-300 p-2"></td>
              ))}
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2"></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p><strong>Remarks:</strong> _________________________________________________</p>
      </div>
    </div>
  );
  
  const PharmaceuticalForms = () => (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pharmaceutical Manufacturing Forms</h1>
      <WeightOfGranules />
      <GranulationYield />
      <RequestForAnalysis />
      <QualityAssurance />
      <GeneralInstructions />
      <LineClearance />
      <CompressionProcess />
      <InProcessCheckSheet />
    </div>
  );
  
  export default PharmaceuticalForms;