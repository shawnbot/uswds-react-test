export default ({assetURL}) => {
  return (
    <div className="usa-banner">
      <div className="usa-accordion">
        <header className="usa-banner-header">
          <div className="usa-grid usa-banner-inner">
          <img src={`${assetURL}img/favicons/favicon-57.png`} alt="U.S. flag">
          <p>An official website of the United States government</p>
          <button className="usa-accordion-button usa-banner-button" aria-expanded="false" aria-controls="gov-banner">
            <span className="usa-banner-button-text">Here's how you know</span>
          </button>
          </div>
        </header>
        <div className="usa-banner-content usa-grid usa-accordion-content" id="gov-banner" aria-hidden="true">
          <div className="usa-banner-guidance-gov usa-width-one-half">
            <img className="usa-banner-icon usa-media_block-img" src={`${assetURL}img/icon-dot-gov.svg`} alt="Dot gov">
            <div className="usa-media_block-body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>
                Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
              </p>
            </div>
          </div>
          <div className="usa-banner-guidance-ssl usa-width-one-half">
            <img className="usa-banner-icon usa-media_block-img" src={`${assetURL}img/icon-https.svg`} alt="SSL">
            <div className="usa-media_block-body">
              <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted &nbsp;— in other words, any information or browsing history that you provide is transmitted securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
