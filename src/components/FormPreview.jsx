import { Button, Input, Modal } from "antd";
import { useState } from "react";

const FormPreview = ({ formComponents }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="form-preview-container">
      <Button type="primary" onClick={showModal} className='text-white bg-blue-700'>
        Preview
      </Button>
      <Modal title="Preview Form" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form>
        {formComponents.map((component, index) => (
          <div key={index} className="flex items-center">
            {component.componentType === 'textInput' && (
              <>
                <div className="relative z-0 w-full mb-5 group">
                  <label className="mr-2">{component.label}</label>
                  <Input  placeholder={component.label} />
                 </div>
              </>
            )}
            {component.componentType === 'checkbox' && (
              <>
              <label className="mr-2">Checkbox</label>
              <input type="checkbox" />
              </>
            )}
            {component.componentType === 'radio' && (
              <>
               <label className="mr-2">{component.label}</label>
              <input type="radio" />
              </>
            )}
            {component.componentType === 'dropdown' && (
              <select name="country" >
                <option value="dog">Nepal</option>
                <option value="cat">Australia</option>
                <option value="cat">Finland</option>
              </select>
              
            )}
          </div>
        ))}
      </form>
      </Modal>

    </div>
  );
};

export default FormPreview;
