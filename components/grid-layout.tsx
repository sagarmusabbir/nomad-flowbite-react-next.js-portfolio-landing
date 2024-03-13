import { Badge, Button } from "flowbite-react";
import type { FC } from "react";
import { gray } from "tailwindcss/colors";

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
              <Badge color="gray" className="w-fit">
                {/* <svg
                  aria-hidden="true"
                  className="w-3 h-3 mr-1 mb-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <svg
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 11 11 L 11 21 L 13 21 L 13 11 L 11 11 z M 15 11 L 15 13 L 21 13 L 21 11 L 15 11 z M 15 15 L 15 17 L 21 17 L 21 15 L 15 15 z M 15 19 L 15 21 L 21 21 L 21 19 L 15 19 z" />
                </svg>
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
                {/* <svg
                  aria-hidden="true"
                  className="w-3 h-3 mb-1 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 mt-1"
                  role="img"
                  viewBox="0 0 24 24"
                  version="1.1"
                  // width="32"
                  // height="32"
                  id="svg1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <defs id="defs1" />
                  <title id="title1">Hugo</title>
                  <path
                    d="M 11.754,0 A 3.998,3.998 0 0 0 9.705,0.596 L 3.33,4.532 A 4.252,4.252 0 0 0 1.313,8.147 v 8.03 c 0,1.473 0.79,2.838 2.067,3.574 l 6.486,3.733 a 3.88,3.88 0 0 0 3.835,0.018 l 7.043,-3.966 a 3.817,3.817 0 0 0 1.943,-3.323 V 7.752 A 3.57,3.57 0 0 0 20.913,4.668 L 13.817,0.541 a 3.998,3.998 0 0 0 -2.063,-0.54 z m 0.022,1.674 c 0.413,-0.006 0.828,0.1 1.2,0.315 l 7.095,4.127 c 0.584,0.34 0.941,0.96 0.94,1.635 v 8.462 c 0,0.774 -0.414,1.484 -1.089,1.864 l -7.042,3.966 a 2.199,2.199 0 0 1 -2.179,-0.01 L 4.216,18.299 A 2.447,2.447 0 0 1 2.988,16.176 v -8.03 c 0,-0.893 0.461,-1.72 1.221,-2.19 l 6.376,-3.935 a 2.323,2.323 0 0 1 1.19,-0.347 z m -4.7,3.844 V 18.37 h 2.69 v -5.62 h 4.46 v 5.62 h 2.696 V 5.518 h -2.696 v 4.681 H 9.766 V 5.518 Z"
                    id="path1"
                  />
                </svg>
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
                {/* <svg
                  aria-hidden="true"
                  className="w-3 h-3 mb-1 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <svg
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-3 h-3 mt-1 "
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z" />
                </svg>
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
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 mr-1 mb-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Figma design
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
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 mr-1 mb-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Figma design
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
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 mb-1 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Front-end
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
