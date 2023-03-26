import AdminSideBar from "../Components/HOCs/AdminSideBar/AdminSideBar";
import LoginSignUpHeader from "../Components/HOCs/LoginSignUpHeader/LoginSignUpHeader";
import UserHeader from "../Components/HOCs/UserHeader/UserHeader";
import AddNewMoviePage from "../Pages/AddNewMoviePage/AddNewMoviePage";
import AddNewUserPage from "../Pages/AddNewUserPage/AddNewUserPage";
import BookingPage from "../Pages/BookingPage/BookingPage";
import CreateShowtimePage from "../Pages/CreateShowtimePage/CreateShowtimePage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MovieDetailPage from "../Pages/MovieDetailPage/MovieDetailPage";
import MovieEditPage from "../Pages/MovieEditPage/MovieEditPage";
import MovieListPage from "../Pages/MovieListPage/MovieListPage";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import UserDetailPage from "../Pages/UserDetailPage/UserDetailPage";
import UserEditPage from "../Pages/UserEditPage/UserEditPage";
import UserListPage from "../Pages/UserListPage/UserListPage";

export const routeInfoArray = [
  {
    path: "/",
    Layout: UserHeader,
    Component: HomePage,
  },
  {
    path: "/movies",
    Layout: UserHeader,
    Component: MoviesPage,
  },
  {
    path: "/sign-up",
    Layout: LoginSignUpHeader,
    Component: SignUpPage,
  },
  {
    path: "/login",
    Layout: LoginSignUpHeader,
    Component: LoginPage,
  },
  {
    path: "/user-detail",
    Layout: UserHeader,
    Component: UserDetailPage,
  },
  {
    path: "/booking/:showtimeID",
    Layout: UserHeader,
    Component: BookingPage,
  },
  {
    path: "/movie-detail/:movieID",
    Layout: UserHeader,
    Component: MovieDetailPage,
  },
  {
    path: "/administration/user-list",
    Layout: AdminSideBar,
    Component: UserListPage,
  },
  {
    path: "/administration/add-new-user",
    Layout: AdminSideBar,
    Component: AddNewUserPage,
  },
  {
    path: "/administration/movie-list",
    Layout: AdminSideBar,
    Component: MovieListPage,
  },
  {
    path: "/administration/add-new-movie",
    Layout: AdminSideBar,
    Component: AddNewMoviePage,
  },
  {
    path: "/administration/create-showtime/:movieID",
    Layout: AdminSideBar,
    Component: CreateShowtimePage,
  },
  {
    path: "/administration/user-edit/:account",
    Layout: AdminSideBar,
    Component: UserEditPage,
  },
  {
    path: "/administration/movie-edit/:movieID",
    Layout: AdminSideBar,
    Component: MovieEditPage,
  },
];
