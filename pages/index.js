import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import { NavMobile } from "@/components/NavMobile";
import DropdownMenuProducts from "@/components/DropdownMenuProducts";
import DropdownMenuSolutions from "@/components/DropdownMenuSolutions";
import DropdownMenuResources from "@/components/DropdownMenuResources";

import {
  Container,
  Flex,
  Box,
  Center,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";


import { useAuth } from "@/context";


function Home() {
  const { isOpen, onToggle } = useDisclosure();

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
    <div>
      <Box>
        <NavMobile
          isOpen={isOpen}
          onToggle={onToggle}
          display={{ base: "flex", md: "none" }}
          
        />

        <Navbar display={{ base: "none", md: "flex" }} />
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Center>
          <Flex
            mt={0}
            flexDir="column"
            gap={4}
            alignItems="flex-center"
            bg={"gray.200"}
            w={"100vw"}
            p={"20px"}
            h={"300px"}
          >
            
                     <div className="App-heade flex justify-center relative my-3  ">
            <div
              className="w-32 absolute opacity-100 z-30 "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 ">
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
          <div className="App-heade  flex justify-center relative my-3 ">
            <div
              className="w-32 absolute opacity-100 z-20"
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

          <div className="App-heade  flex justify-center relative my-3">
            <div
              className="w-32 absolute opacity-100 z-10"
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
          <div className=" flex justify-center">
            <span variant="primary" className="w-32 my-3">Pricing</span>
            </div>
            

            <Box className=" space-x-2 flex   justify-center ">
              <Button className="!bg-white !rounded-full  !border-sold !border-gray-200 !border-2 ">
                Talk to sales
              </Button>
              <Button className="!bg-blue-600 !text-white !rounded-full hover:!bg-blue-500">
                Sign up for free
              </Button>
            </Box>
          </Flex>
        </Center>
      </Collapse>
    </div>
  );
}

export default Home;
