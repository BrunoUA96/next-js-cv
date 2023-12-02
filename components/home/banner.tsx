'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import Title from '../title.component';
import { useAppSelector } from '@/lib/hooks';

const Banner = () => {
  // Check if navbar is already animated
  const navbarIsAnimated = useAppSelector(
    (state) => state.animation.navbarIsAnimated
  );

  return (
    <>
      {navbarIsAnimated && (
        <div className="h-[calc(100vh-148px)] grid grid-cols-4 gap-2 relative">
          <div className="col-span-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: '-100' }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#10544e] text-white rounded-3xl p-14 z-10"
            >
              <h1 hidden>Ostap Klysa Frontend Developer</h1>
              <h2 className="font-bold text-6xl mb-9">
                Hi, I`m <br /> Ostap
                <br />
                <span className="text-lg">
                  Front-End Developer from Porto :)
                </span>
              </h2>
              <h3 className="text-xl mb-8">
                Welcome to my personal site <br /> You can check my Portfolio
                <br />
                with the link below
              </h3>
              <div>
                <Link
                  href={'/portfolio'}
                  className="bg-white text-black px-4 py-3 inline-block rounded-full"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="col-span-2 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: '100' }}
              animate={{ opacity: 1, x: -100 }}
              className="text-center bg-[#10544ecd] text-white rounded-3xl p-14"
            >
              <Title>About me</Title>

              <p className="font-light text-lg">
                Passionate developer offering 5+ years of experience, strong
                sense of web design and commitment to the user experience,
                including the accessibility. Working on wide range of project
                types, from landing pages to large platforms. Fast adaptation to
                new Technologies, Frameworks and Program Languages. Comfortable
                with working with code written by others, and development from
                scratch. Excellent communication skills and great collaborator.
              </p>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
