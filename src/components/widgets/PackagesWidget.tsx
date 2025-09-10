// import React from "react";

const PackagesWidget = (props: any) => {
  const { actionProvider } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <button
        style={{
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "5px",
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => actionProvider.handlePackage1?.()}
      >
        Website Package
      </button>
      <button
        style={{
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "5px",
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => actionProvider.handlePackage2?.()}
      >
        Branding Package
      </button>
      <button
        style={{
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "5px",
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => actionProvider.handlePackage3?.()}
      >
        Digital Marketing Package
      </button>
      <button
        style={{
          padding: "10px",
          border: "1px solid #000",
          borderRadius: "5px",
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => actionProvider.handlePackage4?.()}
      >
        Combo Package
      </button>
    </div>
  );
};

export default PackagesWidget;