import Image from 'next/image'
import styles from '../styles/page.module.css'
import Layout from '@/components/Header'
import { Container } from 'postcss'
export default function Home() {
  return (
    <>
    <Layout></Layout>
    <section className={styles.con}>
      <div style={{height:'300px',width:'300px',border:'solid'}}>
       <Image src="next.svg" height={300} width={300}/>
      </div>
      <div>
        hello
      </div>
    </section>


    <section id='brand-info'className={styles.brandinfo}>
      <div id='brand-image' style={{border:'solid'}} >
        <Image src="vercel.svg" height={300} width={300}/>
      </div>
      <div id='brand-data' className={styles.branddata} >
        <p>
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
          This is some info about the brand.This is some info about the brand.
        </p>
      </div>
    </section>


    </>
  )
}
