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
