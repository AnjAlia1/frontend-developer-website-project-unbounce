const Content = () => {
  return (
    <div className="content-section">
      <h1>Build landing pages faster with AI</h1>
      <p>
        Unbounce landing pages have helped businesses turn billions of visitors
        into leads, sales, and signups. (Literally.) Combining that data with
        AI, Unbounce lets you create custom landing pages twice as fast as
        old-school builders.Oh. And get way better results, too.
      </p>
      <div className="all-pages">
        <div className="page">
          <img src="https://unbounce.com/photos/Copy-Paste.png" alt="" className="icon lazyloaded" width="42px" height="42px" />

          <h3>Create your pages</h3>
          <p>
            Make landing pages, popups, and sticky bars on your own. Unbounce
            has easy-to-use builders for any skill level—plus personalized
            recommendations to help you optimize every step of the way.
          </p>
          <span>Create your pages</span>
        </div>
        <div className="page">
          <img src="https://unbounce.com/photos/Smart-Copy-Icon.png" alt="" className="icon lazyloaded" width="42px" height="42px" />
          <h3>… And write your copy</h3>
          <p>
            Writer’s block is so… Uh, what’s the word? With AI copywriting
            tools, you can instantly generate, remix, and expand content for
            anything—like landing pages, ads, emails—in seconds.
          </p>
        </div>
        <div className="page">
          <img src="https://unbounce.com/photos/Smart-Traffic-Icon.png" alt="" className="icon lazyloaded" width="42px" height="42px" />
          <h3>… And optimize your traffic</h3>
          <p>
            Improve your results with the click of a button. Unbounce routes
            your visitors to the best landing page for people like them and—on
            average—gets you 30% more sales and signups.
          </p>
          <span>Optimize your traffic</span>
        </div>
      </div>
      {/* <video className="lazywrapper" src="https://fast.wistia.net/embed/iframe/ngi8tlre0p" type="embed-data"></video> */}
      {/* <div className="lazywrapper"> */}
      <iframe
        title="Wistia Video"
        src="https://fast.wistia.net/embed/iframe/ngi8tlre0p"
        // width="640"
        width="40%"
        // height="360"
        height="70%"
        frameBorder="0"
      // allowFullScreen
      ></iframe>
      {/* </div> */}
    </div>
  );
};
export default Content;

