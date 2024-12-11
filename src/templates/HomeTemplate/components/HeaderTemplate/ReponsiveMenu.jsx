import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import DropdownHeader from "../../../../components/Dropdown/DropdownHeader";
const ReponsiveMenu = ({ openHambur, items }) => {
  return (
    <AnimatePresence mode="wait">
      {openHambur && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16  left-0 w-full h-2/3 z-20"
        >
          <div className="text-xl font-bold uppercase bg-black text-white py-10 m-6 rounded-md">
            <ul className="flex flex-col justify-center items-center space-y-5">
              <li>
                <DropdownHeader
                  buttonContent="Danh mục khóa học"
                  items={items}
                />
              </li>
              <li>
                <DropdownHeader
                  buttonContent="Danh mục khóa học"
                  items={items}
                />
              </li>
              <li>
                <DropdownHeader
                  buttonContent="Danh mục khóa học"
                  items={items}
                />
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReponsiveMenu;
