const Secret = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <div className="px-10 py-20 text-center w-full">
        <p className="mb-4">Secret embed yay!</p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="mb-2">Should work:</p>
            <iframe
              src="https://ampwall.com/services/PlayerCard/v1/content/exclusive?embedId=0192c035-5f68-7650-a225-97db82245d75&controlStyle=persistent&playerWidth=350"
              style={{
                width: "350px",
                minWidth: "350px",
                height: "501px",
                minHeight: "492px",
              }}></iframe>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2">Should not work:</p>
            <iframe
              src="https://ampwall.com/services/PlayerCard/v1/content/exclusive?embedId=0192c051-6f2b-7f70-85b9-59f6900c3038&controlStyle=persistent&playerWidth=350"
              style={{
                width: "350px",
                minWidth: "350px",
                height: "501px",
                minHeight: "492px",
              }}></iframe>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2">witnesses</p>
            <iframe
              src="https://ampwall.com/services/PlayerCard/v1/content/exclusive?embedId=0192c034-57d2-7181-85ab-8e4828ba6017&controlStyle=persistent&playerWidth=350"
              style={{
                width: "350px",
                minWidth: "350px",
                height: "501px",
                minHeight: "492px",
              }}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secret;
