import Head from "next/head";

function Homepage() {
  return (
    <div className="bg-att_black lg:px-36 p-10 text-white lg:py-52 space-y-10 h-full py-24">
      <Head>
        <title>Attmane | Go Beyond Possibilities </title>
        <meta
          name="description"
          content=" Every business requires a unique solution. And our goal is to develop
        such unique solutions which will optimize cost, time, and effort. Make
        your business go beyond possibilities."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p className="text-lg">Go beyond possibilities</p>
      <div className="flex-col text-5xl capitalize">
        <h4>
          Creating <span className="text-att_primary"> softwares </span>
        </h4>
        <h4>& Digital excellence</h4>
      </div>
      <button className="p-2 text-att_black font-medium capitalize text-lg bg-att_primary rounded-md">
        Explore our work
      </button>
      <p className="flex lg:w-1/3 lg:pt-10 text-lg">
        Every business requires a unique solution. And our goal is to develop
        such unique solutions which will optimize cost, time, and effort. Make
        your business go beyond possibilities.
      </p>
    </div>
  );
}

export default Homepage;
