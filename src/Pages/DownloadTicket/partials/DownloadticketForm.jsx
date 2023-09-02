import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getApiData, postApiData } from "../../../Services/apiFunctions";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Select from "react-select";

const DownloadticketForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();
  const [errorMeassage, setErrorMessage] = useState();

  const queryClient = useQueryClient();

  // initialize react hook form
  const form = useForm();
  const { register, control, handleSubmit, reset, formState } = form;
  const { errors } = formState;

  // submit handler
  const onSubmit = (data) => {
    console.log("data", data);
    mutate(data);
    // setSelectedEvent();
    // reset();
  };

  //   post data

  const showError = (errorText) => {
    setErrorMessage(errorText);
  };

  const postVerificationInfo = (data) => {
    return postApiData("verify-info", data, showError);
  };

  const { mutate } = useMutation(postVerificationInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["upcoming-event"]);
    },
  });

  // fetching data using usequery
  const getUpcomingEvents = () => {
    return getApiData("upcoming-event");
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

  // on selecting an event, to show the ticket option

  const handleChange = (e) => {
    setSelectedEvent(e);
  };

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

  // creating options array from the data to use as select options

  const options = [];
  {
    data.upcomingEvents.map((item) => {
      options.push({
        ...item,
        value: `${item.eventName} (vol-${item.eventVolume})`,
        label: `${item.eventName} (vol-${item.eventVolume})`,
      });
    });
  }
  return (
    <div className="p-2">
      <form
        action="submit"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border p-4 xl:p-10 rounded-md text-center">
          <h1 className="text-white font-nasalization text-2xl px-1">
            Please provide your information for verification
          </h1>
          <div className=" flex flex-wrap">
            {/* <div className="basis-full lg:basis-1/2  px-1 my-2 text-left">
              <input
                // autoComplete={"" + Math.random()}
                type="text"
                name="name"
                id="name"
                placeholder="enter the name you used while purchasing"
                className="w-full bg-transparent text-white font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization 
                 focus-within:outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="text-red-600 font-nasalization text-xs font-thin">
                  **This field is required**
                </span>
              )}
            </div> */}
            <div className="basis-full lg:basis-1/2  px-1 my-2 text-left">
              <input
                // autoComplete={"" + Math.random()}
                type="text"
                name="email"
                id="email"
                placeholder="email used while purchasing"
                className="w-full bg-transparent text-white font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="text-red-600 font-nasalization text-xs font-thin">
                  **This field is required**
                </span>
              )}
            </div>
            <div className="basis-full lg:basis-1/2  px-1 my-2 text-left">
              <input
                // autoComplete={"" + Math.random()}
                type="tel"
                name="phone"
                id="phone"
                placeholder="phone number used while purchasing"
                className="w-full bg-transparent text-white font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none"
                {...register("phone", { required: true })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <span className="text-red-600 font-nasalization text-xs font-thin">
                  **This field is required**
                </span>
              )}
            </div>
            <div className="basis-full lg:basis-1/2  px-1 my-2 text-left">
              <input
                // autoComplete={"" + Math.random()}
                type={isFocused ? "date" : "text"}
                name="dateOfBirth"
                id="dateOfBirth"
                placeholder="date of birth used while purchasing"
                className="w-full bg-transparent text-white font-nasalization rounded-lg border border-white py-1 px-3 placeholder:font-nasalization focus-within:outline-none"
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
            <div className="basis-full lg:basis-1/2  px-1">
              <Select
                options={options}
                styles={styles}
                placeholder={
                  <span className="font-nasalization">Choose the Event</span>
                }
                onChange={(e) => handleChange(e)}
                className="w-full my-2"
              />
            </div>
          </div>

          {errorMeassage && (
            <p className="text-red-400 font-nasalization text-xs mb-3">{`**${errorMeassage}`}</p>
          )}

          <button
            type="submit"
            className="border text-white border-white w-full py-2 rounded-md font-nasalization hover:bg-white hover:text-black transition-all duration-500 "
          >
            Download Ticket
          </button>
        </div>
      </form>

      {/* <button
        className="text-white"
        onClick={() =>
          window.location.replace(
            "https://admin.etceventsltd.com/public/success/64e8dd8c7ee67"
          )
        }
      >
        download
      </button> */}
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default DownloadticketForm;
