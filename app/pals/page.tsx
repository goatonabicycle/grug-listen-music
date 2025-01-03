import Image from "@/components/image";

const Pals = () => {
  const pals = [
    {
      name: "Last Rites",
      url: "https://yourlastrites.com/",
    },

    {
      name: "CVLTNation",
      url: "https://cvltnation.com/",
    },
    {
      name: "Cultmetalflix",
      url: "https://cultmetalflix.wordpress.com/",
    },
    {
      name: "Noob Heavy",
      url: "https://noobheavy.com/",
    },
    {
      name: "Mostly Metal",
      url: "https://mostly-metal.net/",
    },
    {
      name: "Toilet ov Hell",
      url: "https://toiletovhell.com/",
    },
    {
      name: "A Closer Listen",
      url: "https://acloserlisten.com/",
    },
    {
      name: "Machine Music",
      url: "https://machinemusic.net/",
    },
    {
      name: "Angry Metal Guy",
      url: "https://www.angrymetalguy.com/",
    },
    {
      name: "Echoes and Dust",
      url: "https://echoesanddust.com/",
    },
    {
      name: "No Clean Singing",
      url: "https://www.nocleansinging.com/",
    },
    {
      name: "Invisible Oranges",
      url: "https://www.invisibleoranges.com/",
    },
    {
      name: "Teeth of the Divine",
      url: "https://www.teethofthedivine.com/",
    },
    {
      name: "Everything Is Noise",
      url: "https://everythingisnoise.net/",
    },
    {
      name: "Heavy Blog Is Heavy",
      url: "https://www.heavyblogisheavy.com/",
    },
    {
      name: "Can This Even Be Called Music?",
      url: "https://canthisevenbecalledmusic.com/",
    },
  ];

  const others = [
    {
      name: "Ampwall",
      url: "https://ampwall.com/",
      description: "",
    },
    {
      name: "jtextreme",
      url: "https://jtextreme.com/",
      description: "",
    },
    {
      name: "sEYEmon",
      url: "https://twitter.com/sEYEmon",
      description: "",
    },
    {
      name: "KManriffs",
      url: "https://twitter.com/KManriffs",
      description: "",
    },
    {
      name: "BeaverMosh",
      url: "https://www.youtube.com/@beavermosh4401",
      description: "",
    },
    {
      name: "Audio Antihero",
      url: "http://audioantihero.com/",
      description: "",
    },
    {
      name: "Fiadh Productions",
      url: "https://fiadh.bandcamp.com/",
      description: "",
    },
    {
      name: "WereGnome Records",
      url: "https://weregnomerecords.bandcamp.com/",
      description: "",
    },
    {
      name: "Sentient Ruin Laboratories",
      url: "http://sentientruin.com/main",
      description: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <Image
        className=""
        src={"/images/grug-full.png"}
        alt={"Grug cave home"}
        priority
        sizes="(min-width: 1200px) 100vw, 100vw"
      />

      <div className="px-10 py-20 text-center w-full">
        <p className="mb-4">
          Grug have many pals look up to. <br />
          Grug build little shrines for them here. <br />
          You click. You read.
        </p>

        <div className="flex flex-wrap justify-center gap-40 text-xl">
          <div>
            <p className="mb-4">
              Pals do actual reviews and words. <br />
            </p>

            {pals.map((pal) => (
              <div key={pal.name}>
                <a href={pal.url} target="_blank" className="underline">
                  {pal.name}
                </a>
              </div>
            ))}
          </div>
          <div>
            <h2 className="mb-4">Pals do best things with music.</h2>
            {others.map((pal) => (
              <div key={pal.name}>
                <a href={pal.url} target="_blank" className="underline">
                  {pal.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pals;
