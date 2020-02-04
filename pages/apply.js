import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import { title } from '../components/content/_apply'
import Learn from '../components/learn/learn'
import WufooForm from 'react-wufoo-embed'
import FAQ from '../components/faq/faq'
import ApplySection from '../components/apply-section/apply-section'
import Learning from '../components/learning-section/learning'
import ApplicationDeadline from '../components/apply-section/deadline/deadline'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content id='apply'>
      <ApplySection />
    </Content>
    <Content>
      <ApplicationDeadline />
    </Content>
    <Content>
      <Learning />
    </Content>
    <Content id='apply-for-class'>
      <h2>Application Form</h2>
      <WufooForm
        userName='cphhackyourfuture'
        formHash='zoi8p750ffer4r'
        header='hide'
      />
    </Content>
    <Content id='learn'>
      <Learn />
    </Content>
    <Content>
      <FAQ />
    </Content>
  </Layout>
)
