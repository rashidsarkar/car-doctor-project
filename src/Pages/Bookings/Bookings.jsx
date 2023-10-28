import { useContext, useEffect } from "react";
import { AuthContexr } from "../../firebase/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../AxiosAPI/axiosInstance";
import CustomLoading from "../../Components/CustomLoading";
import axios from "axios";
import BookingRow from "./BookingRow";

function Bookings() {
  const { user } = useContext(AuthContexr);

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get(`/bookings?email=${user?.email}`, {
        withCredentials: true,
      });
      return res.data;
    },
    queryKey: ["bookingData"],
  });
  useEffect(() => {
    refetch();
  }, [user, refetch]);

  if (isLoading) {
    return <p>loading.......</p>;
  }
  console.log(bookings);

  return (
    <div>
      <p className="text-3xl text-center">Your bookings : {bookings.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className=" bg-slate-300">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="font-bold">Image</th>
              <th className="font-bold">Service</th>
              <th className="font-bold">Date</th>
              <th className="font-bold">Service Price</th>
              <th className="font-bold">Status</th>
              <th className="font-bold"></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item) => (
              <BookingRow booking={item} key={item._id}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
