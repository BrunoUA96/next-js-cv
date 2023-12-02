'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import BgElements from '@/components/bgElements.component';
import Banner from '@/components/home/banner';

const Home = () => {
  const dispatch = useAppDispatch();
  const [showBanner, setShowBanner] = useState(false);

  // dispatch(decrement())

  // const count = useAppSelector((state) => state.counterReducer.value);

  return (
    <>
      <Banner />

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
