import React from 'react';
import BlogSignup from 'src/components/pages/blog/FirstBlogListMidSignup'
import styles from '../BlogList.module.css'

const NewsletterOptin = (props) => (
        <div className={styles.newsletterOptin}>
            <BlogSignup />
        </div>  
);

export default NewsletterOptin;