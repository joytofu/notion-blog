import React from 'react';
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import { DynamicLayout } from '@/themes/theme'
import { getGlobalData } from '@/lib/db/getSiteData'
import { siteConfig } from '@/lib/config'
import BLOG from '@/blog.config'




const ContactPage = props  => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return (
    <>
      <Head>
        <title>Contact Us | Career Distiller</title>
      </Head>
      <DynamicLayout theme={theme} layoutName='LayoutContact' {...props}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
          <h1>Contact Us</h1>
          <ContactForm />
        </div>
      </DynamicLayout>
    </>
  );
};

export async function getStaticProps(req) {
  const { locale } = req
  const props = (await getGlobalData({ from: 'contact', locale })) || {}
  return { props }
}

export default ContactPage;