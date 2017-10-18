---
title: Serverless Onboarding
layout: Blank
scripts: https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/apps/aws-onboarding/aws-onboarding-loader.js
inlineJS: "
if (typeof window.loadAWSOnboarding !== 'undefined') {
  var t = document.getElementById('aws-onboarding');
  console.log(t);
  window.loadAWSOnboarding();
}
"
---

<div id="aws-onboarding"></div>
