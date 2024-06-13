import React from 'react'
import FAQ from './FAQ';
import style from "./faqs.module.css";
import { useState } from 'react';
import { faqsData } from './data'// for import we have use same name.

const FAQs = () => {
    const [faqs, setFaqs] = useState(faqsData)
  return (
   
  <main className={style.container}>
    <section className={style.faqs}>
        <h1>FAQs</h1>
        {faqs.map(faq => < FAQ  key={faq.id} {...faq}/>)}
    </section>
  </main>
  )
}

export default FAQs