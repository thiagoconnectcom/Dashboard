import React from "react";

//utils
import { FormatData } from "../../utils/formData";

export default function TitleBody({ title }) {
  const today = new Date();
  return (
    <h4 className="font-weight-bold py-3 mt-4 mb-4">
      {title}
      <div className="text-muted text-tiny mt-1">
        <small className="font-weight-normal">{FormatData(today)}</small>
      </div>
    </h4>
  );
}
