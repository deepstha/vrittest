import { memo } from 'react';
// Memoized Input Field Component
const MemoizedInput = memo(({ label, value, onChange }) => {
    return (
      <div>
        <label>{label}:</label>
        <input type="text" value={value} onChange={onChange} />
      </div>
    );
  });

  export default MemoizedInput;