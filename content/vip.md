---
title: Serverless VIP
layout: Default
inlineCSS: "
.vip-form, .vip-header {
  width: 400px;
  margin: auto;
}
.vip-header {
  text-align: center;
  margin: 40px auto;
}
.vip-form {
  font-size: 16px;
  display: flex;
  flex-direction: column;
}
.vip-form input {
  font-size: 16px;
  padding: 20px;
  margin-bottom: 10px;
}
.vip-form button {
  border: none;
  font-size: 20px;
  min-height: 50px;
  cursor: pointer;
  margin-top: 10px;
  color: #fff;
  background: #000;
  font-weight: 100;
  letter-spacing: 1px;
}
"
---

<h1 class="vip-header">
  Sign up to the VIP group
</h1>

<form class="vip-form" action="https://8u11zg9bol.execute-api.us-west-2.amazonaws.com/dev/mailchimp" method="post">
  <input name="FNAME" placeholder="First Name" required />
  <input name="LNAME" placeholder="Last Name" required />
  <input name="EMAIL" placeholder="Email" required />
  <input name="LIST_ID" value="6961c5ae4e" type="hidden" />
  <input name="RURL" value="http://serverless.com/thanks" type="hidden" />
  <input name="MSG" value="Thanks for joining" type="hidden" />
  <button type="submit" formmethod="post" type="button">
    Sign up
  </button>
</form>
