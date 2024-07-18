import React, { useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/image/Logo_Mark.webp";
import CrowdModal from "../modal/CrowdModal";

const Items: React.FC = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItemDetails, setSelectedItemDetails] = useState<{
    donations: string;
    description: string;
    raised: string;
  } | null>(null);

  const handleItemClick = () => {
    setSelectedItemDetails(selectedItemDetails);
    setIsModalVisible(true);
  };

  return (
    <>
      <div className="grid gap-3 px-5">
        <div
          ref={itemRef}
          onClick={handleItemClick}
          className="flex gap-2 items-center"
        >
          <Image
            src={logo}
            alt="item image"
            width={200}
            height={200}
            placeholder="blur"
            className="h-24 w-28 rounded-xl overflow-hidden bg-black"
          />
          <div className="grid gap-1">
            <p className="text-sm font-semibold text-slate-400">
              17.4k donations
            </p>
            <p className="text-sm font-semibold">
              Vegetables, food, water, for palestine familes
            </p>
            <p className="text-sm font-semibold h-1 bg-black"></p>
            <p className="text-sm font-semibold mt-1">N615,511 raised</p>
          </div>
        </div>
        <button className="flex justify-center bg-primary p-3 rounded-full items-center text-white w-full">
          Continue
        </button>
      </div>
      <CrowdModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        itemDetails={selectedItemDetails}
      />
    </>
  );
};

export default Items;
