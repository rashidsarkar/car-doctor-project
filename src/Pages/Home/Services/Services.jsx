import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../AxiosAPI/axiosInstance";
import CustomLoading from "../../../Components/CustomLoading";

function Services() {
  const {
    data: services,
    isLoading,

    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get("/services");
      return res.data;
    },
    queryKey: ["serviceHomeCard"],
  });

  if (isLoading) {
    return <CustomLoading></CustomLoading>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Service</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br className="hidden lg:block" /> words which
          don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesCard service={service} key={service._id}></ServicesCard>
        ))}
      </div>
      <button className="block mx-auto my-10 btn btn-outline btn-error">
        More Services
      </button>
    </div>
  );
}

export default Services;
