'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { useAppSelector } from '@/lib/hooks';
import { useWindowSize } from '../hook-use-window-size';

const FirstSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
    }}
    exit={{ opacity: 0 }}
  >
    <h2 className="font-bold text-6xl mb-9">
      Hi, I`m <br /> Ostap
      <br />
      <span className="text-lg">Front-End Developer from Porto :)</span>
    </h2>
    <h3 className="text-xl mb-8">
      Welcome to my personal site <br /> You can check my Portfolio
      <br />
      with the link below
    </h3>
    <div>
      <Link
        href={'/portfolio'}
        className="bg-white text-black px-4 py-3 inline-block"
      >
        View Portfolio
      </Link>
    </div>
  </motion.div>
);

const SecondSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
    >
      <h4 className="font-bold text-2xl mb-6">About My</h4>
      <h3 className="text-xl mb-8">
        Passionate developer offering 5+ years of experience, strong sense of
        web design and commitment to the user experience, including the
        accessibility. Working on wide range of project types, from landing
        pages to large platforms. Fast adaptation to new Technologies,
        Frameworks and Program Languages. Comfortable with working with code
        written by others, and development from scratch. Excellent communication
        skills and great collaborator.
      </h3>
    </motion.div>
  );
};

const Banner = () => {
  // Check if navbar is already animated
  const navbarIsAnimated = useAppSelector(
    (state) => state.animation.navbarIsAnimated
  );

  const { sectionNumber, topPosition, parrentWidth } = useAppSelector(
    (state) => state.bannerPosition
  );

  const { width, height } = useWindowSize();

  return (
    <AnimatePresence>
      {navbarIsAnimated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            width: 469,
            x: topPosition && sectionNumber === 1 ? 0 : parrentWidth / 2,
            top:
              sectionNumber === 1
                ? height / 2 + topPosition - 62
                : topPosition + 24,
            translateY: sectionNumber === 1 ? '-50%' : 0,
            translateX: sectionNumber === 1 ? 0 : '-50%',
          }}
          transition={{
            // duration: 0.5,
            // delay: 0.1,
            // x: { delay: 1 },
            ease: 'anticipate',
          }}
          className={`bg-[#10544e] text-white ${
            sectionNumber === 1 ? 'p-14' : 'p-2'
          }  z-10 absolute`}
        >
          <AnimatePresence>
            {(sectionNumber === 1 && <FirstSection />) ||
              (sectionNumber === 2 && <SecondSection />)}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;

// <motion.div
// initial={{ opacity: 0 }}
// animate={{
//   opacity: 1,
//   x: topPosition && sectionNumber % 2 ? 0 : 549,
//   width: sectionNumber === 1 ? width - 80 : 469,
//   top: topPosition + 443.5,
//   translateY: '-50%',
// }}
// transition={{
//   delay: 0.2,
//   ease: 'anticipate',
// }}
// className={`bg-[#10544e] text-white  rounded-3xl p-14 z-10 absolute top-1/2`}
// style={
//   {
//     // width: '469px',
//     // ...(sectionNumber % 2 ? { left: 0 } : { right: 0 }),
//   }
// }
// >
