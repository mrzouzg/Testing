import { Flex, IconButton, Center, Button, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavbarImageBurger from "./navbarImageBurger";

export const NavMobile = ({ isOpen, onToggle, ...rest }) => {
  return (
    <Flex flexDir="column" {...rest} className=" ">
      {isOpen ? (
        <div className="!flex    w-[100vw] justify-between  bg-gray-200 p-2 pr-5     ">
          <NavbarImageBurger />
          <CloseIcon
            w={5}
            h={5}
            onClick={onToggle}
            className="  hover:origin-center  hover:rotate-45 duration-1000  cursor-pointer  "
          />
        </div>
      ) : (
        <div className="!flex     w-[100vw] justify-between  bg-gray-200 p-2 pr-5   ">
          <NavbarImageBurger />

          <HamburgerIcon
            onClick={onToggle}
            w={7}
            h={7}
            className="cursor-pointer"
          />
        </div>
      )}
    </Flex>
  );
};
