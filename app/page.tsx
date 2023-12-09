'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useDebounce } from 'use-debounce';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { onScrollChange } from '@/lib/features/banner/bannerSlice';
import { Box, ContentBox } from '@/components/box';
import Banner from '@/components/home/banner';
import Image from 'next/image';
import bannerGif from '../public/dog.gif';

const SnapParent = React.forwardRef(
  (
    {
      children,
      style,
    }: { children: React.ReactNode; style: React.CSSProperties },
    ref
  ) => (
    <div ref={ref} style={style} className="snap-parent-y-mandatory">
      {children}
    </div>
  )
);

SnapParent.displayName = 'SnapParent';

const Container = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: ref });
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollYValue(latest);
  });

  const [scrollYValue, setScrollYValue] = useState(0);

  const dispatch = useAppDispatch();

  const [value] = useDebounce(scrollYValue, 600);

  useEffect(() => {
    dispatch(onScrollChange([value, ref.current?.clientWidth!]));
  }, [value]);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      ></div>

      <SnapParent
        ref={ref}
        style={{
          position: 'absolute',
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};

function ScrollSample() {
  return (
    <>
      <Container>
        <Banner />
        <Box count={1} full color="255 255 255">
          <Image src={bannerGif} alt="funny dog gif" />
        </Box>
        <Box count={2} full transLeft contentCenter color="197 233 155">
          <Image src={bannerGif} alt="funny dog gif" />
        </Box>
        <Box count={3} full color="132 177 237">
          Box 3 (full)
        </Box>
        <Box count={4} full color="103 213 181">
          Box 4 (half)
        </Box>
        <Box full color="253 214 146">
          Box 5 (full)
        </Box>
        <ContentBox color="white"></ContentBox>
        <Box full color="132 177 237">
          Box 6 (full)
        </Box>
      </Container>
    </>
  );
}

const Home = () => {
  const navBarAnimated = useAppSelector(
    (state) => state.animation.navbarIsAnimated
  );

  return (
    <>
      {navBarAnimated && <ScrollSample />}
      {/* <Banner /> */}

      {/* <section
        className={` h-[calc(100vh-148px)] flex flex-col items-center justify-center`}
      >
        <div className="text-center">
          <Title>About me</Title>

          <p className="font-light text-lg">
            Passionate developer offering 5+ years of experience, strong sense
            of web design and commitment to the user experience, including the
            accessibility. Working on wide range of project types, from landing
            pages to large platforms. Fast adaptation to new Technologies,
            Frameworks and Program Languages. Comfortable with working with code
            written by others, and development from scratch. Excellent
            communication skills and great collaborator.
          </p>
        </div>
      </section> */}
    </>
  );
};

export default Home;
