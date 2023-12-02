'use client';

import BgElements from '@/components/bgElements.component';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import React, { useState } from 'react';

const Portfolio = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <>
      <div className="h-[calc(100vh-148px)]">
        <div className="text-center mb-24">
          {/* <h2 className="text-4xl font-bold mb-4">Portfolio</h2> */}
          <h3>
            Here I will share projects that I have participated in or made
            myself
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#10544e] transition duration-300 ease-in-out text-white rounded-3xl scale-1 hover:scale-125 cursor-pointer">
            <Image
              width={900}
              height={100}
              src={
                'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/ed88531e13c2ce11b191e4cf9f90caf3?response-content-disposition=inline;+filename=%22image_original%22;+filename*=utf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDob8zMzQAwHocJ4dxVhOz%2BaNPVft9CFSSvgMttkru7JAiEAyeRDuavVe5vvaL7btZPC/hcD5vglnbfn8IDbOBO8fAAq1gQIxv//////////ARAAGgw3Mzk5MzkxNzM4MTkiDJOS9piVduB0Tv1NOyqqBPKZyynnQ%2B1kuvMSFt2GgYojhKdeFF4mK%2BBTjkN2xgOFU4vRelo34p4/i8NfiBt6cNS7VRL7hiPskOQUrkzhMKOkwWjzEKiAZ1nocl9ssmfH2LbSnCXCTmpGipLlb94MjSCwkBvXuYHRH4zm/qiTh4cvbCf1Yn5FMmY1wDYM3suEL1YK%2BqOIkvLuvPIAfgsJUDG8GovjVHWtSjh8Z4zuHBYndX1/lvMpfLmnt%2BEgq8OpP9vzpOebPVH1pLypyXOHQecywEFwgyP6YZ5tqnADfEixP8tKTw562UEPJq4lD5Xv%2Bbw8I3xKyJjabob9mTb5btv/ChUfsy7cGO93cb4mEX/VT1jY6QibRg%2BvzrrFtShTseAVfHFNeqRp6gENDIi%2BzZrYmNPu9VuqgaElwA8bkDhcPyAliwayDAtxnmo3w9MM1W5xxLkLWjbFMUszmuCWsLvomQxLMf5wfyZagw2BNbqtwa3jp8JTl8S9Atzv61G3hR91qhlJBsinkPX9/PX9Pex8y5hWALPau8wmu2GmZp4aXLLpkaSdhINjr/0ZYCv/XV37CosznSIjHKcv6aFHuyYYRQPE3gSwJo3pLg698JFhE3W2U/f9nAXZbya66e/8FqYNCRoMOdOS4qhQaWNwZLtDacwWPg3FoX3cqlccwyQ1EjiRgcXOZd3t0DD8aRlotz01dJkDf5H0wLiYPLNpDRReSE1qrvIMc8AnMzsCwVy%2Bz4fWaAUsxImrMK2zmasGOqcBROADxu9Htkeu3bcZb3mA8h0Yer/HFGqFwW8X%2BwXiFNKFxxv8VY878w%2B1eUD8E82DHA3xU6BKtFsG5ATdx9MUoQ46dzY9hZhyruOq1oBWRrvUsACBLUQehtHCk66eFKZyxUI4j8domXFbRNs9LD7rhnfKB4zSHYoQU8pJIUfjuAG9D4lLFxdSAsbzoimmWvL0ajxeHu%2BS5rU93f02T0WfTuoSzmq7rvM=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231128T220415Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5UYNL4POT/20231128/us-west-2/s3/aws4_request&X-Amz-Signature=074307e82ddcc7fbecd0066e8352deaadd15af9ce8d471cbf4f7467bf950b99b'
              }
              alt=""
              className="mb-4"
            />
            <div>
              <h3>Labrador</h3>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
