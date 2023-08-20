import React, { useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "@components/modal";
import CreateTaskForm from "./CreateTaskForm";

const CreateTaskModal = () => {
  const [isShowModal, setIsShowModal] = useState(true);
  const router = useRouter();
  const handleClose = () => {
    setIsShowModal(false);
    router.push(`/dashboard`);
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 h-full">
      <Modal
        header="Project Task"
        close={handleClose}
        isShowModal={isShowModal}
      >
        <CreateTaskForm close={handleClose} />
      </Modal>
    </div>
  );
};

export default CreateTaskModal;
