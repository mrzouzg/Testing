import React from "react";
import { Button, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import DropdownMenuProducts from "./DropdownMenuProducts";
import DropdownMenuSolutions from "./DropdownMenuSolutions";
import DropdownMenuResources from "./DropdownMenuResources";
import { useState } from "react";
import { useAuth } from "@/context";


const Navbar = ({ ...rest }) => {
  
  const {
    isDropdownVisible,
    isDropdownVisible1,
    isDropdownVisible2,
    handleMouseEnter,
    handleMouseEnter1,
    handleMouseEnter2,
    handleMouseLeave,
    handleMouseLeave1,
    handleMouseLeave2,
  } = useAuth();



  return (
    <Flex {...rest}>
      <div className="!flex !flex-row  !mt-8 !bg-gray-200 !p-4 !rounded-full  m-auto h-20 ">
        <div className="!text-xl !flex !flex-row  m-auto !font-bold !space-x-2 mt-1">
          <div>
            <img src="https://clear-link-bay.vercel.app/_next/static/media/logo.671288df.svg" />
          </div>
          <div>ClearLink.</div>
        </div>

        <div className=" justify-center flex flex-row m-auto  sm:space-x-3 md:space-x-4  lg:space-x-5 text-lg mx-4  font-semibold h-[80%] ">
          <div className="App-header">
            <div
              className=" w-32 ml-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                <span className="text-black cursor-pointer">Products </span>
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              {isDropdownVisible && <DropdownMenuProducts />}
            </div>
          </div>

          <div className="App-header">
            <div
              className="w-32"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div className="flex items-center gap-1">
                <span className="text-black cursor-pointer">Solutions </span>
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>

              {isDropdownVisible1 && <DropdownMenuSolutions />}
            </div>
          </div>

          <div className="App-header">
            <div
              className="w-32"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <div className="flex items-center gap-1">
                <span className="text-black cursor-pointer">Resources </span>
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>

              {isDropdownVisible2 && <DropdownMenuResources />}
            </div>
          </div>

          <span className="!mr-4">Pricing</span>
        </div>

        <Box className=" !space-x-2 flex flex-row">
          <Button className="!bg-white !rounded-full  !border-sold !border-gray-400 !border-2 w-[90px] lg:!w-[auto] !text-xs lg:!text-lg">
            Talk to sales
          </Button>
          <Button className="!bg-blue-600 !text-white !rounded-full !hover:bg-blue-500 w-[90px] lg:!w-[auto] !text-xs lg:!text-lg">
            Sign up for free
          </Button>
        </Box>
      </div>
    </Flex>
  );
};

export default Navbar;
