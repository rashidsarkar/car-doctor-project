import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axiosInstance from "../../AxiosAPI/axiosInstance";
import CustomLoading from "../../Components/CustomLoading";
import { useContext } from "react";
import { AuthContexr } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";

function CheckOut() {
  const { idx } = useParams();
  const { user } = useContext(AuthContexr);
  const {
    data: service,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const result = await axiosInstance.get(`/services/${idx}`);
      return result.data;
    },
    queryKey: ["singleService"],
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (postData) => {
      const result = await axiosInstance.post("/bookings", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result.data);
      return result.data;
    },
    mutationKey: ["bookingData"],
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Booking has been made successfully.",
      });
    },
  });

  if (isLoading) {
    return <CustomLoading></CustomLoading>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { title, _id, price, img } = service;

  const handleBookService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
    };
    console.log(order);
    try {
      await mutateAsync(order);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-center">Book Service : {title}</h2>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              defaultValue={user?.displayName}
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={`$ ${price}`}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="mt-6 form-control">
          <button type="submit" className="btn btn-block btn-success">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
