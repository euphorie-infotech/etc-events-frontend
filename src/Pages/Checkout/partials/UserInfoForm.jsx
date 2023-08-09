import React, { useState } from "react";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import CartCounter from "../../../components/CartCounter";
import { useForm, Controller } from "react-hook-form";

const UserInfoForm = () => {
  // calender input focus state
  const [isFocused, setIsFocused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();
  const [eventInfo, setEventInfo] = useState();

  // initialize react hook form
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    const { event, ...userInfo } = data;
    const finalData = { ...userInfo, ...eventInfo };
    console.log("data", userInfo);
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
        value: `${item.name} (vol-${item.volume})`,
        label: `${item.name} (vol-${item.volume})`,
      });
    });
  }

  // count ticket
  let tickets = [];
  let purchaseInfo = [];
  const countHandler = (value, index) => {
    // console.log(value, index);
    selectedEvent?.ticket.map((item, itemIndex) => {
      // console.log(item, itemIndex);
      index === itemIndex &&
        purchaseInfo.push({ ...item, purchasedAmount: value }) &&
        console.log("info", purchaseInfo, index, itemIndex);
    });
  };

  return (
    <form action="submit" onSubmit={handleSubmit(onSubmit)}>
      <div className="border p-10 rounded-md flex flex-wrap my-3">
        <h1 className="text-white font-nasalization text-2xl text-left px-1">
          Customer Information
        </h1>
        <div className="basis-1/2 px-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
            {...register("name")}
          />
        </div>
        <div className="basis-1/2 px-1">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
            {...register("email")}
          />
        </div>
        <div className="basis-1/2 px-1">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
            {...register("phone")}
          />
        </div>
        <div className="basis-1/2 px-1">
          <input
            type={isFocused ? "date" : "text"}
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Date of Birth"
            className="w-full bg-transparent font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none my-2"
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              e.target.value === "" && setIsFocused(false);
            }}
            {...register("dateOfBirth")}
          />
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
          {selectedEvent?.ticket.map((ticket, index) => (
            <div className="font-nasalization basis-1/3 px-5" key={ticket.type}>
              <h1 className="border border-white px-5 py-3 rounded-xl cursor-pointer bg-white text-black">
                {ticket.price}
              </h1>
              <h1>{ticket.type}</h1>
              <CartCounter countHandler={countHandler} index={index} />
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="border border-white w-full py-2 rounded-md font-nasalization hover:bg-white hover:text-black transition-all duration-500"
      >
        Confirm Order
      </button>
    </form>
  );
};

export default UserInfoForm;
