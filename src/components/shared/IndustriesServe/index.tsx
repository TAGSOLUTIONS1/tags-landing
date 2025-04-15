import Clutch from '@/components/svg/Clutch';
import G2 from '@/components/svg/G2';
import Upcity from '@/components/svg/Upcity';

const IndustriesServe: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-8 -mt-12">
      <div className="min-h-[300px] flex flex-col justify-center items-center gap-10 my-10">
        <div className="text-center max-w-[90%] md:max-w-[615px] mx-auto mt-10">
          <p className="font-bold text-hh8 md:text-hh10 text-dark-nameclr">
            Industries We Serve
          </p>
          <p className="text-hh3 sm:text-hh4 font-normal text-lineHeight-p3 mt-4">
            At TAGS, we specialize in providing tailored solutions across
            diverse industries. Whether you're in manufacturing, healthcare,
            finance, or beyond, our expertise helps drive your success by
            addressing the unique challenges of your sector.
          </p>
        </div>

        <div className="w-full max-w-[600px] flex flex-col sm:flex-row sm:justify-center gap-6 sm:gap-8 mt-4">
          {/* Clutch */}
          <div className="flex items-center gap-3">
            <Clutch />
            <div>
              <div className="flex items-center">
                <p className="text-p2 text-dark-p4 font-semibold mr-1">
                  Clutch/
                </p>
                <p className="text-p2 text-dark-nameclr font-normal">
                  4.9 score
                </p>
              </div>
              <p className="text-p2 text-dark-ceoclr font-normal">
                206 reviews
              </p>
            </div>
          </div>

          {/* G2 */}
          <div className="flex items-center gap-3">
            <G2 />
            <div>
              <div className="flex items-center">
                <p className="text-p2 text-dark-p4 font-semibold mr-1">G2/</p>
                <p className="text-p2 text-dark-nameclr font-normal">
                  4.9 score
                </p>
              </div>
              <p className="text-p2 text-dark-ceoclr font-normal">85 reviews</p>
            </div>
          </div>

          {/* Upcity */}
          <div className="flex items-center gap-3">
            <Upcity />
            <div>
              <div className="flex items-center">
                <p className="text-p2 text-dark-p4 font-semibold mr-1">
                  Upcity/
                </p>
                <p className="text-p2 text-dark-nameclr font-normal">
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
