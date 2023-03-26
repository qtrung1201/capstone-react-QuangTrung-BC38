import { Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieListPageMovieAction from "./MovieListPageMovieAction";

function MovieInfoTag({ title, content }) {
  return (
    <>
      <p className="pb-1">
        <span className="inline-block mr-1 font-semibold">{title}</span>
        <span>{content}</span>
      </p>
    </>
  );
}

export default function MovieListPage() {
  const { movieList } = useSelector((state) => state.movieReducer);
  const [newMovieList, setNewMovieList] = useState();

  useEffect(() => {
    movieList &&
      setNewMovieList(
        movieList.map((item) => ({
          ...item,
          action: <MovieListPageMovieAction movieID={item.movieID} />,
        }))
      );
  }, [movieList]);

  const columns = [
    Table.EXPAND_COLUMN,
    {
      title: "Mã phim",
      dataIndex: "movieID",
      key: "movieID",
    },
    {
      title: "Tên phim",
      dataIndex: "movieName",
      key: "movieName",
    },
    {
      title: "Ngày công chiếu",
      dataIndex: "premiereDate",
      key: "premiereDate",
      render: (premiereDate) => (
        <>
          <p>{moment(premiereDate).format("DD/MM/YYYY")}</p>
        </>
      ),

      align: "center",
    },
    {
      title: "Thao tác",
      key: "movieID",
      dataIndex: "action",

      width: 220,
      fixed: "right",
      align: "center",
    },
  ];

  return (
    <>
      <div className="container mx-auto h-screen p-10">
        {newMovieList && (
          <Table
            className="module"
            dataSource={newMovieList}
            rowKey={"movieID"}
            columns={columns}
            expandable={{
              expandedRowRender: (movie) => {
                const { image, groupID, rate, trailer, movieDescription } =
                  movie;
                return (
                  <>
                    <div className="w-full flex">
                      <img
                        src={image}
                        alt="..."
                        style={{ width: 120, height: 180, objectFit: "cover" }}
                      />
                      <div className="ml-10">
                        <MovieInfoTag title={"Mã nhóm:"} content={groupID} />
                        <MovieInfoTag title={"Điểm đánh giá:"} content={rate} />
                        <MovieInfoTag title={"Trailer:"} content={trailer} />
                        <MovieInfoTag
                          title={"Mô tả:"}
                          content={
                            movieDescription.length >= 250
                              ? movieDescription.slice(0, 250) + "..."
                              : movieDescription
                          }
                        />
                      </div>
                    </div>
                  </>
                );
              },
            }}
            scroll={{
              x: 1100,
              y: "calc(100vh - 190px)",
            }}
          />
        )}
      </div>
    </>
  );
}
