'use client';

import React, { useLayoutEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

// Animation efect
const elementsAnimation: Variants = {
  hidden: () => ({
    y: 200,
    opacity: 0,
  }),
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.02 },
  }),
};

const bgElement = {
  elementWidth: 38,
  elementHeight: 24.1,
  possibleElement: ['</>', '( )', '[ ]', '{ }'],
};

const BgElements = () => {
  const [elementNumber, setElementNumber] = useState(0);
  const [screen, setScreen] = useState<number[]>([0, 0]);
  const [columnsQuantity, setColumnsQuantity] = useState<number>(0);
  const [rowsQuantity, setRowsQuantity] = useState<number>(0);

  useLayoutEffect(() => {
    setElementNumber(Math.ceil(Math.random() * (4 - 0)) - 1);

    // Check browser window size
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;

    // Save Width & Height
    setScreen([windowInnerWidth, windowInnerHeight]);

    // Define number of columns & rows
    setColumnsQuantity(Math.floor(windowInnerWidth / bgElement.elementWidth));
    setRowsQuantity(Math.floor(windowInnerHeight / bgElement.elementHeight));
  }, []);

  // Stars with random element
  let indexElement = elementNumber;

  const elementToShow = () => {
    const element = bgElement.possibleElement[indexElement];

    if (indexElement === bgElement.possibleElement.length - 1) {
      indexElement = 0;
    } else {
      indexElement++;
    }

    return element;
  };

  return (
    <div className="fixed w-screen h-screen left-0 top-0 -z-50">
      <motion.svg
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        xmlns="http://www.w3.org/2000/svg"
        width={screen ? screen[0] : 0}
        height={screen ? screen[1] : 0}
      >
        {[...new Array(rowsQuantity)].map((_, indexRow) => {
          return [...new Array(columnsQuantity)].map((_, indexColumn) => {
            return (
              // custom - Determine the random order of execution
              <motion.text
                key={(indexColumn + 1) * (indexRow + 1)}
                custom={Math.ceil(
                  Math.random() * (rowsQuantity + columnsQuantity)
                )}
                variants={elementsAnimation}
                fontSize={18}
                fontWeight={700}
                x={indexColumn * bgElement.elementWidth}
                y={indexRow * bgElement.elementHeight + bgElement.elementHeight}
                width={bgElement.elementWidth}
                height={bgElement.elementHeight}
                transform="matrix(1 0 0 1.24658 0 27.818)"
                className="fill-zinc-100"
              >
                {/* Show element */}
                {`${elementToShow()}\n\n`}
              </motion.text>
            );
          });
        })}
      </motion.svg>
    </div>
  );
};

export default BgElements;
