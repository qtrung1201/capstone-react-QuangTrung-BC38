const imgRatio = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img.width / img.height);
  });
};

export const renderMovieList = {
  filterHomePageMovieList: (movieList) => {
    // đoạn này không dùng filter được được vì promise luôn là truthy, kết quả là sẽ pass hết các item không thoả điều kiện
    // tham khảo: https://anonystick.com/blog-developer/map-filter-and-reduce-voi-asyncawait-2020042532834108

    // không tạo một mảng rồi dùng forEach push từng item vào mảng đó được. Bởi vì, hàm imgRatio là hàm bất đồng bộ, dẫn đến khi return mảng đó và console log thì vẫn thấy đầy đủ các item đã được lọc. Tuy nhiên, khi console log length của mảng thì sẽ ra 0, mảng rỗng. Gây lỗi.
    // tham khảo: https://stackoverflow.com/questions/42260524/array-length-is-zero-but-the-array-has-elements-in-it#:~:text=length%20the%20array%20is%20empty,(after%20it's%20been%20filled).
    // 0.6694214876033058
    return movieList.map(async (item) => {
      return await imgRatio(item.image).then((imgRatio) =>
        Math.round(imgRatio * 100) === 66 || Math.round(imgRatio * 100) === 67
          ? item
          : null
      );
    });
  },

  renderMovieList: (
    movieList,
    MovieCard,

    renderStart = 0,
    renderQuantity = movieList.length,

    filterFunction = movieList
  ) => {
    // đoạn này viết để xử lý các kết quả dưới dạng promise do filter bất đồng bộ và cả đồng bộ
    async function convertResult() {
      return await Promise.all(filterFunction);
    }
    return convertResult().then((renderList) => {
      return renderList
        .filter((item) => item !== null)
        .splice(renderStart, renderQuantity)
        .map((item) => {
          return <MovieCard key={item.movieID} movie={item} />;
        });
    });
  },
};
