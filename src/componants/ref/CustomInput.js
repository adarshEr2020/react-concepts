import React, { forwardRef } from "react";

export const CustomInput = forwardRef((props, ref) => {
  console.log(props, ref);
  return <input ref={ref} {...props} />;
});
