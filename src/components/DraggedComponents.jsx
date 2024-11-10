
const DraggedComponents = ({ dragged }) => {
  return (
    <div className="form-preview-container">
      <h3>Form Preview</h3>
      <form className="px-8 pt-6 pb-8 mb-4 max-w-sm mx-auto">
        {dragged.map((component, index) => (

          <div key={index} className="grid justify-items-center">
            <div className="flex items-center">
              <label className="mr-2">{component.label}</label>
              {component.componentType === 'textInput' && (
                <input type="text" placeholder={component.label} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              )}
              {component.componentType === 'checkbox' && (
                <input type="checkbox" />
              )}
              {component.componentType === 'radio' && (
                <input type="radio" />
              )}
              {component.componentType === 'dropdown' && (
                <select name="country" >
                  <option value="dog">Nepal</option>
                  <option value="cat">Australia</option>
                  <option value="cat">Finland</option>
                </select>
              )}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default DraggedComponents;
