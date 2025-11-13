import React from "react";
import Banner from "../../components/Banner";
import Footer from "../Footer/Footer";
import {
  FaSearch,
  FaDownload,
  FaShareAlt,
  FaSmile,
  FaRocket,
  FaLock,
  FaUsers,
  FaBrain,
  FaLanguage,
  FaChartBar,
  FaMicrophone,
  FaCheck,
} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="">
        {/* About AI Models */}
        <div className="About-AI-Models-section rounded-2xl py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900 px-2 xs:px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  What are AI Models?
                </h2>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Artificial Intelligence models are sophisticated algorithms
                  trained on vast amounts of data to perform specific tasks.
                  From natural language processing to computer vision, AI models
                  power innovations across industries.
                </p>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Our platform provides access to cutting-edge pre-trained
                  models that you can download, customize, and integrate into
                  your projects instantly. No need to train from
                  scratch—leverage existing expertise and accelerate your
                  development.
                </p>

                {/* Key Points */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-1 text-sm">
                      <FaCheck className="text-xs" />
                    </div>
                    <div>
                      <p className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        Pre-trained & Ready to Use
                      </p>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        Immediately deployable models
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1 text-sm">
                      <FaCheck className="text-xs" />
                    </div>
                    <div>
                      <p className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        Multiple Frameworks
                      </p>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        TensorFlow, PyTorch, and more
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 mt-1 text-sm">
                      <FaCheck className="text-xs" />
                    </div>
                    <div>
                      <p className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        Extensive Documentation
                      </p>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        Complete guides and examples
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Feature Showcase */}
              <div className="space-y-4">
                <div className="bg-linear-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-200 dark:border-indigo-700">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBrain className="text-indigo-600 text-xl sm:text-2xl" />
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      Computer Vision
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    Image recognition, object detection, and segmentation
                    models.
                  </p>
                </div>

                <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-2">
                    <FaLanguage className="text-blue-600 text-xl sm:text-2xl" />
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      Natural Language Processing
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    Text generation, sentiment analysis, and language
                    translation.
                  </p>
                </div>

                <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-3 mb-2">
                    <FaChartBar className="text-green-600 text-xl sm:text-2xl" />
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      Data & Analytics
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    Predictive analytics and pattern recognition models.
                  </p>
                </div>

                <div className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMicrophone className="text-purple-600 text-xl sm:text-2xl" />
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      Audio & Speech
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    Speech recognition and audio processing models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className=" Works-Section rounded-2xl py-8 sm:my-12 md:my-16 lg:my-20 bg-linear-to-b from-white to-gray-50 px-2 xs:px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                How It Works
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Discover, download, and manage AI models effortlessly. Our
                platform simplifies the entire process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 group">
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-indigo-100 to-indigo-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaSearch className="text-indigo-600 text-2xl sm:text-3xl" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Discover Models
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Browse through our extensive collection of AI models across
                  various categories and use cases.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-blue-100 to-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaDownload className="text-blue-600 text-2xl sm:text-3xl" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Download & Use
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Download your preferred models with a single click and start
                  using them in your projects.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group sm:col-span-2 lg:col-span-1">
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-purple-100 to-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaShareAlt className="text-purple-600 text-2xl sm:text-3xl" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Share & Collaborate
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Share your AI models with the community and collaborate with
                  other developers globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="Features-Section rounded-tl-2xl rounded-tr-2xl py-8 sm:py-12 md:py-16 lg:py-20 bg-white px-2 xs:px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Choose Us?
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                We provide the most comprehensive AI model management platform
                for developers and researchers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Feature 1 */}
              <div className="bg-linear-to-br from-indigo-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-indigo-200 transition-colors">
                  <FaSmile className="text-indigo-600 text-xl sm:text-2xl" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Easy to Use
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Intuitive interface designed for both beginners and experts.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-linear-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                  <FaRocket className="text-blue-600 text-xl sm:text-2xl" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Fast & Reliable
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Lightning-fast downloads and 99.9% uptime guarantee.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-linear-to-br from-green-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-200 transition-colors">
                  <FaLock className="text-green-600 text-xl sm:text-2xl" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Secure Storage
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Your models are encrypted and securely stored in the cloud.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-linear-to-br from-purple-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                  <FaUsers className="text-purple-600 text-xl sm:text-2xl" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Community Driven
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Join thousands of developers sharing and discovering models.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="Get-Started py-12 sm:py-16 md:py-20 bg-linear-to-r from-indigo-600 to-blue-500 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get Started Managing AI Models Today
            </h2>
            <p className="text-indigo-100 mb-6 text-lg max-w-2xl mx-auto">
              Join thousands of developers building with AI. Create your account
              and start managing, downloading, and sharing cutting-edge AI
              models.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 border border-white/20">
              <p className="text-white mb-6 text-base sm:text-lg">
                Get access to our extensive AI model library, collaborate with
                the community, and manage all your projects in one place.
              </p>
              <ul className="text-left max-w-md mx-auto space-y-3 mb-6">
                <li className="flex items-center gap-3 text-indigo-50">
                  <FaCheck className="text-green-300" />
                  <span>Upload and share your own AI models</span>
                </li>
                <li className="flex items-center gap-3 text-indigo-50">
                  <FaCheck className="text-green-300" />
                  <span>Download pre-trained models instantly</span>
                </li>
                <li className="flex items-center gap-3 text-indigo-50">
                  <FaCheck className="text-green-300" />
                  <span>Connect and collaborate with developers worldwide</span>
                </li>
                <li className="flex items-center gap-3 text-indigo-50">
                  <FaCheck className="text-green-300" />
                  <span>Secure cloud storage for all your models</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn rounded-full bg-white text-indigo-600 hover:bg-white/20 hover:text-white hover:shadow-xl px-8 py-3 font-semibold text-base sm:text-lg transition-all duration-300">
                Register Now
              </button>
              <button className="btn rounded-full border-2 border-white text-indigo-600 hover:bg-white/20 hover:text-white hover:shadow-xl px-8 py-3 font-semibold text-base sm:text-lg transition-all duration-300">
                Sign In
              </button>
            </div>

            <p className="text-indigo-100 text-sm sm:text-base mt-6">
              Already have an account? You can sign in above to access your
              models and continue where you left off.
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
