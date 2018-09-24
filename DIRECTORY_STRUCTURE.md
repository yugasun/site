    .
    └── src
        ├── content                # Directory for blog content
        │   ├── blog               # Directory for blog content
        │   └── framework          # Directory for docs content
        ├── dynamic-content-generator  # Contains scripts to dynamically generate content
        │   ├── page                   # Contains scripts to dynamically generate docs, blogs, blog category and author pages
        │   └── node.js          	   # Contains scripts to update the blogs and docs data in graphql store
        ├── scripts                    # Contains scripts for automation
        │   ├── blog                   # Contains scripts for automating the normalization of markdown content of blogs
        │   ├── docs                   # Contains scripts for automating the normalization of markdown content of docs
        │   ├── utils                  # Contains utility scripts
        │   ├── build-config.js        # Script for generating `.env.development` and `.env.production` files
        │   └── redirects.js           # Script for copying `_redirects` file to public folder from the project root directory
        ├── serverless-design-system   # Design system for serverless
        ├── src                        # Source code for serverless website
        │   ├── assets                 # Stores all the fonts and images needed by the website
        │   ├── components             # Defines all the re-usable and page components needed by serverless website
        │   ├── constants              # Defines all the constants
        │   ├── fragments              # Defines all the re-usable fragment(or UI widget) components.
        │   ├── layouts                # Contains layouts for different pages. Example: Blog layout, Doc layout
        │   ├── pages                  # Contains components for every static page in the website
        │   ├── templates              # Contains templates for generating docs, blogs, categories and authors pages dynamically
        │   ├── utils                  # Defines utility functions
        │   ├── _config                # Contains site-wide config, API keys and tokens
        │   └── _redirects             # Contains redirect rules for netlify
        └── netlify.toml               # Contains netlify config
