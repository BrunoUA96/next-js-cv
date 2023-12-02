'use client';
import { onNavbarAnimated } from '@/lib/features/animation/animationSlice';
import { useAppDispatch } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import {
  HiOutlineDocumentDownload,
  HiOutlineExternalLink,
} from 'react-icons/hi';
import Typed from 'react-typed';

const Navbar = () => {
  const dispatch = useAppDispatch();

  const pathname = usePathname();

  const activeClass = 'bg-[#10544e] text-white';

  const [animation, setAnimation] = useState(false);

  return (
    <motion.header
      initial={{ height: '100vh', margin: 0 }}
      animate={{ height: 'auto', marginTop: 16, marginBottom: 16 }}
      transition={{
        duration: 0.6,
        delay: 7.4,
      }}
      onAnimationComplete={() => setAnimation(true)}
      className="flex flex-col text-center"
    >
      <Link href={'/'} className="font-bold spac text-xl tracking-wide my-auto">
        {'<'}
        <Typed
          strings={['Hello', 'Nice to meet you', 'Portfolio']}
          typeSpeed={110}
          backSpeed={50}
        />
        {'/>'}
      </Link>

      {animation && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{
            duration: 0.6,
          }}
          onAnimationComplete={() => dispatch(onNavbarAnimated(true))}
          className="flex justify-center items-center gap-4 mt-5"
        >
          <Link
            href={'/'}
            className={`px-2 y-1 ${pathname === '/' ? activeClass : ''}`}
          >
            <Typed
              strings={['Home']}
              typeSpeed={110}
              backSpeed={50}
              showCursor={false}
            />
          </Link>
          <Link
            href={'portfolio'}
            className={`px-2 y-1 ${
              pathname === '/portfolio' ? activeClass : ''
            }`}
          >
            <Typed
              strings={['Portfolio']}
              typeSpeed={110}
              backSpeed={50}
              showCursor={false}
            />
          </Link>
          <Link
            href={'/blog'}
            className={`px-2 y-1 ${pathname === '/blog' ? activeClass : ''}`}
          >
            <Typed
              strings={['Blog']}
              typeSpeed={110}
              backSpeed={50}
              showCursor={false}
            />
          </Link>
          <div className="border-2 border-[#10544e] flex gap-4 px-3 py-2 bg-white">
            <a
              href="https://github.com/BrunoUA96"
              target="new"
              className="flex items-center gap-2"
            >
              GitHub
              <HiOutlineExternalLink />
            </a>
            <a
              href="https://www.linkedin.com/in/ostap-klysa-425237108/"
              target="new"
              className="flex items-center gap-2"
            >
              LinkedIn
              <HiOutlineExternalLink />
            </a>
            <a download className="flex items-center gap-2">
              Download CV
              <HiOutlineDocumentDownload />
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
