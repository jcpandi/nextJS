
//import { Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout

import Link from "next/link"
import Layout from "@/components/Layout"
import styles from '@/styles/404.module.css'
export default function NotFoundPage() {
    return (
      <Layout title='Error 404 | Page Not Found'>
          <div className={styles.error}>
              <h1> 404</h1>
              <h4>Sorry, there is nothing here</h4>
              <Link href='/'>Go Back Home</Link>
          </div>
      </Layout>
    )
}
