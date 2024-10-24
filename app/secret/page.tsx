const Secret = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <div className="px-10 py-20 text-center w-full">
        <p className="mb-4">Secret embed yay!</p>

        <div className="flex justify-center">
          Should work:
          <iframe
            src="https://ampwall.com/services/PlayerCard/v1/content/exclusive?embedId=0192c035-5f68-7650-a225-97db82245d75&controlStyle=persistent&playerWidth=350"
            style={{
              width: "350px",
              minWidth: "350px",
              height: "501px",
              minHeight: "492px",
            }}></iframe>
          <br />
          <br />
          Should not work:
          <iframe
            src="https://ampwall.com/services/PlayerCard/v1/content/exclusive?embedId=0192c051-6f2b-7f70-85b9-59f6900c3038&controlStyle=persistent&playerWidth=350"
            style={{
              width: "350px",
              minWidth: "350px",
              height: "501px",
              minHeight: "492px",
            }}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Secret;
