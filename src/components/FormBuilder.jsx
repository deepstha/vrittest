import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ComponentTypes } from './componentTypes';
import FormPreview from './FormPreview';
import DraggableComponent from './DraggableComponents';
import DraggedComponents from './DraggedComponents';

const FormBuilder = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [preViewMode, setPreviewMode] = useState(false);

  // Setting up the drop zone where form components are dropped
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'ITEM', // Accepts only 'items' type from draggable items
    drop: (item) => {
      // When an item is dropped, add it to the formComponents state
      setDroppedItems((prevItems) => [...prevItems, item]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(), // Tracks if the item is currently being dragged over the drop area
      canDrop: monitor.canDrop(),        // True if the dragged item can be dropped here
    }),
  });
  const previewMode = () => {
    console.log('preview mode on')
    setPreviewMode(prev => !prev)
  }
  return (
    <div>
      <div className="preview">
        {/* <button onClick={previewMode} className='text-white bg-blue-700'>
          Preview
        </button> */}
        <FormPreview formComponents={droppedItems} />
        
        </div>
      <div className="form-builder-container">
        <div className="component-palette">
          <h3>Available Components</h3>
          {ComponentTypes.map((component) => (
            <DraggableComponent key={component.id} item={component} />
          ))}
        </div>

        <div
          ref={drop}
          className="form-canvas"
          style={{
            minHeight: '300px',
            border: '2px dashed #ccc',
            padding: '10px',
            background: isOver ? '#f0f0f0' : '#fff',
          }}
        >
          <h3>Form Builder</h3>
          <h3>Drop Zone</h3>
        {canDrop && !isOver && <p>Drag an item here</p>}
        {isOver && <p>Release to drop</p>}
        <div>
          <h4>Dropped Items</h4>
          {droppedItems.length > 0 ? (
            <ul>
              <DraggedComponents dragged={droppedItems} />
            </ul>
          ) : (
            <p>No items dropped yet.</p>
          )}
        </div>

        </div>

      </div>
    </div>
  );
};

export default FormBuilder;
