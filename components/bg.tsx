'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, color, motion, Variants } from 'framer-motion';
import { useWindowSize } from './hook-use-window-size';
import { useDebounce } from 'use-debounce';
import { useAppSelector } from '@/lib/hooks';

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
  elementWidth: 88,
  elementHeight: 60,
  possibleElement: ['</>', '()', '[]', '{}'],
};

const Bg = () => {
  const windowSize = useWindowSize();

  const [windowDebounce] = useDebounce(windowSize, 800);

  const [elementNumber, setElementNumber] = useState(0);
  const [columnsQuantity, setColumnsQuantity] = useState<number>(0);

  const [rowsQuantity, setRowsQuantity] = useState<number>(0);

  // Stars with random element
  let indexElement = elementNumber;

  useLayoutEffect(() => {
    setElementNumber(Math.ceil(Math.random() * (4 - 0)) - 1);

    // Check browser window size
    const windowInnerWidth = windowSize.width;
    const windowInnerHeight = windowSize.height;

    // Define number of columns & rows
    setColumnsQuantity(Math.floor(windowInnerWidth / bgElement.elementWidth));

    setRowsQuantity(Math.floor(windowInnerHeight / bgElement.elementHeight));
  }, [windowDebounce]);

  const [colorElement, setColorElement] = useState('red');
  const [section, setSection] = useState(1);

  const activeSection = useAppSelector(
    (state) => state.bannerPosition.sectionNumber
  );

  const [teste] = useDebounce(activeSection, 1000);

  useEffect(() => {
    if (section === activeSection) return;
    setSection(activeSection);

    if (activeSection === 1) setColorElement('226 232 240');
    if (activeSection === 2) setColorElement('236 252 203');
  }, [teste]);

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
    <motion.div
      className="fixed w-screen h-screen flex flex-wrap left-0 top-0 right-0 bottom-0 -z-50"
      whileInView="visible"
    >
      {
        <motion.div
          className="m-auto relative"
          style={{
            width:
              columnsQuantity && bgElement.elementWidth
                ? columnsQuantity * bgElement.elementWidth
                : '100vw',
            height:
              rowsQuantity && bgElement.elementHeight
                ? rowsQuantity * bgElement.elementHeight
                : '100vh',
            filter: 'saturate(2)',
          }}
        >
          <AnimatePresence>
            {windowSize === windowDebounce &&
              activeSection === teste &&
              [...new Array(rowsQuantity)].map((_, indexRow) => {
                return [...new Array(columnsQuantity)].map((_, indexColumn) => {
                  return (
                    // custom - Determine the random order of execution
                    <motion.span
                      key={(indexColumn + Math.random() + 1) * (indexRow + 1)}
                      custom={Math.ceil(
                        Math.random() * (rowsQuantity + columnsQuantity)
                      )}
                      initial={{
                        opacity: 0,
                        x: -200,
                        y: -200,
                      }}
                      animate={{
                        opacity: 1,
                        y: indexRow * bgElement.elementHeight,
                        x: indexColumn * bgElement.elementWidth,
                        width: bgElement.elementWidth,
                        height: bgElement.elementHeight,
                        display: 'flex',
                      }}
                      exit={{
                        x: -200,
                        y: -200,
                        opacity: 0,
                      }}
                      transition={{
                        delay:
                          Math.ceil(
                            Math.random() * (rowsQuantity + columnsQuantity)
                          ) * 0.02,
                      }}
                      style={{
                        fontSize: 'calc(15px + 0.390625vw)',
                        color: `rgb(${colorElement})`,
                      }}
                      className="text-slate-200 text-2xl absolute items-center justify-center"
                    >
                      {/* Show element */}
                      {`${elementToShow()}\n\n`}
                    </motion.span>
                  );
                });
              })}
          </AnimatePresence>
        </motion.div>
      }
    </motion.div>
  );
};

export default Bg;
