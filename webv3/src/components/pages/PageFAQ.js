import React from 'react'
import { FaqPanal } from './parts/faqPanal'
const PageFAQ = () => {
    return <div>

        <FaqPanal faqTitle={"Is This Free?"} faqText={"This site is free to use."} />
        <FaqPanal  faqTitle={"Why does this exist?"} faqText={"This is a project for my WEB601 class."} />
        <FaqPanal  faqTitle={"Who are you?"} faqText={"???"} />
    </div>
}

export default PageFAQ