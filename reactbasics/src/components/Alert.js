import React from "react";

export default function Alert(props) {
  let capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div
          class={`alert alert-warning alert-dismissible fade show bg-${props.alert.type} text-light`}
          role="alert"
        >
          {capitalize(props.alert.type)} : {props.alert.message}
        </div>
      )}
    </div>
  );
}
