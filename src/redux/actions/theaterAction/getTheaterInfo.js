import { theaterService } from "../../../services/theater/theater.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const getTheaterInfo = ({ theaterChainID, onSuccess }) => {
  theaterService
    .getTheaterInfo(theaterChainID)
    .then((success) => {
      onSuccess(success);
    })

    .catch((error) => {
      openNotification({
        message: (
          <p className="text-red-500 m-0">Lấy thông tin rạp chiếu thất bại!</p>
        ),
        description: error.response.data.content,
      });
    });
};
