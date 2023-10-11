'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Modal from './components/Modal'

export default function Home() {

  return (
    <>
      <Modal><h1>Sign in modal!</h1></Modal>
      <Navbar />
    </>
  )
}
