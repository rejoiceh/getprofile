import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <SectionTitle>About Me</SectionTitle>

          <p className="text-justify">
            Hi! I'm Rejoice Hu, a recent <b>Master's</b> graduate in Information Science with a focus on Machine Learning from <b>Cornell University</b>.
          </p>
          <br />
          <p className="text-justify">My experience spans <b>ML/Data Science/GenAI</b> roles through working, internship, and research positions at Morgan Stanley, Ecolab, Credibly, and more.
          </p>
          <br />
          <p className="text-justify">I'm eager to find a <b>full-time role</b> where I can leverage my skills to tackle real-world challenges and deliver meaningful value to users. I am passionate about driving innovation and continuously seeking opportunities to apply my expertise in impactful ways.
          </p>
          <br />
          <p className="text-justify">
            <b>Let's connect and explore how I can contribute to your team!</b>
          </p>
          <Link href="https://drive.google.com/file/d/186dzx3x3P2li9JsoyU477m6kz0_Nt5XB/view?usp=sharing">
            <a className="btn mt-5">Resume</a>
          </Link>
        </div>


        {/* Skills */}
        <div>
          <SectionTitle>Skills</SectionTitle>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4">

            <div className="">
              <h5 className="font-semibold">Languages</h5>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-amber-500 text-[13px] font-normal">Python</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-amber-500 text-[13px] font-normal">Javascript</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-amber-500 text-[13px] font-normal">SQL</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-amber-500 text-[13px] font-normal">Java</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-amber-500 text-[13px] font-normal">C#</p>
            </div>

            <div className="">
              <h5 className="font-semibold">Technologies</h5>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-green-500 text-[13px] font-normal">Jupyter Notebook</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-green-500 text-[13px] font-normal">Docker</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-green-500 text-[13px] font-normal">AWS</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-green-500 text-[13px] font-normal">Git</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-green-500 text-[13px] font-normal">Agile</p>
            </div>
            <div className="">
              <h5 className="font-semibold">Machine Learning</h5>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-rose-500 text-[13px] font-normal">Statistical Modeling</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-rose-500 text-[13px] font-normal">Deep Learning</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-rose-500 text-[13px] font-normal">Regression</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-rose-500 text-[13px] font-normal">Clustering</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-rose-500 text-[13px] font-normal">Regularization</p>
            </div>
            <div className="">
              <h5 className="font-semibold">Packages</h5>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-blue-500 text-[13px] font-normal">Pandas</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-blue-500 text-[13px] font-normal">NumPy</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-blue-500 text-[13px] font-normal">Scikit-Learn</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-blue-500 text-[13px] font-normal">SciPy</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-blue-500 text-[13px] font-normal">Matplotlib</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-blue-500 text-[13px] font-normal">PyTorch</p>
              <p className="btn mt-5 mr-2 px-3 py-1 bg-blue-500 text-[13px] font-normal">TensorFlow</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
