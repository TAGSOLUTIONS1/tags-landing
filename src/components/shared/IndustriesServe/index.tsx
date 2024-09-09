import Clutch from '@/components/svgcomponents/Clutch';
import G2 from '@/components/svgcomponents/G2';
import Upcity from '@/components/svgcomponents/Upcity';

const IndustriesServe: React.FC = () => {
  return (
    <div className="w-full">
      <div className="min-h-[300px] flex flex-col justify-center items-center gap-[45px] my-[75px]">
        <div className="items-center w-[615px]">
          <p className="font-bold text-mainH text-dark-nameclr">
            Industries We Serve
          </p>
          <p className="text-p3 font-normal text-lineHeight-p3 text-center">
            At TAGS, we specialize in providing tailored solutions across
            diverse industries. Whether you&apos;re in manufacturing,
            healthcare, finance, or beyond, our expertise helps drive your
            success by addressing the unique challenges of your sector
          </p>
        </div>
        <div className="w-[525px] h-[48px] flex gap-7 items-center">
          <div className="flex gap-3">
            <Clutch></Clutch>
            <div>
              <div className="flex">
                <p className="text-p2 text-dark-p4 font-semibold ">Clutch/</p>
                <p className="text-p2 text-dark-nameclr font-normal ">
                  4.9 score
                </p>
              </div>
              <p className="text-p2 text-dark-ceoclr font-normal">
                206 reviews
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <G2></G2>
            <div>
              <div className="flex">
                <p className="text-p2 text-dark-p4 font-semibold ">G2</p>
                <p className="text-p2 text-dark-nameclr font-normal ">
                  4.9 score
                </p>
              </div>
              <p className="text-p2 text-dark-ceoclr font-normal">85 reviews</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Upcity></Upcity>
            <div>
              <div className="flex">
                <p className="text-p2 text-dark-p4 font-semibold ">Upcity</p>
                <p className="text-p2 text-dark-nameclr font-normal ">
                  5.0 score
                </p>
              </div>
              <p className="text-p2 text-dark-ceoclr font-normal">61 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServe;
