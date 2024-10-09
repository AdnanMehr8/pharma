import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useNavigate } from 'react-router-dom';
import BatchManufacturingFormPage1 from '../pages/forms/tablet arex 10mg/dispensing/page1';
import BatchManufacturingFormPage4 from '../pages/forms/tablet arex 10mg/mixing/page4';
import Dispensing from '../pages/forms/tablet arex 10mg/dispensing/dispensing';
import Mixing from '../pages/forms/tablet arex 10mg/mixing/mixing';
import Compression from '../pages/forms/tablet arex 10mg/compression/compression';
import Coating from '../pages/forms/tablet arex 10mg/coating/coating';
import EquipmentTable from './Machines';



const componentMap = {
  dispensing: <Dispensing />,
  mixing: <Mixing />,
  compression: <Compression />,
  coating: <Coating />,
  machines: <EquipmentTable />
};

const DraggableList = () => {
  const initialProcesses = ['dispensing',  'mixing', 'compression', 'coating', 'machines'];

  const [processes, setProcesses] = useState(() => {
    const savedProcesses = localStorage.getItem('processes');
    return savedProcesses ? JSON.parse(savedProcesses) : initialProcesses;
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('processes', JSON.stringify(processes));
  }, [processes]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedProcesses = Array.from(processes);
    const [movedProcess] = reorderedProcesses.splice(result.source.index, 1);
    reorderedProcesses.splice(result.destination.index, 0, movedProcess);
    
    setProcesses(reorderedProcesses);
  };

  const handleSaveAndNext = () => {
    const firstProcess = processes[0];
    navigate(`/${firstProcess}`); 
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="processes">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                listStyleType: 'none',
                padding: '0',
              }}
            >
              {processes.map((process, index) => (
                <Draggable key={process} draggableId={process} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        padding: '8px',
                        margin: '4px 0',
                        backgroundColor: '#f0f0f0',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                      }}
                    >
                      {process} {/* This is now the string identifier */}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={handleSaveAndNext} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Save and Next
      </button>
    </div>
  );
};

export default DraggableList;
// import React, { useState, useEffect } from 'react';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import { useNavigate } from 'react-router-dom';
// import BatchManufacturingFormPage1 from '../pages/forms/tablet arex 10mg/dispensing/page1';
// import BatchManufacturingFormPage4 from '../pages/forms/tablet arex 10mg/mixing/page4';
// import Dispensing from '../pages/forms/tablet arex 10mg/dispensing/dispensing';
// import Mixing from '../pages/forms/tablet arex 10mg/mixing/mixing';
// import Compression from '../pages/forms/tablet arex 10mg/compression/compression';
// import Coating from '../pages/forms/tablet arex 10mg/coating/coating';
// import EquipmentTable from './Machines';

// const componentMap = {
//   dispensing: <Dispensing />,
//   mixing: <Mixing />,
//   compression: <Compression />,
//   coating: <Coating />,
//   machines: <EquipmentTable />,
// };

// // Sample sub-processes for each main process
// const initialProcesses = [
//   {
//     name: 'dispensing',
//     subProcesses: ['Weighing', 'Material Transfer'],
//   },
//   {
//     name: 'mixing',
//     subProcesses: ['Dry Mixing', 'Wet Granulation'],
//   },
//   {
//     name: 'compression',
//     subProcesses: ['Pre-Compression', 'Compression'],
//   },
//   {
//     name: 'coating',
//     subProcesses: ['Preparation', 'Coating Process'],
//   },
//   {
//     name: 'machines',
//     subProcesses: ['Machine Setup', 'Machine Testing'],
//   },
// ];

// const DraggableList = () => {
//   const [processes, setProcesses] = useState(() => {
//     const savedProcesses = localStorage.getItem('processes');
//     return savedProcesses ? JSON.parse(savedProcesses) : initialProcesses;
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     localStorage.setItem('processes', JSON.stringify(processes));
//   }, [processes]);

//   // Handle drag-and-drop for both main processes and sub-processes
//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const source = result.source;
//     const destination = result.destination;

//     // If the drag is happening within a single list (main processes or a sub-process list)
//     if (source.droppableId === destination.droppableId) {
//       const updatedProcesses = [...processes];

//       if (source.droppableId === 'mainProcesses') {
//         // Dragging main processes
//         const [movedProcess] = updatedProcesses.splice(source.index, 1);
//         updatedProcesses.splice(destination.index, 0, movedProcess);
//       } else {
//         // Dragging sub-processes
//         const processIndex = updatedProcesses.findIndex(p => p.name === source.droppableId);
//         const subProcesses = [...updatedProcesses[processIndex].subProcesses];
//         const [movedSubProcess] = subProcesses.splice(source.index, 1);
//         subProcesses.splice(destination.index, 0, movedSubProcess);
//         updatedProcesses[processIndex].subProcesses = subProcesses;
//       }

//       setProcesses(updatedProcesses);
//     }
//   };

//   const handleSaveAndNext = () => {
//     const firstProcess = processes[0].name;
//     navigate(`/${firstProcess}`); 
//   };

//   return (
//     <div>
//       <DragDropContext onDragEnd={onDragEnd}>
//         {/* Main processes */}
//         <Droppable droppableId="mainProcesses">
//           {(provided) => (
//             <ul
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               style={{ listStyleType: 'none', padding: '0' }}
//             >
//               {processes.map((process, index) => (
//                 <Draggable key={process.name} draggableId={process.name} index={index}>
//                   {(provided) => (
//                     <li
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={{
//                         ...provided.draggableProps.style,
//                         padding: '8px',
//                         margin: '4px 0',
//                         backgroundColor: '#f0f0f0',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
//                       }}
//                     >
//                       {/* Main Process */}
//                       <div>{process.name}</div>

//                       {/* Sub-processes */}
//                       <Droppable droppableId={process.name} type="SUBPROCESS">
//                         {(subProvided) => (
//                           <ul
//                             {...subProvided.droppableProps}
//                             ref={subProvided.innerRef}
//                             style={{ paddingLeft: '20px' }}
//                           >
//                             {process.subProcesses.map((subProcess, subIndex) => (
//                               <Draggable key={subProcess} draggableId={subProcess} index={subIndex}>
//                                 {(subProvided) => (
//                                   <li
//                                     ref={subProvided.innerRef}
//                                     {...subProvided.draggableProps}
//                                     {...subProvided.dragHandleProps}
//                                     style={{
//                                       ...subProvided.draggableProps.style,
//                                       padding: '4px',
//                                       margin: '4px 0',
//                                       backgroundColor: '#e0e0e0',
//                                       border: '1px solid #ccc',
//                                       borderRadius: '4px',
//                                       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                                     }}
//                                   >
//                                     {subProcess}
//                                   </li>
//                                 )}
//                               </Draggable>
//                             ))}
//                             {subProvided.placeholder}
//                           </ul>
//                         )}
//                       </Droppable>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//       <button
//         onClick={handleSaveAndNext}
//         style={{
//           marginTop: '20px',
//           padding: '10px',
//           backgroundColor: '#007bff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px',
//         }}
//       >
//         Save and Next
//       </button>
//     </div>
//   );
// };

// export default DraggableList;
