import Head from "next/head";

// meta head section
export function MetaHead() {
  return (
    <Head>
      <title>Open Auto</title>
      <meta
        name="description"
        content="Vehicle Maintenance at the convenience of your phone. Book your car repairs, maintenance, and towing right through our OpenAuto Platform"
      />
      <meta
        name="keywords"
        content="openauto,open auto,car repair,vehicle maintenance,car towing,fleet management platform, car mainenance management,vehicle repair,mechanical repair, repair my car, fix my car, vehicle repair app"
      />
      <meta name="author" content="OpenAuto" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}