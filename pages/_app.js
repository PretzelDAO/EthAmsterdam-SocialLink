import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import UserContext from '../contexts/UserContext'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import {
  getUserFromWalletWithPreference,
  requestUserLogin,
} from '../utils/auth'

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({
    user: null,
    profileId: null,
    update,
  })
  function update(data) {
    let updateData = data
    Object.keys(state).forEach(function (key) {
      if (key in data) {
        // or obj1.hasOwnProperty(key)
        updateData[key] = data[key]
      } else {
        updateData[key] = state[key]
      }
    })
    console.log('updating state', updateData, state, data)
    setState(Object.assign({}, state, updateData))
  }
  const global = useContext(UserContext);
  useEffect(() => {
    // import('tw-elements')
    // const user = localStorage.getItem('user')
    if (!global.user) {
      getUserFromWalletWithPreference()
    }
    // const profileId = localStorage.getItem('profileId')
    // const profile = localStorage.getItem('profile')
    // console.log('user logged in', profileId)

    // if (profileId) {
    //   update({ profileId, profile: JSON.parse(profile) })
    // }
  }, [])

  return (
    <UserContext.Provider value={state}>
      <div className=" max-w-full max-h-full h-full min-h-screen  bg-grape-blue-900 text-gray-700 font-opensans flex justify-center  text-base font-semibold">
        <div className="flex items-center flex-col w-screen bg-background-200">
          <Header />
          {/* <Link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <Link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            type="text/css"
          /> */}

          <div className="max-w-7xl w-full px-5">
            <Component {...pageProps} className="w-screen" />
          </div>
          <footer className={styles.footer}>
            <a
              href="https://pretzeldao.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by PretzelDAO
            </a>
            <img src={'/images/pretzel-color.svg'} className="h-8" />
          </footer>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default MyApp
