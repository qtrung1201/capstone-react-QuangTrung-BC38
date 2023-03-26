import moment from "moment";

export const getDayOfWeek = (date, language = "vi") => {
  const dayOfWeek = moment(date).format("dddd");

  if (language === "vi") {
    switch (dayOfWeek) {
      case "Sunday":
        return "Chủ nhật";

      case "Monday":
        return "Thứ hai";

      case "Tuesday":
        return "Thứ ba";

      case "Wednesday":
        return "Thứ tư";

      case "Thursday":
        return "Thứ năm";

      case "Friday":
        return "Thứ sáu";

      case "Saturday":
        return "Thứ bảy";

      default:
        return dayOfWeek;
    }
  }

  return dayOfWeek;
};
