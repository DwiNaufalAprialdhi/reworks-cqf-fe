import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

type DateValueType = {
      startDate: Date | null;
      endDate: Date | null;
} | null;

const NEXT_MONTH = new Date();
NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);

const Datepickers = () => {
      const [value, setValue] = useState<DateValueType>({
            startDate: new Date(),
            endDate: NEXT_MONTH,
      });

      return (
            <Datepicker
                  primaryColor={"sky"}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  showShortcuts={true}
            />
      );
};

export default Datepickers;
