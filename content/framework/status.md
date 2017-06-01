---
title: Serverless Roadmap
layout: Default
fullWidth: true
scripts: https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/apps/status-board/status-board-loader.js
inlineJS: "
if (typeof window.loadStatusBoard !== 'undefined') {
  window.loadStatusBoard();
}
"
inlineCSS: "
  #footer { display: none; }
  #status-board { min-height: 100vh; background: #1a1a1a; }
  body { overflow: hidden; }
  #github-cta {
    text-align: center;
    background: rgba(0, 0, 0, 0.85);
    padding: 15px;
    position: absolute; right: 10px; bottom: 10px; color: #fff;
  }
  #github-cta-link {
    color: #fff;
    border-bottom: none;
    font-size: 18px;
    font-weight: bold;
    cursor:pointer;
  }
  @media (max-width: 768px) {
    #github-cta {
      display: none;
    }
  }
"
---

<div id="status-board"></div>

<div id="github-cta">
  <div>Want a status board for your project?</div>
  <div>
    <a
      id="github-cta-link"
      target="_blank"
      href="https://github.com/serverless/scope">
      ⚡️ Fork the repo
    </a>
  </div>
</div>
