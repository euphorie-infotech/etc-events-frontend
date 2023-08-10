import React, { useState } from "react";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import CartCounter from "../../../components/CartCounter";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserInfoForm = () => {
  // calender input focus state
  const [isFocused, setIsFocused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  // initialize react hook form
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  // submit handler
  const onSubmit = (data) => {
    const { ticket, ...eventInfo } = selectedEvent;
    const eventData = { ...data, ...eventInfo, ticket: ticketArray };
    console.log("data", eventData);
    setIsChecked(false);
    setSelectedEvent();
    reset();
  };

  // fetching data using usequery
  const getUpcomingEvents = () => {
    return getApiData("upcomingEvents");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["upcoming-events"],
    getUpcomingEvents
  );

  if (isLoading) {
    return "Loading please wait";
  }

  if (isError) {
    return error.message;
  }

  // changing custom styles for react select component
  const styles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      fontFamily: ["Nasalization", "sans - serif"],
      color: "white",
      width: "100%",
      border: "white 1px solid",
      borderRadius: "8px",
    }),
    option: (styles) => ({
      ...styles,
      fontFamily: ["Nasalization", "sans - serif"],
      color: "black",
      backgroundColor: "transparent",
    }),
  };

  // on selecting an event, to show the ticket option

  const handleChange = (e) => {
    setSelectedEvent(e);
  };

  // creating options array from the data to use as select options

  const options = [];
  {
    data.map((item) => {
      options.push({
        ...item,
        value: `${item.eventName} (vol-${item.eventVolume})`,
        label: `${item.eventName} (vol-${item.eventVolume})`,
      });
    });
  }

  // ticket count
  const ticketArray = [];
  const countHandler = (value) => {
    // console.log("from parent", value.id);
    selectedEvent?.ticket.filter(
      (item, index) =>
        item.id === value.id &&
        (ticketArray[index] = { ...item, ticketCount: value.ticketCount })
    );
    // console.log("ticketarray", ticketArray);
  };

  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <div className="border p-10 rounded-md flex flex-wrap">
        <h1 className="text-white font-nasalization text-2xl text-left px-1">
          Customer Information
        </h1>
        <div className="basis-1/2 px-1 my-2 text-left">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none"
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-600 font-nasalization text-xs font-thin">
              **This field is required**
            </span>
          )}
        </div>
        <div className="basis-1/2 px-1 my-2 text-left">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-600 font-nasalization text-xs font-thin">
              **This field is required**
            </span>
          )}
        </div>
        <div className="basis-1/2 px-1 my-2 text-left">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none"
            {...register("phone", { required: true })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <span className="text-red-600 font-nasalization text-xs font-thin">
              **This field is required**
            </span>
          )}
        </div>
        <div className="basis-1/2 px-1 my-2 text-left">
          <input
            type={isFocused ? "date" : "text"}
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Date of Birth"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              e.target.value === "" && setIsFocused(false);
            }}
            {...register("dateOfBirth", { required: true })}
          />
          {errors.dateOfBirth && errors.dateOfBirth.type === "required" && (
            <span className="text-red-600 font-nasalization text-xs font-thin">
              **This field is required**
            </span>
          )}
        </div>
        <div className="basis-full px-1">
          <Select
            options={options}
            styles={styles}
            placeholder={
              <span className="font-nasalization">Choose Event</span>
            }
            onChange={(e) => handleChange(e)}
            className="w-full my-2"
          />
        </div>
        <div className="w-full flex mt-3">
          {selectedEvent?.ticket.map((ticket) => (
            <div className="font-nasalization basis-1/3 px-5" key={ticket.type}>
              <h1 className="border border-white px-5 py-3 rounded-xl cursor-pointer bg-white text-black">
                {ticket.price}
              </h1>
              <h1>{ticket.type}</h1>
              <CartCounter ticketInfo={ticket} clickHandler={countHandler} />
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-xs mb-3 text-left mt-1 flex items-center">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          className="mr-2"
          checked={isChecked}
          onChange={(e) =>
            e.target.checked === true ? setIsChecked(true) : setIsChecked(false)
          }
        />
        I have read and agree to ETC Event Ltd's{" "}
        <span
          className="mx-1 font-nasalization cursor-pointer underline"
          onClick={() => navigate("/terms-conditions")}
        >
          Terms & Conditions
        </span>
        ,{" "}
        <span
          className="mx-1 font-nasalization cursor-pointer underline"
          onClick={() => navigate("/privacy-policy")}
        >
          Privacy Policy
        </span>{" "}
        and{" "}
        <span
          className="mx-1 font-nasalization cursor-pointer underline"
          onClick={() => navigate("/return-refund")}
        >
          Return & Refund Policy
        </span>
        .
      </h1>
      <button
        type="submit"
        className="border border-white w-full py-2 rounded-md font-nasalization hover:bg-white hover:text-black transition-all duration-500 disabled:border-gray-600 disabled:text-gray-600 disabled:hover:bg-transparent"
        disabled={isChecked === false ? true : false}
      >
        Confirm Order
      </button>
    </form>
  );
};

export default UserInfoForm;
