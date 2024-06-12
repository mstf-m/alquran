import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

export default function AyahModal({isOpen,onOpenChange, data}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" placement="auto" backdrop="blur">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className=""></ModalHeader>
          <ModalBody>
            <p dir="rtl"> 
             {data.text}
            </p>
            <p>
              {data.data}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button className="bg-yellow-gradient text-blue-text" variant="shadow" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>

  )
}
