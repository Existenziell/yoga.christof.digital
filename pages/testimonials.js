import Head from "next/head"
import Nav from "../components/Nav"

const Testimonials = () => {
  return (
    <div className="bg-cloth-pattern dark:bg-cloth-pattern-dark">
      <Head>
        <title>Testimonials | yoga.christof.digital</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
        <meta name="description" content="Join me on a visual journey through my life | yoga.christof.digital | shift-happens" />
        <script async defer crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0&appId=239066989437628&autoLogAppEvents=1"
          nonce="ZIpEmU7h">
        </script>
      </Head>
      <Nav />

      <div className="flex flex-col items-center justify-content px-4 md:px-8 py-16 md:py-32">
        <h1 className="text-4xl mb-2">Testimonials</h1>
        <p className="mb-12 max-w-sm text-center">Let's see how students described their experience with shift_happens_yoga:</p>
        {/* <section className="flex items-center justify-center"> */}
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fshahar.a.yadid%2Fposts%2F10215294421014106&show_text=true" className="absolute top-0 left-0 right-0 bottom-0 h-full w-full border-none overflow-hidden shadow" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fmarc.radtke%2Fposts%2F2826244507399318&show_text=true" className="absolute top-0 left-0 right-0 bottom-0 h-full w-full border-none overflow-hidden shadow" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fty.maryna%2Fposts%2F10156362442802034&show_text=true" className="absolute top-0 left-0 right-0 bottom-0 h-full w-full border-none overflow-hidden shadow" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Ftatayikwantse%2Fposts%2F2673583402869532&show_text=true" className="absolute top-0 left-0 right-0 bottom-0 h-full w-full border-none overflow-hidden shadow" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fchristiane.eitle%2Fposts%2F1971860406185436&show_text=true" className="absolute top-0 left-0 right-0 bottom-0 h-full w-full border-none overflow-hidden shadow" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        {/* </section> */}
        {/* <div id="fb-root" /> */}
      </div>
    </div>
  )
}

export default Testimonials
