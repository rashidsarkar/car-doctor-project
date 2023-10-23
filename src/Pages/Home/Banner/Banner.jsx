import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
function Banner() {
  return (
    <div className="w-full carousel lg:h-[600px]">
      <div id="slide1" className="relative w-full carousel-item">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute bottom-0 rounded-lg  space-x-5 h-full flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0  bottom-0">
          <div className="w-1/2 pl-12 text-white space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn btn-active btn-warning">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute bottom-0 rounded-lg  space-x-5 h-full flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0  bottom-0">
          <div className="w-1/2 pl-12 text-white space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn btn-active btn-warning">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide1" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute bottom-0 rounded-lg  space-x-5 h-full flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0  bottom-0">
          <div className="w-1/2 pl-12 text-white space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn btn-active btn-warning">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide2" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute bottom-0 rounded-lg  space-x-5 h-full flex items-center   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0  bottom-0">
          <div className="w-1/2 pl-12 text-white space-y-7">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn btn-active btn-warning">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-end space-x-5 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide3" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
