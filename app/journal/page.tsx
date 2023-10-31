import Image from "@/components/image";

const Pals = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Image
        className=""
        src={"/images/Asset 2.png"}
        alt={"Grug cave home"}
        priority
        sizes="(min-width: 1200px) 100vw, 100vw"
      />
      <div className="px-10 py-20 text-center w-full prose prose-custom lg:prose-lg max-xl:mx-auto mx-auto">
        <p className="mb-4">
          Grug use this page to keep track interesting dates. <br />
        </p>

        <p className="mb-4">
          30 October 2023 - Grug say Malokarpatan little bit Dungeon synth. Grug
          wrong oh no! Many love with Malokarpatan{" "}
          <a
            href="www.facebook.com/malokarpatan/posts/673036138141096"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          30 October 2023 - Grug big Afterbirth love{" "}
          <a
            href="https://www.facebook.com/AfterbirthNYDeathMetal/posts/737120051560658"
            target="_blank">
            here
          </a>
        </p>

        <p className="mb-4">
          Oct 26, 2023 - Chris from Woe make{" "}
          <a
            href="https://x.com/subvertallmedia/status/1717325968124068040?s=20"
            target="_blank">
            first mention
          </a>{" "}
          Grug. Grug suddenly live website!
        </p>

        <p className="mb-4">
          Oct 21, 2023 - Grug make first start on code for web site place.
        </p>
      </div>
    </div>
  );
};

export default Pals;
