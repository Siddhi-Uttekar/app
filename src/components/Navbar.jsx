import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  FaChevronDown,
  FaCalendarAlt,
  FaVideo,
  FaComments,
  FaUserFriends,
  FaClipboardList,
  FaUserGraduate,
} from "react-icons/fa";

export default function CustomNavbar() {
  const icons = {
    chevron: <FaChevronDown fill="currentColor" size={16} />,
    calendar: <FaCalendarAlt className="text-warning" size={30} />,
    video: <FaVideo className="text-primary" size={30} />,
    chat: <FaComments className="text-secondary" size={30} />,
    mentors: <FaUserFriends className="text-success" size={30} />,
    mentees: <FaUserGraduate className="text-danger" size={30} />,
    booking: <FaClipboardList className="text-success" size={30} />,
  };

  return (
    <>
      <div className="w-full h-1.5 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]" />
      <Navbar isBordered shouldHideOnScroll className="bg-[#F8F7F2] text-xl">
        <NavbarBrand>
          <p className="font-extrabold text-inherit text-2xl">MentorConnect</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="MentorConnect features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="mentor_matching"
                description="Connect with industry leaders and subject matter experts for career guidance."
                startContent={icons.mentors}
              >
                Mentor Matching
              </DropdownItem>
              <DropdownItem
                key="calendar_booking"
                description="Automate your meeting schedules with our integrated calendar booking system."
                startContent={icons.calendar}
              >
                Calendar Booking
              </DropdownItem>
              <DropdownItem
                key="video_calls"
                description="Facilitate virtual meetings with embedded secure video calls."
                startContent={icons.video}
              >
                Video Calls
              </DropdownItem>
              <DropdownItem
                key="chat_support"
                description="Stay connected with mentors and mentees via our in-app chat support."
                startContent={icons.chat}
              >
                Chat Support
              </DropdownItem>
              <DropdownItem
                key="booking_management"
                description="Manage your appointments and session history with ease."
                startContent={icons.booking}
              >
                Booking Management
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Mentors
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Mentees
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex bg-transparent rounded-lg border border-solid text-black py-3 px-5">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              className="bg-black rounded-lg text-white font-bold p-6 text-md"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
