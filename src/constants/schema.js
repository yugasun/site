module.exports = {
    blogs: {
        '/blog/amazon-rds-proxy/': `
            {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://serverless.com/blog/amazon-rds-proxy/"
            },
            "headline": "Amazon RDS Proxy makes it easier to use SQL in Serverless",
            "description": "The release of the Amazon RDS Proxy at re:Invent 2019 removes one of the main objections to using relational databases in serverless applications. Read this post to understand why.",
            "image": "https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/amazon-rds-proxy/amazon-rds-proxy-header.png",  
            "author": {
                "@type": "Person",
                "name": "Alex DeBrie"
            },  
            "publisher": {
                "@type": "Organization",
                "name": "Serverless",
                "logo": {
                "@type": "ImageObject",
                "url": "https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/serverless-logo-jsonld.png",
                "width": 600,
                "height": 60
                }
            },
            "datePublished": "2019-12-04",
            "dateModified": "2019-12-04"
            }
        `,
        '/blog/reinvent-2019-serverless-announcements/': `
            {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://serverless.com/blog/reinvent-2019-serverless-announcements/"
            },
            "headline": "All the Serverless announcements at re:Invent 2019",
            "description": "Not at AWS re:Invent 2019? That's ok; we're compiling all the most important serverless announcements and updates. Updating live all week.",
            "image": "https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/reinvent/reinvent-2019-announcements-header.png",
            "author": {
            "@type": "Person",
            "name": "Gareth McCumskey"
            },
            "publisher": {
            "@type": "Organization",
            "name": "Serverless",
            "logo": {
                "@type": "ImageObject",
                "url": "https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/serverless-logo-jsonld.png",
                "width": 600,
                "height": 60
            }
            },
            "datePublished": "2019-12-02",
            "dateModified": "2019-12-05"
        }
        `
    }
}