import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export const CreateTask = ({ modal, toggle, closeBtn, save }) => {
  const [Taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");
  const Handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "TaskName") {
      setTaskname(value);
    } else {
      setDescription(value);
    }
  };
  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = Taskname;
    taskObj["Description"] = description;
    save(taskObj)
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control mt-1"
                value={Taskname}
                onChange={Handlechange}
                name="TaskName"
              />
            </div>
            <div className="form-group mt-2">
              <label>Task Description</label>
              <textarea
                rows="5"
                className="form-control mt-1"
                value={description}
                onChange={Handlechange}
                name="Description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
