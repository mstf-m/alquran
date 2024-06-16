import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/font/ScheherazadeRegOT.ttf",
  display: "swap",
});

export default function AyahModal({ isOpen, onOpenChange, data }) {
  let tabs = [
    {
      id: "Translate",
      label: "Translate",
      content: data?.data,
    },
    {
      id: "Tafsirs",
      label: "Tafsirs",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "Surah info",
      label: "Surah info",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="5xl"
      placement="auto"
      backdrop="blur"
    >
      <ModalContent className="min-h-[70vh]">
        {(onClose) => (
          <>
            <ModalHeader ></ModalHeader>
            <ModalBody>
              {data == null ? (
                <div className="flex justify-center items-center mt-20">
                <Spinner size="lg" />
                </div>
              ) : (
                <>
                  <p dir="rtl" className={`${myFont.className} text-4xl my-5`}>
                    {data.text}
                  </p>
                  <div className="flex w-full flex-col">
                    <Tabs aria-label="Dynamic tabs" items={tabs} size="lg">
                      {(item) => (
                        <Tab key={item.id} title={item.label}>
                          <Card className="shadow-none text-[#272727] text-xl">
                            <CardBody>{item.content}</CardBody>
                          </Card>
                        </Tab>
                      )}
                    </Tabs>
                  </div>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                className="bg-yellow-gradient text-blue-text font-bold"
                variant="shadow"
                onPress={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
