import { createContext, useMemo, useState } from 'react'

type ContactModalContextValue = {
  contactModalOpened: boolean
  openContactModal: React.MouseEventHandler
  closeContactModal: React.MouseEventHandler
}

export const ContactModalContext =
  createContext<ContactModalContextValue>(undefined)

const ContactModalProvider = ({ children }) => {
  const [contactModalOpened, setContactModalOpened] = useState<boolean>(false)
  const openContactModal = () => setContactModalOpened(true)
  const closeContactModal = () => setContactModalOpened(false)

  const value = useMemo(
    () => ({
      contactModalOpened,
      openContactModal,
      closeContactModal,
    }),
    [contactModalOpened],
  )

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  )
}

export default ContactModalProvider
