'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import SignInForm from './components/SignInForm'

export default function Home() {

  return (
    <>
      <Modal><SignInForm/></Modal>
      <Navbar />
    </>
  )
}
