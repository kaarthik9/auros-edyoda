import React from "react";

export default function ProductText() {
  return (
    <>
      <div className="w-richtext">
        <h2>Benefits of Shopping at Auros</h2>
        <p>
          The rich text element allows you to create and format headings,
          paragraphs, blockquotes, images, and video all in one place instead of
          having to add and format them individually. Just double-click and
          easily create content.
        </p>
        <h4>Static and dynamic content editing</h4>
        <p>
          A rich text element can be used with static or dynamic content. For
          static content, just drop it into any page and begin editing. For
          dynamic content, add a rich text field to any collection and then
          connect a rich text element to that field in the settings panel.
          Voila!
        </p>
        <h4>How to customize formatting for each rich text</h4>
        <p>
          Headings, paragraphs, blockquotes, figures, images, and figure
          captions can all be styled after a class is added to the rich text
          element using the "When inside of" nested selector system.
        </p>
        <p>‍</p>
      </div>

      <div>
        <h3 className="page-product-headin">Tweet about #Auros products</h3>
        <div className="w-widget w-widget-twitter">
          <iframe
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            src="//platform.twitter.com/widgets/tweet_button.html#counturl=biznus-template.io&amp;dnt=true&amp;height=28&amp;show_count=false&amp;size=l&amp;text=You'll%20love%20the%20product%20from%20Acme%20Outdoors!&amp;url=http%3A%2F%2Fbiznus-template.io&amp;width=76"
            styles={{border: "none", height: "28px", overflow: "hidden", width: "76px"}}
          ></iframe>
        </div>
      </div>
    </>
  );
}
