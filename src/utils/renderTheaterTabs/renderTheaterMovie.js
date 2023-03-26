import moment from "moment";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { StyledDarkButton } from "../../Components/StyledComponents/StyledButton";

export const rendTheaterMovie = (theaterData) => {
  let showDay;
  return theaterData.danhSachPhim.map((movie) => {
    return (
      <div
        key={movie.maPhim}
        className="sm:flex pb-3 pr-6 pl-6 md:pl-0 items-start"
      >
        <div className="flex items-center">
          <img
            src={movie.hinhAnh}
            alt="..."
            className="max-w-none w-40 sm:w-32 xl:w-56 object-contain"
          />
          <p className="sm:hidden ml-5">{movie.tenPhim.toUpperCase()}</p>
        </div>

        <div className="sm:pl-5">
          <p className="hidden sm:block text-xl">
            {movie.tenPhim.toUpperCase()}
          </p>

          <div className="w-full mt-3">
            {movie.lstLichChieuTheoPhim.map((item) => {
              const movieShowDay = moment(item.ngayChieuGioChieu).format(
                "MMM DD"
              );
              const movieShowTime = moment(item.ngayChieuGioChieu).format(
                "hh:mm"
              );
              const movieButton = (
                <NavLink
                  to={`/booking/${item.maLichChieu}`}
                  key={item.maLichChieu}
                >
                  <StyledDarkButton
                    className="mr-2 mb-2"
                    style={{ padding: "0.25rem 1rem" }}
                  >
                    {movieShowTime}
                  </StyledDarkButton>
                </NavLink>
              );

              if (showDay !== movieShowDay) {
                showDay = movieShowDay;

                return (
                  <Fragment key={item.maLichChieu}>
                    <p className="mt-3 mb-1 font-medium">
                      {movieShowDay.toUpperCase()}
                    </p>
                    {movieButton}
                  </Fragment>
                );
              } else {
                return movieButton;
              }
            })}
          </div>
        </div>
      </div>
    );
  });
};
