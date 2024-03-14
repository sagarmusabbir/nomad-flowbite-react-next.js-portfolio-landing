import { Badge, Button } from "flowbite-react";
import type { FC } from "react";
import { gray, pink, purple } from "tailwindcss/colors";
import { Boilerplate, Elementor, Ghost, Hugo, Next, Wordpress } from "./icons";

const GridLayoutImageCTAPreviewProjectPortfolio: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Browse top open source projects developed by Third Bracket
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg"
              alt=""
            />
            <img
              className="object-cover w-full rounded-lg shadow-lg hidden dark:block mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg"
              alt=""
            />
            <div className="space-y-3 mb-6">
              <Badge className="w-fit" color="gray">
                <Elementor className="w-4 h-4" />
                Elementor Template
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Agency Landing Page
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                href="#"
                color="dark"
                theme={{
                  color: {
                    dark: "bg-neon-slatedark  text-white focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatelightmd dark:text-neon-slatedarkest border dark:border-slatelight border-slatedark  focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
              >
                Case study
              </Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "text-neon-slatedarker bg-white border border-neon-slatelightmd hover:bg-gray-50 hover:text-primary-600 focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatedarker  dark:border-primary-600 dark:text-white dark:hover:bg-slate-700 focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool.jpg"
              alt=""
            />
            <img
              className="object-cover w-full rounded-lg shadow-lg mb-6 dark:block hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool-dark.jpg"
              alt=""
            />
            <div className="space-y-3 mb-6">
              <Badge color="gray" className="w-fit">
                <Hugo className="w-4 h-4" />
                Hugo Theme
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Eventually
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                href="#"
                color="dark"
                theme={{
                  color: {
                    dark: "bg-neon-slatedark  text-white focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatelightmd dark:text-neon-slatedarkest border dark:border-slatelight border-slatedark  focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
              >
                Case study
              </Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "text-neon-slatedarker bg-white border border-neon-slatelightmd hover:bg-gray-50 hover:text-primary-600 focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatedarker  dark:border-primary-600 dark:text-white dark:hover:bg-slate-700 focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management.jpg"
              alt=""
            />
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management-dark.jpg"
              alt=""
            />
            <div className="space-y-3 mb-6">
              <Badge className="w-fit" color="gray">
                <Next className="w-4 h-4" />
                Next.js Starter
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Task management system
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                href="#"
                color="dark"
                theme={{
                  color: {
                    dark: "bg-neon-slatedark  text-white focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatelightmd dark:text-neon-slatedarkest border dark:border-slatelight border-slatedark  focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
              >
                Case study
              </Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "text-neon-slatedarker bg-white border border-neon-slatelightmd hover:bg-gray-50 hover:text-primary-600 focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatedarker  dark:border-primary-600 dark:text-white dark:hover:bg-slate-700 focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-lg shadow-lg mb-6 dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg"
              alt=""
            />
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg"
              alt=""
            />
            <div className="space-y-3 mb-6">
              <Badge color="gray" className="w-fit">
                <Ghost className="w-4 h-4 " />
                Ghost Theme
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Flowbite's dashboard
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                href="#"
                color="dark"
                theme={{
                  color: {
                    dark: "bg-neon-slatedark  text-white focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatelightmd dark:text-neon-slatedarkest border dark:border-slatelight border-slatedark  focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
              >
                Case study
              </Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "text-neon-slatedarker bg-white border border-neon-slatelightmd hover:bg-gray-50 hover:text-primary-600 focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatedarker  dark:border-primary-600 dark:text-white dark:hover:bg-slate-700 focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo.jpg"
              alt=""
            />
            <img
              className="object-cover w-full rounded-lg shadow-lg mb-6 dark:block hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg"
              alt=""
            />
            <div className="space-y-3 mb-6">
              <Badge color="gray" className="w-fit">
                <Wordpress className="w-4 h-4" />
                Wordpress Theme
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  NGO Landing Page
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                href="#"
                color="dark"
                theme={{
                  color: {
                    dark: "bg-neon-slatedark  text-white focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatelightmd dark:text-neon-slatedarkest border dark:border-slatelight border-slatedark  focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
              >
                Case study
              </Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "text-neon-slatedarker bg-white border border-neon-slatelightmd hover:bg-gray-50 hover:text-primary-600 focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatedarker  dark:border-primary-600 dark:text-white dark:hover:bg-slate-700 focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg"
              alt=""
            />
            <img
              className="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg"
              alt=""
            />
            <div className="space-y-3 mb-6">
              <Badge color="gray" className="w-fit">
                <Boilerplate className="h-4 w-4" />
                React Boilerplate
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Mail management system
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                href="#"
                color="dark"
                theme={{
                  color: {
                    dark: "bg-neon-slatedark  text-white focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatelightmd dark:text-neon-slatedarkest border dark:border-slatelight border-slatedark  focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
              >
                Case study
              </Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "text-neon-slatedarker bg-white border border-neon-slatelightmd hover:bg-gray-50 hover:text-primary-600 focus:ring-primary-700 focus:text-primary-700 dark:bg-neon-slatedarker  dark:border-primary-600 dark:text-white dark:hover:bg-slate-700 focus:ring-2",
                  },
                  inner: { base: "flex items-stretch transition-0" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridLayoutImageCTAPreviewProjectPortfolio;
