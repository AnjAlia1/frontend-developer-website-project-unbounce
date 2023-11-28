const Services = () => {
  return (
    <div className="services-page-section">
      <h1>No matter how you grow, we can help </h1>
      <p>
        Your business is unique—and so is the way you grow it online. Whatever
        you want to achieve with your marketing, Unbounce has a solution that
        can help you do it better, faster.
      </p>
      <section>
        <iframe
          src="//fast.wistia.net/embed/iframe/usasvjwbyr?videoFoam=true&amp;autoplay=true"
          //   allowFullScreen
          title="Embedded Video"
        ></iframe>
        <div className="services-amplify-section">
          <div>
            <img src="https://unbounce.com/photos/Copy-Paste.png"></img>
            <h1>Sell products and services</h1>
            <p>
              Grow your online store with landing pages built to sell. Connect
              ecommerce tools to showcase your products and accept payments
              right on your page, simplifying your buyer journey.
            </p>
            <a href="https://unbounce.com/solutions/industry/ecommerce/">
              Amplify your sales
            </a>
          </div>
          <div>
            <img src="https://unbounce.com/photos/Smart-Copy-Icon.png"></img>
            <h1>Collect leads and signups</h1>
            <p>
              Expand your email list, fill your sales pipeline, and get new
              customers. With form-based landing pages, you can capture visitor
              information and keep your marketing funnel full.
            </p>
            <a href="https://unbounce.com/solutions/use-case/lead-generation/">
              Increase your leads
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="services-marketing-option">
          <div>
            <img src="https://unbounce.com/photos/Copy-Paste.png"></img>
            <h1>Get your business online</h1>
            <p>
              Create landing pages and marketing campaigns that get your small
              business noticed. Best part? You can do it all yourself—without
              copywriters, designers, or developers.
            </p>
            <a
              className="link"
              href="https://unbounce.com/solutions/industry/ecommerce/"
            >
              Promote your business
            </a>
          </div>
          <div>
            <img src="https://unbounce.com/photos/Smart-Copy-Icon.png"></img>
            <h1>Grow your marketing agency</h1>
            <p>
              Once you get clients, keep ’em. With customizable landing page
              templates and smart optimization features, you can launch
              high-converting campaigns at mad scale.
            </p>
            <a
              className="link"
              href="https://unbounce.com/solutions/use-case/lead-generation/"
            >
              Wow your clients
            </a>
          </div>
        </div>
        <iframe
          src="//fast.wistia.net/embed/iframe/usasvjwbyr?videoFoam=true&amp;autoplay=true"
          //   allowFullScreen
          title="Embedded Video"
        ></iframe>
        {/* <iframe
          src="fast.wistia.net/embed/iframe/usasvjwbyr?videoFoam=true&amp"
            allowFullScreen
          title="Embedded Video"
        ></iframe> */}
      </section>
      <section className="ConciergePlans">
        <div className="Concierge-content">
          <h1>Scale your marketing without limits</h1>
          <p>
            Expert support. Seamless integrations. Maximum ROI. Unbounce’s
            Concierge plans give you the power to quickly and efficiently scale
            your marketing to any number of conversions.
          </p>
          <h3>Learn about Concierge plans</h3>
        </div>
        <img src="https://unbounce.com/photos/scale-your-marketing.png"></img>
      </section>
    </div>
  );
};

export default Services;
