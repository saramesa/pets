import React from "react"
import { NextIntlClientProvider } from "next-intl"
import messages from "../../../../messages/en.json"

export const TestProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
