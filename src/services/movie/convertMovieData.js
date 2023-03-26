export const convertMovieList = (movieList) => {
  return movieList.map(
    ({
      maPhim,
      tenPhim,
      biDanh,

      hinhAnh,
      trailer,
      moTa,

      dangChieu,
      sapChieu,
      ngayKhoiChieu,

      danhGia,
      hot,

      maNhom,
    }) => {
      return {
        movieID: maPhim,
        movieName: tenPhim,
        hyphentedMovieName: biDanh,

        image: hinhAnh,
        trailer,
        movieDescription: moTa,

        nowShowing: dangChieu,
        commingSoon: sapChieu,
        premiereDate: ngayKhoiChieu,

        rate: danhGia,
        hot,

        groupID: maNhom,
      };
    }
  );
};
