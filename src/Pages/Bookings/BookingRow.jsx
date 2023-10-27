/* eslint-disable react/prop-types */
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Swal from "sweetalert2";
import axiosInstance from "../../AxiosAPI/axiosInstance";

function BookingRow({ booking }) {
  const queryClient = useQueryClient();

  const { customerName, price, service, date, _id, email, img } = booking;
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.delete(`/bookings/${id}`);
      return res.data;
    },
    // mutationKey: ["bookingData"],

    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Service has been Delete successfully.",
      });
      queryClient.invalidateQueries(["bookingData"]);
    },
  });

  const handleDelete = (itemId) => {
    const proceed = confirm("are you Sure");
    if (proceed) {
      mutateAsync(itemId);
    }
  };
  //handle Confirm API

  const { mutateAsync: mutateUpdateAsync } = useMutation({
    mutationFn: async (variables) => {
      const { id, upDatedData } = variables;
      const res = await axiosInstance.patch(`/bookings/${id}`, upDatedData, {
        "content-type": "application/json",
      });
      console.log(res.data);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Service has been Update successfully.",
      });
      queryClient.invalidateQueries(["bookingData"]);
    },
  });
  let myData = { status: "confirm" };
  const handleConfirm = async (idx) => {
    await mutateUpdateAsync({ id: idx, upDatedData: myData });
  };
  return (
    <>
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="w-24 h-24 rounded ">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{service}</td>
        <td>{date}</td>
        <td>${price}</td>
        {booking?.status ? (
          <td>
            <span className="font-bold text-green-500 text-2xl uppercase">
              {booking?.status}
            </span>
          </td>
        ) : (
          <td>
            {" "}
            <span className="font-bold text-yellow-500 text-2xl uppercase">
              Pending
            </span>
          </td>
        )}
        <th>
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm
          </button>
        </th>
      </tr>
    </>
  );
}

export default BookingRow;
