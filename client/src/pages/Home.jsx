import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';
import logo from "../assets/logo-eazy_mockup.png"

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home"
          {...slideAnimation('left')}
        >
          <motion.header {...slideAnimation('down')}>
            <img
              src={logo}
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div
            className="home-content"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Eazy <br className="xl:block hidden" /> Mock Up.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Ciptakan kaos unik dan eksklusif dengan alat kostumisasi 3D kami.{" "}
                <strong>Bebaskan imajinasimu</strong> dan wujudkan gaya khasmu dengan Eazy Mock Up.
              </p>

              <CustomButton
                type="filled"
                title="Kustomisasi"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
