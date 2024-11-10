
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ item }) => {
  // useDrag hook to make an item draggable
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',  // The type of the item being dragged
    item,          // The data being passed with the drag
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),  // Track if the item is being dragged
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,  // Change opacity when dragging
        cursor: 'move',
        padding: '10px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
      }}
    >
      {item.label}
    </div>
  );
};

export default DraggableComponent;
