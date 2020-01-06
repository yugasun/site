import React from 'react'
import Helmet from 'react-helmet'

const Mta = () => {
  return (
    <Helmet>
      <script>
        {`
  var _mtac = {};
  (function() {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500707349");

    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
  })();
  `}
      </script>
    </Helmet>
  )
}

export default Mta
